import attendanceRecordsPage from '../../pages/Time/punchPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Attendance Records Page Tests', () => {
    const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const day = String(today.getDate()).padStart(2, '0'); 
const punchInDate = `${year}-${day}-${month}`;
    const punchInTime = '08:30 AM';
    const punchInNote = 'Just a test In';

    const punchOutTime = '04:30 PM';
    const punchOutNote = 'Just a test Out';
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchIn');
    });

    it.skip('should punch in and punch out successfully', () => {
        

        attendanceRecordsPage.selectPunchInDate(punchInDate);
        attendanceRecordsPage.enterPunchInTime(punchInTime);
        attendanceRecordsPage.enterPunchInNote(punchInNote);
        attendanceRecordsPage.clickPunchIn();

        cy.contains('Success').should('be.visible');

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/punchOut')
        cy.get('h6').eq(1).click();
        attendanceRecordsPage.enterPunchOutTime(punchOutTime);
        attendanceRecordsPage.enterPunchOutNote(punchOutNote);
        attendanceRecordsPage.clickPunchOut();
        cy.contains('Success').should('be.visible');



    });

    it.skip('verify the Punch In/Out and delete the record', ()=>{

      attendanceRecordsPage.verifyAndDelete(punchInNote);


    
    })

});
