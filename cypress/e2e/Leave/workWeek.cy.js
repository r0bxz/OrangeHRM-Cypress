import workWeekPage from '../../pages/Leave/workWeekPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Work Week Page Tests', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/defineWorkWeek');
    });

    it('should set up the work week as specified', () => {
        workWeekPage.selectWorkType('Monday', 'Half Day');
        workWeekPage.selectWorkType('Tuesday', 'Full Day');
        workWeekPage.selectWorkType('Wednesday', 'Full Day');
        workWeekPage.selectWorkType('Thursday', 'Full Day');
        workWeekPage.selectWorkType('Friday', 'Full Day');
        workWeekPage.selectWorkType('Saturday', 'Non-working Day');
        workWeekPage.selectWorkType('Sunday', 'Non-working Day');
        workWeekPage.clickSave();

        workWeekPage.verifyWorkType('Monday', 'Half Day');
        workWeekPage.verifyWorkType('Tuesday', 'Full Day');
        workWeekPage.verifyWorkType('Wednesday', 'Full Day');
        workWeekPage.verifyWorkType('Thursday', 'Full Day');
        workWeekPage.verifyWorkType('Friday', 'Full Day');
        workWeekPage.verifyWorkType('Saturday', 'Non-working Day');
        workWeekPage.verifyWorkType('Sunday', 'Non-working Day');
    });
});
