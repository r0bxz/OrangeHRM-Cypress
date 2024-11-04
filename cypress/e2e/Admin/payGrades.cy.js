import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import payGradesPage from '../../pages/Admin/payGradesPage';


describe('Pay Grades Page Tests', () => {
  let randomGradeName;
  let validGrade;
  const randomNum = Math.floor(Math.random() * 10000);
  randomGradeName = `Grade ${randomNum}`;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/pay-grades?limit=50&offset=0')
        .then((response) => {
          const grades = response.body.data;
          validGrade = grades[0];
        });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades');
  });

  it('should add a new pay grade and verify in the list', () => {
    payGradesPage.clickAdd();
    payGradesPage.enterPayGradeName(randomGradeName);
    payGradesPage.clickSaveGrade();
    payGradesPage.clickAddCurrency();
    payGradesPage.selectCurrency('USD - United States Dollar');
    payGradesPage.enterMinSalary('3000');
    payGradesPage.enterMaxSalary('5000');
    payGradesPage.clickSaveCurrency();
    payGradesPage.checkCurrency('United States Dollar');
    payGradesPage.clickSaveGrade();
    payGradesPage.verifyPayGradeInTable(randomGradeName);

  });

  it('should edit an existing pay grade and add currency', () => {
    payGradesPage.clickEdit(validGrade.name);
    payGradesPage.clickAddCurrency();
    payGradesPage.selectCurrency('EUR - Euro');
    payGradesPage.enterMinSalary('1000');
    payGradesPage.enterMaxSalary('5000');
    payGradesPage.clickSaveCurrency();
    payGradesPage.verifyCurrencyInTable('Euro');
  });

  it('should delete a pay grade and verify it is removed', () => {
    payGradesPage.deleteGrade(validGrade.name);
    cy.contains(validGrade.name).should('not.exist');
  });
  });
