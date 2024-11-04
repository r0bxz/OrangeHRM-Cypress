class PerformanceTrackersPage {
    get employeeNameField() {
      return cy.get('input[placeholder="Type for hints..."]').eq(0);
    }
  
    get trackerNameField() {
      return cy.get('.oxd-input').eq(1);
    }
  
    get reviewersField() {
      return cy.get('input[placeholder="Type for hints..."]').eq(1);
    }
  
    get saveButton() {
      return cy.contains('button', 'Save');
    }
  
    get addButton() {
      return cy.contains('button', 'Add');
    }
  
    get addLogButton() {
      return cy.contains('button', 'Add Log');
    }
  
    get logTextarea() {
      return cy.get('textarea[placeholder="Type here"]');
    }
  
    get logSaveButton() {
      return cy.contains('button', 'Save');
    }
  
    get logTitle() {
      return cy.get('.oxd-sheet')
      }
    
  
    clickAdd() {
      this.addButton.click();
    }
  
    clickView(trackerName) {
      cy.contains('.oxd-table-row', trackerName).within(() => {
        cy.contains('button', 'View').click();
      });
    }
  
    clickAddLog() {
      this.addLogButton.click();
    }
  
    fillLogForm(logData) {
        cy.get('input[placeholder="Type here"]').clear().type(logData.logTitle);
      this.logTextarea.clear().type(logData.comment);
      if (logData.isPositive) {
        cy.get('.oxd-button').eq(0).click({force:true});
      } else {
        cy.get('.oxd-button').eq(1).click({force:true});
      }
    }
  
    clickSaveLog() {
      this.logSaveButton.click({force:true});
    }
  
    verifyLogAdded(logTitle) {
      cy.contains('.oxd-sheet',logTitle).should('be.visible');
    }
  
    clickEditLog(logTitle) {
        cy.get('.oxd-sheet',logTitle).eq(0).within(()=>{
            cy.get('button').click();
        })
      cy.contains('Edit').click();
    }
  
    clickDeleteLog(logTitle) {
        cy.get('.oxd-sheet',logTitle).eq(0).within(()=>{
            cy.get('button').click();
        })
      cy.contains('Delete').click();
      cy.contains('button', 'Yes, Delete').click();
    }
  }
  
  export default new PerformanceTrackersPage();
  