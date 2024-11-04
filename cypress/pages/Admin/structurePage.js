class OrganizationStructurePage {
  
    clickEditSwitch() {
      cy.get('.oxd-switch-input').click();
    }
  
    clickAddUnit() {
      cy.contains('button', 'Add').click();
    }
    enterUnitId(id){
    cy.get('input[class*="oxd-input"]').eq(1).clear().type(id);
        }
    enterUnitName(name) {
      cy.get('input[class*="oxd-input"]').eq(2).clear().type(name);
    }
  
    enterUnitDescription(description) {
      cy.get('textarea[class*="oxd-textarea"]').clear().type(description);
    }
  

    clickSaveUnit() {
      cy.contains('button', 'Save').click();
    }

    clickEditUnit(unitName) {
      cy.contains('.oxd-sheet',unitName).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  
    clickDeleteUnit(unitName) {
      cy.contains('.oxd-sheet', unitName).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }

    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  
    verifyUnitInStructure(unitName) {
      cy.contains(unitName).should('exist');
    }
  
    verifyUnitNotInStructure(unitName) {
      cy.contains(unitName).should('not.exist');
    }
  }
  
  export default new OrganizationStructurePage();
  