class PayGradesPage {

  clickAdd() {
    cy.contains('Add').click();
  }

  enterPayGradeName(name) {
    cy.get('input.oxd-input--active').eq(1).type(name);
  }

  clickSaveGrade() {
    cy.get('button.oxd-button--secondary').eq(0).click();
  }
  clickSaveCurrency() {
    cy.get('button.oxd-button--secondary').eq(1).click();
  }

  clickEdit(payGradeName) {
    cy.contains('.oxd-table-row', payGradeName).within(() => {
      cy.get('.oxd-icon.bi-pencil-fill').click();
  });

  }


  clickAddCurrency() {
    cy.contains('button','Add').click();
  }

  selectCurrency(currency) {
    cy.get('.oxd-select-text.oxd-select-text--active').click();
    cy.get('.oxd-select-dropdown')
    .should('be.visible', { timeout: 10000 })
    .contains(currency)
    .scrollIntoView()
    .click();
    }

  enterMinSalary(minSalary) {
    cy.get('input.oxd-input.oxd-input--active').eq(2).type(minSalary);
  }

  enterMaxSalary(maxSalary) {
    cy.get('input.oxd-input.oxd-input--active').eq(2).type(maxSalary);
  }

  checkCurrency(currency){
    cy.contains('.oxd-table-row', currency).within(() => {
      cy.get('span.oxd-checkbox-input').click();
  });
  }

  verifyPayGradeInTable(payGradeName) {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades')
    cy.contains(payGradeName).should('exist');
  }

  verifyCurrencyInTable(currency) {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades')
    cy.contains(currency).should('exist');
  }

  deleteGrade(payGradeName) {
    cy.contains('.oxd-table-row', payGradeName).within(() => {
      cy.get('.oxd-icon.bi-trash').click();
    });
    cy.contains('button', 'Yes, Delete').click();

  }
}

export default new PayGradesPage();
