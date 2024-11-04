import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import customFieldsPage from '../../pages/PIM/customFieldsPage';

describe('Custom Fields Page Tests', () => {
    let validFields;
    let number = Math.floor(Math.random() * 1000);
    let newCustomField = `Custom Filed ${number}`;
    let editedCustomField=`Edited Custom Filed ${number}`;
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
            cy.url().should('include', '/dashboard/index');
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/listCustomFields');

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/custom-fields?limit=50&offset=0')
      .then((response) => {
        const fields = response.body.data;
        validFields = fields[0];});
    });
    it('should add a new custom field if possible', () => {
        cy.get('body').then((body) => {
            
            if (body.find('.orangehrm-custom-field-title').text().includes("All custom fields are in use")) {
                cy.log('No more custom fields can be added');
            } else {
                customFieldsPage.clickAdd();
                customFieldsPage.enterFieldName(newCustomField);
                customFieldsPage.selectScreen('Personal Details');
                customFieldsPage.selectType('Text or Number');
                customFieldsPage.clickSave();
                cy.contains('Success').should('be.visible');
                customFieldsPage.verifyCustomFieldInTable(newCustomField, 'Personal Details', 'Text or Number');
            }
        });
    });

    it('should edit an existing custom field', () => {
        customFieldsPage.clickEditField(validFields.fieldName);
        customFieldsPage.enterFieldName(editedCustomField);
        customFieldsPage.clickSave();
        cy.contains('Success').should('be.visible');
        customFieldsPage.verifyCustomFieldInTable(editedCustomField, 'Personal Details', 'Text or Number');
    });

    it('should delete an existing custom field', () => {
        customFieldsPage.deleteField(validFields.fieldName);
    });
});
