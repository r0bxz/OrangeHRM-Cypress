import kpiPage from '../../pages/Performance/kpiPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import kpiData from '../../fixtures/kpiData.json';

describe('KPI Management Tests', () => {


    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchKpi');
    });

    it('should add a new KPI', () => {
        kpiPage.clickAdd();
        kpiPage.fillKpiForm(kpiData.newKpi);
        kpiPage.clickSave();
        cy.contains('Success').should('be.visible');
    });

    it('should edit an existing KPI', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchKpi')
        kpiPage.clickEdit(kpiData.newKpi);
        kpiPage.fillKpiForm(kpiData.updatedKpi);
        kpiPage.clickSave();
        cy.contains('Success').should('be.visible');
    });

    it('should delete an existing KPI', () => {
        kpiPage.clickDelete(kpiData.updatedKpi);
        cy.contains('button','Yes, Delete').click();
        cy.contains('Success').should('be.visible');
    
    });

    it('should search for KPIs by job title', () => {
        kpiPage.clickSearch(kpiData.updatedKpi.jobTitle);
         cy.contains('.oxd-table-row',kpiData.updatedKpi.jobTitle).should('be.visible');

    });

});
