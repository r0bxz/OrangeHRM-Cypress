import holidaysPage from '../../pages/Leave/holidaysPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Holidays Page Tests', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewHolidayList');
    });

    it('should search for holidays within a date range', () => {
        holidaysPage.setDateRange('2024-01-01', '2025-02-01');
        holidaysPage.clickSearch();
        cy.contains('Records Found').should('be.visible');
    });

    it('should add a new holiday', () => {
        cy.contains('button','Add').click();
        holidaysPage.clickAddHoliday('Test Holiday', '2024-03-30', 'Full Day', 'Yes');
        holidaysPage.verifyHolidayExists('Test Holiday', '2024-30-03', 'Full Day', 'Yes');
    });

    it('should edit an existing holiday', () => {
        holidaysPage.editHoliday("Test Holiday","Edited Test Holiday");
        holidaysPage.verifyHolidayExists("Edited Test Holiday", '2024-30-03', 'Full Day', 'Yes');
    });

    it('should delete a holiday', () => {
        holidaysPage.deleteHoliday("Edited Test Holiday");
        cy.contains('.oxd-table-row', 'Edited Test Holiday').should('not.exist');
    });
});
