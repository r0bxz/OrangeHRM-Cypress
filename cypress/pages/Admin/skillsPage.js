class SkillsPage {
  

    clickAddSkill() {
      cy.contains('button', 'Add').click();
    }
  

    enterSkillName(name) {
      cy.get('input[class*="oxd-input"]').eq(1).clear().type(name);
    }
  

    enterSkillDescription(description) {
      cy.get('textarea[class*="oxd-textarea"]').clear().type(description);
    }
  
    clickSaveSkill() {
      cy.contains('button', 'Save').click();
    }
  
    
    clickEditSkill(skillName) {
      cy.contains('.oxd-table-row', skillName).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  

    clickDeleteSkill(skillName) {
      cy.contains('.oxd-table-row', skillName).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }
  
    
    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  
   
    verifySkillInList(skillName) {
      cy.contains('.oxd-table-row', skillName).should('exist');
    }
  
    verifySkillNotInList(skillName) {
      cy.contains('.oxd-table-row', skillName).should('not.exist');
    }
  }
  
  export default new SkillsPage();
  