import attendanceTotalSummaryReportPage from '../../pages/Time/attendanceSummaryPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Attendance Total Summary Report Page Tests', () => {
    let employeeName;
    let jobTitle = 'Software Engineer'; 
    let subUnit = 'Engineering'; 
    let employmentStatus = 'Full-Time'; 
    
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/displayAttendanceSummaryReportCriteria');
        
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
        .then((response) => {
            const users = response.body.data;
            const validUser = users[0];
            
            employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== ""
                ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
                : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();
        });
    });

    it('should generate an attendance total summary report with specific filters', () => {
        const fromDate = '2024-01-01';
        const toDate = '2024-12-31';

        attendanceTotalSummaryReportPage.enterEmployeeName(employeeName);
        attendanceTotalSummaryReportPage.selectJobTitle(jobTitle);
        attendanceTotalSummaryReportPage.selectSubUnit(subUnit);
        attendanceTotalSummaryReportPage.selectEmploymentStatus(employmentStatus);
        attendanceTotalSummaryReportPage.setDateRange(fromDate, toDate);
        attendanceTotalSummaryReportPage.clickView();
        cy.contains('Records Found').should('be.visible');
    });
});
