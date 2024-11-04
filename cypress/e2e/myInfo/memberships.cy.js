import assignedMembershipsPage from '../../pages/myInfo/membershipsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import membershipsData from '../../fixtures/membershipsData.json';

describe('Assigned Memberships Page Tests', () => {
    let memberships;

    before(() => {
        memberships = membershipsData;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    it('should add a membership', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Memberships').click();

        assignedMembershipsPage.addMembership(memberships.newMembership);
    });

    it('should delete a membership', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Memberships').click();

        assignedMembershipsPage.deleteMembership(memberships.newMembership);
    });
});
