import addEmployeePage from '../../pages/PIM/addEmployeePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import employeeInformationPage from '../../pages/PIM/employeeListPage';
import ApplyLeavePage from '../../pages/Leave/applyLeavePage';
import MyLeaveListPage from '../../pages/Leave/myLeavePage';
import managePerformanceReviewsPage from '../../pages/Performance/employeeReviews';
import performanceReviewData from '../../fixtures/performanceReviewData.json';
import generalScenariosPage from '../../pages/generalScenarios/generalScenariosPage';
import employeeTimesheets from '../../pages/Time/myTimesheetsPage';
import employeeClaimsPage from '../../pages/Claim/employeeClaimsPage';
import jobTitlesPage from '../../pages/Admin/jobTitlesPage';
import purgeEmployeeRecordsPage from '../../pages/Maintenance/purgeEmployeeRecordsPage';
import trackerData from '../../fixtures/trackerData.json';
import eventsPage from '../../pages/Claim/eventsPage';


describe('Add Employee Page Tests', () => {
  let performanceReview;
  const firstName = `FirstName${Math.floor(Math.random() * 1000)}`;
  const middleName = 'MiddleName';
  const lastName = `LastName${Math.floor(Math.random() * 1000)}`;
  const employeeId = `EID${Math.floor(Math.random() * 10000)}`;
  const filePath = 'logo.png'; 
  const leaveType = 'CAN - FMLA';
  const fromDate = '2024-10-10';
  const toDate = '2024-11-10';
  const partialDays = 'All Days';
  const startDay = 'Half Day - Morning';
  const comment = 'Applying leave for personal reasons';
  const jobTitle = `Job title ${Math.floor(Math.random() * 1000)}`;
  const editedJobTitle=`Edited title${Math.floor(Math.random() * 1000)}`; 
  const eventName = 'Business Conference';
    const updatedDescription = 'Updated annual business conference description';
    const newEventData = {
        eventName: eventName,
        description: 'Annual business conference',
        isActive: true
    };
  performanceReview = performanceReviewData;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
   
});
    

  it('should add a new employee and fill report-to details/ verify employee has been added to the employee list', () => {
    cy.request('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC').then((response)=>{
      const data=response.body.data ;
      const   jobTitle=data[0].title;
       cy.contains('.oxd-main-menu-item','PIM').click({force:true});
       cy.contains('.oxd-topbar-body-nav-tab-item','Add Employee').click({force:true});
       addEmployeePage.enterFirstName(firstName);
       addEmployeePage.enterMiddleName(middleName);
       addEmployeePage.enterLastName(lastName);
       addEmployeePage.enterEmployeeId(employeeId);
       addEmployeePage.uploadProfilePicture(filePath);
       addEmployeePage.clickSave();
       addEmployeePage.verifyEmployeeAdded(lastName);
       cy.contains('.oxd-topbar-body-nav-tab-item','Employee List').click();
       employeeInformationPage.enterEmployeeName(lastName);
       employeeInformationPage.clickSearch();
       employeeInformationPage.verifyEmployeeInTable(lastName);
       generalScenariosPage.addSupervisorAndJobTitle(firstName,middleName,jobTitle);

  })
   
  });

  it('Apply for leave and verify that the leave requests appears under my leave', ()=>{
    cy.contains('.oxd-main-menu-item','Leave').click();
    cy.contains('.oxd-topbar-body-nav-tab-item','Apply').click();
    ApplyLeavePage.selectLeaveType(leaveType);
    ApplyLeavePage.enterFromDate(fromDate);
    ApplyLeavePage.enterToDate(toDate);
    ApplyLeavePage.selectPartialDays(partialDays);
    ApplyLeavePage.selectStartDay(startDay);
    ApplyLeavePage.enterComments(comment);
    ApplyLeavePage.clickApply();
    cy.contains('Success').should('be.visible');
    cy.contains('.oxd-topbar-body-nav-tab-item','My Leave').click();
    MyLeaveListPage.selectFromDate(fromDate);
    MyLeaveListPage.selectToDate(toDate);
    MyLeaveListPage.selectLeaveType(leaveType);
    MyLeaveListPage.clickSearch();
    cy.reload();
    cy.contains(`${fromDate} to ${toDate}`).should('be.visible');
    generalScenariosPage.cancelLeave(fromDate,toDate);
  })
  it('Should assign performance review for an employee', ()=>{
    let validUser,users,supervisor;
    performanceReview.newReview.employeeFirstAndLast=firstName +" "+ lastName;
    performanceReview.newReview.employeeName = firstName +" "+ middleName + " "+lastName ;
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC')
    .then((response) => {
         users = response.body.data;
         validUser = users.find(user => user.firstName==firstName && user.middleName==middleName && user.lastName==lastName);
         cy.log(validUser);
                 supervisor = validUser.supervisors[0];
                performanceReview.newReview.reviewerFirstName=supervisor.firstName;
                performanceReview.newReview.reviewerName = supervisor.middleName && supervisor.middleName!== "" 
                    ? `${supervisor.firstName} ${supervisor.middleName} ${supervisor.lastName}`
                    : `${supervisor.firstName} ${supervisor.lastName}`;
                    cy.contains('.oxd-main-menu-item','Performance').click();
    cy.contains('.oxd-topbar-body-nav-tab-item','Manage Reviews').click();
    cy.contains('.oxd-topbar-body-nav-tab-link','Manage Reviews').click();
    managePerformanceReviewsPage.addReview(performanceReview.newReview);
    cy.contains('.oxd-table-row',performanceReviewData.newReview.employeeFirstAndLast).should('be.visible');
                
    });
  })

  it('Should submit a week timesheet',()=>{
     let projectName;
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/projects?limit=50&offset=0&sortField=project.name&sortOrder=ASC&model=detailed')
    .then((response) => {
      const projects = response.body.data;
      projectName = projects[0].name;
      const activity = 'Bug Fixes'
      cy.contains('.oxd-main-menu-item','Time').click();
      cy.contains('.oxd-topbar-body-nav-tab-item','Timesheets').click();
      cy.contains('.oxd-topbar-body-nav-tab-link','My Timesheets').click();
      employeeTimesheets.editTimesheet(projectName,activity)
      cy.contains('Success').should('be.visible');
    });
  })

  it('Submite a claim',()=>{
    let referenceId;
    cy.contains('.oxd-main-menu-item','Claim').click();
    cy.contains('.oxd-topbar-body-nav-tab-item','Submit Claim').click();
    const claimData = {
        event: 'Accommodation',
        currency: 'Euro',
        remarks: 'Test claim for accommodation'
    };

    employeeClaimsPage.selectEvent(claimData.event);
    employeeClaimsPage.selectCurrency(claimData.currency);
    employeeClaimsPage.clickCreate();
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests?limit=50&offset=0&sortField=claimRequest.referenceId&sortOrder=DESC')
      .then((response) => {
        const claims = response.body.data;
          referenceId = claims[1].referenceId;
           cy.contains('.oxd-topbar-body-nav-tab-item','My Claims').click();
    cy.get('input[placeholder="Type for hints..."]').clear().type(referenceId);
    employeeClaimsPage.clickSearch();
    employeeClaimsPage.verifyClaimInResults(referenceId);
        
      });

  })

  it('Should add and edit job titles', ()=> {
    cy.contains('.oxd-main-menu-item','Admin').click();
    cy.contains('.oxd-topbar-body-nav-tab-item','Job').click();
    cy.contains('.oxd-topbar-body-nav-tab-link','Job Titles').click();
    jobTitlesPage.clickAdd();
    jobTitlesPage.enterJobTitle(jobTitle);
    jobTitlesPage.enterJobDescription('This is a test job description.');
    jobTitlesPage.fileUploadButton().click();
    cy.get('input[type="file"]').attachFile('test-file.txt'); 
    jobTitlesPage.clickSave();
    cy.wait(1000);
    jobTitlesPage.verifyJobTitleInTable(jobTitle);
    jobTitlesPage.editJobTitle(jobTitle, editedJobTitle);
    cy.contains('Success').should('be.visible');
    jobTitlesPage.verifyJobTitleInTable(editedJobTitle);
    jobTitlesPage.deleteJobTitle(editedJobTitle);
  })

  it('Terminate an employee and purge the employee records',()=>{
  let validUser,employeeName;
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC')
    .then((response) => {
        const users = response.body.data;
        validUser = users[7];
        employeeName = validUser.middleName && validUser.middleName.trim() !== ""
            ? `${validUser.firstName} ${validUser.middleName} ${validUser.lastName}`.trim()
            : `${validUser.firstName} ${validUser.lastName}`.trim();
        trackerData.purge.employeeName = employeeName;
        generalScenariosPage.terminateEmployee(validUser.firstName,validUser.middleName)
        purgeEmployeeRecordsPage.fillEmployeeName(trackerData.purge.employeeName);
        purgeEmployeeRecordsPage.clickSearch();
        cy.contains('button','Purge').click();
        cy.contains('button','Yes, Purge').click();
        cy.contains('Success').should('be.visible');
    });
  })

  it('Should add,edit and delete events within claim module',()=>{
    cy.contains('.oxd-main-menu-item','Claim').click();
    cy.contains('.oxd-topbar-body-nav-tab-item','Configuration').click();
    cy.contains('.oxd-topbar-body-nav-tab-link','Events').click();
    cy.contains('button','Add').click();
    eventsPage.fillEventName(newEventData.eventName);
    eventsPage.fillDescription(newEventData.description);
    eventsPage.clickSave();
    cy.contains('.oxd-table-row',newEventData.eventName).should('be.visible');
    cy.contains('.oxd-table-row',newEventData.eventName).within(()=>{
      cy.get('button').eq(1).click();
   })
   eventsPage.fillDescription(updatedDescription);
   eventsPage.toggleActiveStatus(); 
   eventsPage.clickSave();
   cy.contains('Success').should('be.visible');
   cy.contains('.oxd-table-row',newEventData.eventName).within(()=>{
    cy.get('button').eq(0).click();
 })
 cy.contains('Yes, Delete').click();
 cy.contains(newEventData.eventName).should('not.exist');
  })
});