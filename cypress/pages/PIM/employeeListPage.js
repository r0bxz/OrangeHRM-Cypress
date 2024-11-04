class EmployeeInformationPage {
    employeeNameField() {
      return cy.get('input[placeholder="Type for hints..."]').eq(0);
    }
  
    employeeIdField() {
      return cy.get('.oxd-input').eq(1);
    }
  
    employmentStatusDropdown() {
      return cy.get('.oxd-select-text').eq(0);
    }
  
    includeDropdown() {
      return cy.get('.oxd-select-text').eq(1);
    }
  
    supervisorNameField() {
        return cy.get('input[placeholder="Type for hints..."]').eq(1);
    }
  
    jobTitleDropdown() {
      return cy.get('.oxd-select-text').eq(2);
    }
  
    subUnitDropdown() {
      return cy.get('.oxd-select-text').eq(3);
    }
    saveButton(){
        return cy.get('button:contains("Save")').eq(1);   
    }
  
    searchButton() {
      return cy.get('button:contains("Search")');
    }
  
    resetButton() {
      return cy.get('button:contains("Reset")');
    }
  
    employeeTable() {
      return cy.get('.oxd-table-row');
    }
  


    enterEmployeeName(name) {
      this.employeeNameField().clear().type(name);
    }
  
    enterEmployeeId(id) {
      this.employeeIdField().clear().type(id);
    }
  
    selectEmploymentStatus(status) {
      this.employmentStatusDropdown().click().contains(status).click();
    }
  
    selectIncludeOption(option) {
      this.includeDropdown().click().contains(option).click();
    }
  
    enterSupervisorName(name) {
      this.supervisorNameField().clear().type(name);
    }
  
  
    selectSubUnit(unit) {
      this.subUnitDropdown().click().contains(unit).click();
    }
  
    clickSearch() {
      this.searchButton().click();
    }
  
    clickReset() {
      this.resetButton().click();
    }

    clickSave(){
        this.saveButton().click();
    }
  
    verifyEmployeeInTable(lastName) {
      this.employeeTable().contains(lastName).should('be.visible');
    }
  
    verifyEmployeeIdInTable(id) {
      this.employeeTable().contains(id).should('be.visible');
    }
  
  
    verifySupervisorNameInTable(name) {
      this.employeeTable().contains(name).should('be.visible');
    }

    editEmployee(employee) {
        cy.contains('.oxd-table-row', employee).within(() => {
            cy.get('i[class*="bi-pencil"]').click();
          });
        
        cy.get('.oxd-input').eq(1).type('edited')
        cy.get('.orangehrm-tabs-item').contains('Report-to').click();
        cy.get('.oxd-button').eq(0).click();
        cy.get('.oxd-autocomplete-text-input').type('a'); 
        cy.wait(1000)
        cy.get('.oxd-autocomplete-dropdown').first().click() 
        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-option','Direct').click();
        cy.contains('button','Save').click();

    }
  
    deleteEmployee(employee) {
      this.employeeTable()
      cy.contains('.oxd-table-row', employee).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
      cy.get('button:contains("Yes")').click();
    }
  }
  
  export default new EmployeeInformationPage();
  