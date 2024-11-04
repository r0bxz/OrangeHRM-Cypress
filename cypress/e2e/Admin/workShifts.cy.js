import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import workShiftsPage from '../../pages/Admin/workShiftsPage';

describe('Work Shifts Page Tests', () => {
  let randomShiftName;
  let anotherShiftName;
  const randomNum = Math.floor(Math.random() * 10000);
  randomShiftName = `Shift ${randomNum}`;
  anotherShiftName=`Shift ${randomNum+1}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift');
  });

  it('should add a new work shift and verify in the list', () => {
    workShiftsPage.clickAdd();
    workShiftsPage.enterShiftName(randomShiftName);
    workShiftsPage.enterFromTime('09:00 AM');
    workShiftsPage.enterToTime('05:00 PM');
    workShiftsPage.enterDurationPerDay('8.00');
    workShiftsPage.clickSave();
    workShiftsPage.verifyWorkShiftInTable(randomShiftName);
  });

  it('should edit an existing work shift and verify changes', () => {

    workShiftsPage.clickEdit(randomShiftName);
    workShiftsPage.enterShiftName(anotherShiftName);
    workShiftsPage.clickSave();
    workShiftsPage.verifyWorkShiftInTable(anotherShiftName);
    workShiftsPage.verifyWorkShiftNotInTable(randomShiftName);
  });

  it('should delete a work shift and verify removal', () => {
    workShiftsPage.clickDelete(anotherShiftName);
    workShiftsPage.verifyWorkShiftNotInTable(anotherShiftName);
  });
});
