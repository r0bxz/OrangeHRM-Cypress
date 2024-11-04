import assignedEmergencyContactsPage from '../../pages/myInfo/emergencyContactsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import emergencyContactData from '../../fixtures/emergencyContactData.json';

describe('Assigned Emergency Contacts Page Tests', () => {
    let contactDetails;

    before(() => {
        contactDetails = emergencyContactData.emergencyContact;
    });

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
        cy.contains('.orangehrm-tabs-item','Emergency Contacts').click();
        assignedEmergencyContactsPage.openAddEmergencyContactForm();
        assignedEmergencyContactsPage.fillEmergencyContactForm(contactDetails);
        assignedEmergencyContactsPage.assertRecordExists(contactDetails.name);
    });

    it('should edit an emergency contact', () => {
        cy.contains('.orangehrm-tabs-item','Emergency Contacts').click();
        assignedEmergencyContactsPage.editEmergencyContact(contactDetails);
        assignedEmergencyContactsPage.assertRecordExists(contactDetails.name);
    });

    it('should delete an emergency contact', () => {
        cy.contains('.orangehrm-tabs-item','Emergency Contacts').click();
        assignedEmergencyContactsPage.deleteEmergencyContact(contactDetails.name);
        assignedEmergencyContactsPage.assertRecordDoesNotExist(contactDetails.name);
    });
});


