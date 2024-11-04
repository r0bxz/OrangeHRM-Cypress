import corporateBrandingPage from '../../pages/Admin/corporateBrandingPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Corporate Branding Page Tests', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/addTheme');
  });

  it('should change primary and secondary colors', () => {
    corporateBrandingPage.selectColor(0, '#FF5733'); 
    corporateBrandingPage.selectColor(1, '#33FF57'); 
    corporateBrandingPage.clickPreview();
    corporateBrandingPage.clickPublish();
  });

  it('should upload client logo and banners', () => {
    corporateBrandingPage.uploadFile(0, 'logo.png'); 
    corporateBrandingPage.uploadFile(1, 'banner.png'); 
    corporateBrandingPage.uploadFile(2, 'loginBanner.png'); 
    corporateBrandingPage.clickPreview();
    corporateBrandingPage.clickPublish();
  });

  it('should reset branding to default settings', () => {
    corporateBrandingPage.clickResetToDefault();
    corporateBrandingPage.clickPreview();
    corporateBrandingPage.clickPublish();
  });
});
