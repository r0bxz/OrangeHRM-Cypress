
class DashboardPage {
    get upgradeButton() { return cy.get('button.oxd-glass-button.orangehrm-upgrade-button'); }
    get profilePicture() { return cy.get('img.oxd-userdropdown-img[alt="profile picture"]');}
    get timeAtWork() { return cy.get('p.oxd-text--p').contains('Time at Work'); }
    get myActions() { return cy.get('p.oxd-text--p').contains('My Actions'); }
    get quickLaunch() { return cy.get('p.oxd-text--p').contains('Quick Launch'); }
    get employeesOnLeaveToday() {return cy.get('p.oxd-text--p').contains('Employees on Leave Today');}
    get employeeDistributionBySubUnit() { return cy.get('p.oxd-text--p').contains('Employee Distribution by Sub Unit'); }
    get employeeDistributionByLocation() { return cy.get('p.oxd-text--p').contains('Employee Distribution by Location');  }
    get timeButton(){return cy.get('button').find('i.bi-stopwatch');}
    get pendingSelfReviewSection() {return cy.get('div.orangehrm-todo-list-item').contains('Pending Self Review'); }
    get candidateToInterviewSection() {return cy.get('div.orangehrm-todo-list-item').contains('Candidate to Interview'); }
    get employeesOnLeaveConfigButton () {return cy.get('i.oxd-icon.bi-gear-fill.orangehrm-leave-card-icon')}
    get userDropDownMenu(){return cy.get('.oxd-userdropdown-tab') }
    
    clickUpgrade() { this.upgradeButton.click(); }
    checkTimeAtWork() { this.timeAtWork.should('be.visible'); }
    checkMyActions() { this.myActions.should('be.visible'); }
    checkQuickLaunch() { this.quickLaunch.should('be.visible'); }
    checkEmployeesOnLeaveToday() {this.employeesOnLeaveToday.should('be.visible')}
    checkEmployeeDistributionBySubUnit() { this.employeeDistributionBySubUnit.should('be.visible'); }
    checkEmployeeDistributionByLocation() { this.employeeDistributionByLocation.should('be.visible'); }
    clickTimeButton(){this.timeButton.click()}

    checkPendingSelfReview() {
      this.pendingSelfReviewSection.should('be.visible');
    }
  
    checkCandidateToInterview() {
      this.candidateToInterviewSection.should('be.visible');
    }
  
    clickPendingSelfReview() {
      this.pendingSelfReviewSection.click();
      cy.url().should('include', '/performance'); 
    }
  
    clickCandidateToInterview() {
      this.candidateToInterviewSection.click();
      cy.url().should('include', '/recruitment');
    }
    clickEmployeesOnLeaveButton(){
      this.employeesOnLeaveConfigButton.click();
      cy.get('span.oxd-switch-input').click(); // switch button
      cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary').click(); // save button 
      cy.get('#oxd-toaster_1').should('contain', 'Success')
    }
    clickAssignLeaveButton(){this.assignLeaveButton.click();}
  clickUserDropDownMenu(){this.userDropDownMenu.click();}

  }
  
  export default new DashboardPage();
  