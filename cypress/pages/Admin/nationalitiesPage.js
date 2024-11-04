class NationalitiesPage {
  clickAddNationality() {
    cy.contains('button', 'Add').click();
  }

  enterNationalityName(name) {
    cy.get('input[class*="oxd-input"]').eq(1).clear().type(name);
  }

  clickSaveNationality() {
    cy.contains('button', 'Save').click();
  }

  
  hasNextPage() {
    return cy.get('button.oxd-pagination-page-item--previous-next')
      .then(($button) => {
        const hasNext = $button.find('i.bi-chevron-right').length > 0;
        return hasNext; 
      });
  }
  

  clickEditNationality(nationalityName) {
    cy.contains('.oxd-table-row', nationalityName).within(() => {
      cy.get('.oxd-icon-button').eq(1).click({force:true});
    });
  }

  clickDeleteNationality(nationalityName) {
    cy.contains('.oxd-table-row', nationalityName).within(() => {
      cy.get('.oxd-icon-button').eq(0) .click({ force: true }); 
    });
  }
  

  confirmDelete() {
    cy.contains('button', 'Yes, Delete').click();
  }

  verifyNationalityInList(nationalityName) {
    cy.contains('.oxd-table-row', nationalityName).should('exist');
  }

  verifyNationalityNotInList(nationalityName) {
    cy.contains('.oxd-table-row', nationalityName).should('not.exist');
  }

  checkForNationality(nationalityName) {
    cy.contains('.oxd-table-row', nationalityName).should('exist');
  }

  goToNextPage() {
    cy.get('button.oxd-pagination-page-item--previous-next')
  .find('i.bi-chevron-right')
  .click();
  }

  searchNationalityAcrossPages(nationalityName) {
    cy.get('body').then((body) => {
      if (body.find(`.oxd-table-row:contains(${nationalityName})`).length > 0) {
        cy.log(`Found nationality: ${nationalityName}`);
      } else {
        this.hasNextPage().then((hasNext) => {
          if (hasNext) {
            this.goToNextPage();
            this.searchNationalityAcrossPages(nationalityName);
          } else {
            cy.log(`Nationality ${nationalityName} deleted`);
          }
        });
      }
    });
  }
}

export default new NationalitiesPage();
