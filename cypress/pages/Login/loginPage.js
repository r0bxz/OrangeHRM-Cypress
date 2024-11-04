class LoginPage {
    get usernameInput() { return cy.get('input[name="username"]'); }
    get passwordInput() { return cy.get('input[name="password"]'); }
    get signInButton() { return cy.get('button[data-v-10d463b7]'); }
    get forgotPasswordLink() { return cy.get('p[data-v-7b563373][data-v-0af708be].orangehrm-login-forgot-header'); }
    get loginBanner() { return cy.get('img[data-v-17f5fb62][alt="company-branding"]')}
    get resetPasswordInput (){return cy.get('input[name="username"]')}
    get resetPasswordButton (){return cy.get('button[type="submit"]')}
    get resetPasswordCancel(){return cy.get('button[type="button"]').contains('Cancel')}
    
    enterUsername(username) {
      this.usernameInput.type(username);
    }
  
    enterPassword(password) {
      this.passwordInput.type(password);
    }
  
    clickSignIn() {
      this.signInButton.click();
    }
  
    clickForgotPassword() {
      this.forgotPasswordLink.click();
    }
  
    checkLoginBannerVisible() {
      this.loginBanner.should('be.visible');
    }
    restPassword (username)
    {this.resetPasswordInput.type(username);
      this.resetPasswordButton.click();
    }
    cancelResetPassword(){
      this.resetPasswordCancel.click();
    }
  }
  
  export default new LoginPage();
  