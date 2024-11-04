import terminationReasonsPage from '../../pages/PIM/terminationReasonsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Termination Reasons Page Tests', () => {
  const newReason = `A new Termination Reason ${Math.floor(Math.random() * 1000)}`;
  const editedReason = `Edited Termination Reason ${Math.floor(Math.random() * 1000)}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewTerminationReasons');
  });

  it('should add a new Termination Reason', () => {
    terminationReasonsPage.clickAdd();
    terminationReasonsPage.enterReasonName(newReason);
    terminationReasonsPage.clickSave();
    terminationReasonsPage.verifyReasonInList(newReason);
  });

  it('should edit an existing Termination Reason', () => {
    terminationReasonsPage.clickEdit(newReason);
    terminationReasonsPage.enterReasonName(editedReason);
    terminationReasonsPage.clickSave();
    terminationReasonsPage.verifyReasonInList(editedReason);
  });

  it('should delete a Termination Reason', () => {
    terminationReasonsPage.clickDelete(editedReason);
    terminationReasonsPage.confirmDelete();
    terminationReasonsPage.verifyReasonNotInList(editedReason);
  });
});
