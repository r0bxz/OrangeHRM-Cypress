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
  
    clickAdd() {
      this.addButton.click();
    }

    clickEdit(trackerName){
        cy.contains('.oxd-table-row',trackerName).within(()=>{
            cy.get('button').eq(1).click();
        })    
    }

    clickDelete(trackerName){
      cy.contains('.oxd-table-row',trackerName).within(()=>{
        cy.get('button').eq(0).click();
      })
    }
  
    fillTrackerForm(trackerData) {
      this.trackerNameField.clear().type(trackerData.trackerName);
      this.employeeNameField.clear().type(trackerData.employeeName)
      cy.contains('.oxd-autocomplete-option',trackerData.employeeName).click();
      this.reviewersField.clear().type(trackerData.reviewers);
      cy.contains('.oxd-autocomplete-option',trackerData.reviewers).click();
    }
  
    clickSave() {
      this.saveButton.click();
    }

    search(employeeName){

      cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
      cy.contains('.oxd-autocomplete-option',employeeName).click();
      cy.contains('button','Search').click();
    }
  }
  
  export default new PerformanceTrackersPage();
  