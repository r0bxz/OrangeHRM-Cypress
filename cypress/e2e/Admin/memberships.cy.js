import membershipsPage from '../../pages/Admin/membershipsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Memberships Page Tests', () => {
  const newMembershipName = `Membership ${Math.floor(Math.random() * 1000)}`;
  const editedMembershipName = `Edited Membership ${Math.floor(Math.random() * 1000)}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/membership');
  });

  it('should add a new membership', () => {
    membershipsPage.clickAddMembership();
    membershipsPage.enterMembershipName(newMembershipName);
    membershipsPage.clickSaveMembership();
    membershipsPage.verifyMembershipInList(newMembershipName);
  });

  it('should edit an existing membership', () => {
    membershipsPage.clickEditMembership(newMembershipName);
    membershipsPage.enterMembershipName(editedMembershipName);
    membershipsPage.clickSaveMembership();
    membershipsPage.verifyMembershipInList(editedMembershipName);
  });

  it('should delete a membership', () => {
    membershipsPage.clickDeleteMembership(editedMembershipName);
    membershipsPage.confirmDelete();
    membershipsPage.verifyMembershipNotInList(editedMembershipName);
  });
});
