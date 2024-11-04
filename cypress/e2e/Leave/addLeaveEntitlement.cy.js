import AddLeaveEntitlementPage from '../../pages/Leave/addLeaveEntitlementPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Add Leave Entitlement Page Tests', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/addLeaveEntitlement');
    });

    it('should add leave entitlement for an individual employee', () => {
        AddLeaveEntitlementPage.selectEmployeeType(0);
        AddLeaveEntitlementPage.enterEmployeeName('Srinivas Erram');
        AddLeaveEntitlementPage.selectLeaveType('CAN - FMLA');
        AddLeaveEntitlementPage.selectLeavePeriod();
        AddLeaveEntitlementPage.enterEntitlement('12.00');
        AddLeaveEntitlementPage.clickSave();

    });

    it('should add leave entitlement for multiple employees', () => {
        AddLeaveEntitlementPage.selectEmployeeType(1);
        AddLeaveEntitlementPage.selectLocation('New York Sales Office');
        AddLeaveEntitlementPage.selectSubUnit('Engineering');
        AddLeaveEntitlementPage.selectMulLeaveType('CAN - FMLA');
        AddLeaveEntitlementPage.selectMulLeavePeriod();
        AddLeaveEntitlementPage.enterEntitlement('24.00');
        AddLeaveEntitlementPage.clickSave();
    });

    it('should cancel the add leave entitlement form', () => {
        AddLeaveEntitlementPage.selectEmployeeType(0);
        AddLeaveEntitlementPage.enterEmployeeName('Srinivas Erram');
        AddLeaveEntitlementPage.selectLeaveType('CAN - FMLA');
        AddLeaveEntitlementPage.selectLeavePeriod('2024-01-01', '2024-12-31');
        AddLeaveEntitlementPage.enterEntitlement('12.00');
        AddLeaveEntitlementPage.clickCancel();

    });
});
