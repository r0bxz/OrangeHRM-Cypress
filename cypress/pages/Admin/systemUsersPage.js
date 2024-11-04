class systemUsersPage {
  usernameField() { return  cy.contains('label', 'Username').parents('.oxd-input-group').find('input.oxd-input');}
  userRoleDropdown() { return cy.contains('label', 'User Role').parents('.oxd-input-group').find('.oxd-select-text');}
  employeeNameField() { return  cy.get('input[placeholder="Type for hints..."]') ; }
  statusDropdown() { return cy.get('label.oxd-label').contains('Status').parents('.oxd-input-group').find('.oxd-select-text') }
  searchButton() { return cy.contains('button', 'Search'); }
  resetButton() { return cy.contains('button', 'Reset') }
  addButton() { return cy.contains('button', 'Add') }
  recordsFound() { return cy.get('span[class*="records-found"]'); }
  userRows() { return cy.get('.oxd-table-row'); }
  deleteButton (){return cy.get('.oxd-icon.bi-trash')}
  editButton(){return cy.get('.oxd-icon.bi-pencil-fill')}
  hideButton(){return cy.get('button.oxd-icon-button').find('i.bi-caret-up-fill')}
  showButton(){return cy.get('button.oxd-icon-button').find('i.bi-caret-down-fill')}
  hideOverlay(){return cy.get('button.oxd-icon-button').find('i.bi-chevron-left')}
  showOverlay(){return cy.get ('button.oxd-icon-button').find('i.bi-chevron-right')}

  enterUsername(username) {
      this.usernameField().type(username);}

      selectUserRole(role) {
        this.selectDropdownOption(this.userRoleDropdown(), role);}

  enterEmployeeName(employeeName) {
      this.employeeNameField().clear().type(employeeName);
      cy.get('div.oxd-autocomplete-option')
      cy.wait(1000)
      cy.contains('div.oxd-autocomplete-option', employeeName)
    .click();
  }

  selectStatus(status) {
      this.statusDropdown().select(status);
  }

  clickSearch() {
      this.searchButton().click();
  }

  clickReset() {
      this.resetButton().click();
  }

  clickAdd() {
      this.addButton().click();
  }
  selectDropdownOption(dropdown, option) {
    dropdown.click(); 
    cy.contains('.oxd-select-dropdown .oxd-select-option', option).click();}

  verifyUserInTable(username) {
    this.userRows().should('contain', username);
  }
  verifyEmployeeNameInTable(employeeName) {
    this.userRows().contains(employeeName).should('exist');
}
deleteUser(validUser){
  cy.contains('.oxd-table-row', validUser.userName).within(() => {
    this.deleteButton().click();
})
if(validUser.userRole.name=="Admin")
cy.get('[id="oxd-toaster_1"]').should('be.visible'); // because we can't delete the admin, so a toaster will appear
else {
cy.contains('button','Yes, Delete').click();
cy.contains('.oxd-table-row', validUser.userName).should('not.exist');}
}

editUser(validUser){
  cy.contains('.oxd-table-row', validUser.userName).within(() => {
    this.editButton().click();
})
cy.get('input.oxd-input--active').eq(1).clear().type('newusernameisgenerated123');
cy.get('button[type="submit"]').click();
}
searchByUsernameAndRole(username, role) {
  this.enterUsername(username);
  this.selectUserRole(role);
  this.clickSearch();
}
hideOptionsButton(){
  this.hideButton().click();
  cy.contains('label', 'Username').should('not.be.visible')
  this.showButton().click();
  cy.contains('label', 'Username').should('be.visible')
}

hideAndShowOverlay(){
this.hideOverlay().click();
cy.get('.oxd-layout-container').should('have.class', '--collapse');
this.showOverlay().click();
cy.get('.oxd-layout-container').should('not.have.class', '--collapse');
}

}

export default new systemUsersPage;
