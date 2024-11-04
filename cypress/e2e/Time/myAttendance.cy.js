import attendanceRecordsPage from '../../pages/Time/myAttendancePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Attendance Records Page Tests', () => {

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord');
    });

    it('should show  records found', () => {
        attendanceRecordsPage.selectDate('2024-12-09');
        attendanceRecordsPage.clickView();
        attendanceRecordsPage.verifyNoRecordsFound();
    });

});
