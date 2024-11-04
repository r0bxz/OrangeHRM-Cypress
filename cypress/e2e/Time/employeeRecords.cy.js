import employeeAttendanceRecordsPage from '../../pages/Time/employeeRecordsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Employee Attendance Records Page Tests', () => {
    const punchInDate = '2024-02-09';
    const punchInTime = '08:30 AM';
    const punchInNote = 'Just a test In';
    const punchOutTime = '04:30 PM';
    const punchOutNote = 'Just a test Out';
    let employeeName;
    let validUser ;
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewAttendanceRecord');
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').then((response) => {
          const users = response.body.data;
          validUser = users[0];
          employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== "" 
          ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
          : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();

    });
    });

    it('should search for an employee and view their attendance records', () => {
        employeeAttendanceRecordsPage.enterEmployeeName(employeeName);
        employeeAttendanceRecordsPage.enterDate('2024-02-09');
        employeeAttendanceRecordsPage.clickView();
        employeeAttendanceRecordsPage.verifyRecordsFound();
    });

    it('should add records for an employee', () => {
        employeeAttendanceRecordsPage.enterEmployeeName(employeeName);
        employeeAttendanceRecordsPage.enterDate('2024-02-09');
        employeeAttendanceRecordsPage.clickView();
        cy.contains('button','Add').click();
        employeeAttendanceRecordsPage.selectPunchInDate(punchInDate);
        employeeAttendanceRecordsPage.enterPunchInTime(punchInTime);
        employeeAttendanceRecordsPage.selectTimeZone();
        employeeAttendanceRecordsPage.enterPunchInNote(punchInNote);
        employeeAttendanceRecordsPage.clickPunchIn();
        cy.contains('Success').should('be.visible');
        cy.contains('button','Add').click();
        employeeAttendanceRecordsPage.enterPunchOutTime(punchOutTime);
        employeeAttendanceRecordsPage.selectTimeZone();
        employeeAttendanceRecordsPage.enterPunchOutNote(punchOutNote);
        employeeAttendanceRecordsPage.clickPunchOut();
        cy.contains('Success').should('be.visible');
        employeeAttendanceRecordsPage.verifyAndDelete(employeeName,punchInDate,punchInNote);


    });
});
