class membershipsPage {
  
    clickAddMembership() {
      cy.contains('button', 'Add').click();
    }
  
    enterMembershipName(name) {
      cy.get('input[class*="oxd-input"]').eq(1).clear().type(name);
    }
  
    clickSaveMembership() {
      cy.contains('button', 'Save').click();
    }
  
    clickEditMembership(membershipName) {
      cy.contains('.oxd-table-row', membershipName).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  
    clickDeleteMembership(membershipName) {
      cy.contains('.oxd-table-row', membershipName).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }
  
    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  
    verifyMembershipInList(membershipName) {
      cy.contains('.oxd-table-row', membershipName).should('exist');
    }
  
    verifyMembershipNotInList(membershipName) {
      cy.contains('.oxd-table-row', membershipName).should('not.exist');
    }
  }
  
  export default new membershipsPage();
  