class jobTitlesPage {
    jobTitleField() { return cy.get('input.oxd-input--active').eq(1); }
    jobDescriptionField() { return cy.get('textarea.oxd-textarea--active[placeholder="Type description here"]'); }
    noteField() { return cy.get('textarea.oxd-textarea--active[placeholder="Add note"]'); }
    fileUploadButton() {return cy.get('div.oxd-file-div--active .oxd-file-button');}
    addButton() { return cy.contains('button', 'Add'); }
    saveButton() { return cy.contains('button', 'Save'); }
    cancelButton() { return cy.contains('button', 'Cancel'); }
    jobTitleRows() { return cy.get('.oxd-table-row'); }
    deleteButton() { return cy.get('.oxd-icon.bi-trash'); }
    editButton() { return cy.get('.oxd-icon.bi-pencil-fill'); }
    
    enterJobTitle(title) {
        this.jobTitleField().type(title);
    }
    
    enterJobDescription(description) {
        this.jobDescriptionField().type(description);
    }
    
    clickAdd() {
        this.addButton().click();
    }
  
    clickSave() {
        this.saveButton().click();
    }
  
    clickCancel() {
        this.cancelButton().click();
    }
  
    verifyJobTitleInTable(title) {
        this.jobTitleRows().should('contain', title);
    }
  
    deleteJobTitle(jobTitle) {
        cy.contains('.oxd-table-row', jobTitle).within(() => {
            this.deleteButton().click();
        });
        cy.contains('button', 'Yes, Delete').click();
        cy.contains('.oxd-table-row', jobTitle).should('not.exist');
    }
  
    editJobTitle(oldTitle, newTitle) {
        cy.contains('.oxd-table-row', oldTitle).within(() => {
            this.editButton().click();
        });
        this.jobTitleField().clear().type(newTitle);
        this.clickSave();
    }
  }
  
  export default new jobTitlesPage();
  