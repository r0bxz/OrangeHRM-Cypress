import leaveTypesPage from '../../pages/Leave/leaveTypesPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Leave Types Page Tests', () => {
    let newType;
    let editedNewType;
    newType= `CAN - New Leave ${Math.floor(Math.random() * 9000) + 1000}`
    editedNewType = `Edited CAN - New Leave ${Math.floor(Math.random() * 9000) + 1000}`
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/leaveTypeList');
    });

    it('should add a new leave type', () => {
        leaveTypesPage.addNewLeaveType(newType);
        leaveTypesPage.verifyLeaveTypeExists(newType);
    });

    it('should edit an existing leave type', () => {
        leaveTypesPage.editLeaveType(newType, editedNewType);
        leaveTypesPage.verifyLeaveTypeExists(editedNewType);
    });

    it('should delete an existing leave type', () => {
        leaveTypesPage.deleteLeaveType(editedNewType);
        leaveTypesPage.verifyLeaveTypeNotExists(editedNewType);
    });

    it('should add a new leave type', () => {
        leaveTypesPage.addNewLeaveType(newType);
        leaveTypesPage.verifyLeaveTypeExists(newType);
    });

    it('should delete multiple selected leave types', () => {
        leaveTypesPage.selectLeaveTypeCheckbox(newType);
        leaveTypesPage.deleteSelectedLeaveTypes();
        leaveTypesPage.verifyLeaveTypeNotExists(newType);
    });
});
