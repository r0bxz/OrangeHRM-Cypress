import dependentsPage from '../../pages/myInfo/dependentsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Assigned Emergency Contacts Page Tests', () => {
    let name = 'jon';
    let editedName = 'Leo';
    let dateOfBirth = '2008-02-09';
    let relationship = 'Child';

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        cy.contains('.oxd-main-menu-item','My Info').click();
        
    });

    it('should add an emergency contact', () => {
        cy.contains('.orangehrm-tabs-item','Dependents').click();
        dependentsPage.openAddEmergencyContactForm();
        dependentsPage.fillDependentsForm(name,relationship,dateOfBirth);
        dependentsPage.assertRecordExists(name);
    });

    it('should edit an emergency contact', () => {
        cy.contains('.orangehrm-tabs-item','Dependents').click();
        dependentsPage.editEmergencyContact(name,editedName,relationship,dateOfBirth);
        dependentsPage.assertRecordExists(editedName);
    });

    it('should delete an emergency contact', () => {
        cy.contains('.orangehrm-tabs-item','Dependents').click();
        dependentsPage.deleteEmergencyContact(editedName);
        dependentsPage.assertRecordDoesNotExist(editedName);
    });
});


