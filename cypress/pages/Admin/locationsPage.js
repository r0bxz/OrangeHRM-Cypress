class LocationsPage {
    clickAddLocation() {
      cy.contains('button', 'Add').click();
    }
  
    enterLocationName(name) {
      cy.get('input[placeholder="Type here ..."]').eq(0).clear().type(name);
    }
  
    enterCity(city) {
      cy.get('input[placeholder="Type here ..."]').eq(1).clear().type(city);
    }
  
    enterState(state) {
      cy.get('input[placeholder="Type here ..."]').eq(2).clear().type(state);
    }
  
    enterZipCode(zip) {
      cy.get('input[placeholder="Type here ..."]').eq(3).clear().type(zip);
    }
  
    
    selectCountry(country) {
      cy.get('.oxd-select-text-input').click()
        cy.get('.oxd-select-dropdown').contains(country)
          .click();
    
    }
    
  
    enterPhone(phone) {
      cy.get('input[placeholder="Type here ..."]').eq(4).clear().type(phone);
    }
  
    enterFax(fax) {
      cy.get('input[placeholder="Type here ..."]').eq(5).clear().type(fax);
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    verifySuccessMessage() {
      cy.contains('Success').should('be.visible');
    }
  

    searchByName(name) {
      cy.get('input.oxd-input--active').eq(1).clear().type(name);
    }
  
    searchByCity(city) {
      cy.get('input.oxd-input--active').eq(2).clear().type(city);
    }
  
  
    searchByCountry(country) {
      cy.get('.oxd-select-text-input').click();
      cy.get('.oxd-select-dropdown').contains(country)
          .click();

    }
  
  
    clickSearch() {
      cy.contains('button', 'Search').click();
    }
  
    verifySearchResults(searchinfo) {
      cy.contains(searchinfo).should('be.visible');
    }

  }
  
  export default new LocationsPage();
  