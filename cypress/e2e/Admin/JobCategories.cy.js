import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import jobCategoriesPage from '../../pages/Admin/jobCategoriesPage';

describe('Job Categories Page Tests', () => {
  let randomCategoryName;
  let anotherRandomCategoryName;
  const randomNum = Math.floor(Math.random() * 10000);
  randomCategoryName = `Category ${randomNum}`;
  anotherRandomCategoryName=`Category ${randomNum+1}`;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory');
  });

  it('should add a new job category and verify in the list', () => {
    jobCategoriesPage.clickAdd();
    jobCategoriesPage.enterJobCategoryName(randomCategoryName);
    jobCategoriesPage.clickSave();
    jobCategoriesPage.verifyJobCategoryInTable(randomCategoryName);
  });

  it('should edit an existing job category and verify changes', () => {


    jobCategoriesPage.clickEdit(randomCategoryName);
    jobCategoriesPage.enterJobCategoryName(anotherRandomCategoryName);
    jobCategoriesPage.clickSave();
    jobCategoriesPage.verifyJobCategoryInTable(anotherRandomCategoryName);
    jobCategoriesPage.verifyJobCategoryNotInTable(randomCategoryName);
  });

  it('should delete a job category and verify removal', () => {
    jobCategoriesPage.clickDelete(anotherRandomCategoryName);
    jobCategoriesPage.verifyJobCategoryNotInTable(anotherRandomCategoryName);
  });
});
