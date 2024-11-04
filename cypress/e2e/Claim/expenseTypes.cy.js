import expenseTypesPage from '../../pages/Claim/expenseTypesPage'; 
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Expense Types Management Tests', () => {
    const expenseTypeName = 'Travel Expenses';
    const updatedDescription = 'Updated travel expenses description';
    const newExpenseTypeData = {
        expenseTypeName: expenseTypeName,
        description: 'Travel-related expenses',
        isActive: true
    };
    let expenseTypeId;

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewExpense');
    });

    it('should add a new expense type', () => {
        cy.contains('button', 'Add').click();
        expenseTypesPage.fillExpenseTypeName(newExpenseTypeData.expenseTypeName);
        expenseTypesPage.fillDescription(newExpenseTypeData.description);
        //expenseTypesPage.toggleActiveStatus(newExpenseTypeData.isActive);
        expenseTypesPage.clickSave();

        cy.contains('Success').should('be.visible');
    });

    it('should search for an expense type', () => {
        expenseTypesPage.fillExpenseTypeNameForSearch(newExpenseTypeData.expenseTypeName);
        expenseTypesPage.clickSearch();

        cy.contains(newExpenseTypeData.expenseTypeName).should('be.visible');
    });

    it('should edit the expense type', () => {
        cy.contains('.oxd-table-row', newExpenseTypeData.expenseTypeName).within(() => {
            cy.get('button').eq(1).click();
        });

        expenseTypesPage.fillDescription(updatedDescription);
        expenseTypesPage.toggleActiveStatus();
        expenseTypesPage.clickSave();

        cy.contains('Success').should('be.visible');
    });

    it('should verify the expense type is updated', () => {
        cy.contains('.oxd-table-row', newExpenseTypeData.expenseTypeName).should('be.visible');
    });

    it('should delete the expense type', () => {
        cy.contains('.oxd-table-row', newExpenseTypeData.expenseTypeName).within(() => {
            cy.get('button').eq(0).click();
        });

        cy.contains('Yes, Delete').click();

        cy.contains('Success').should('be.visible');
    });

    it('should verify the expense type is deleted', () => {
        cy.contains(newExpenseTypeData.expenseTypeName).should('not.exist');
    });
});
