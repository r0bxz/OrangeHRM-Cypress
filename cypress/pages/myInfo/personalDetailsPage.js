class PersonalDetailsPage {
    fillPersonalDetails(details) {
        cy.get('.oxd-input').eq(1).clear().type(details.firstName)
        cy.get('.oxd-input').eq(2).clear().type(details.firstName)
        cy.get('.oxd-input').eq(3).clear().type(details.firstName)
        
        cy.get('.oxd-input').eq(4).clear().type(details.employeeId);
        
        cy.get('.oxd-input').eq(5).clear().type(details.otherId);
        
        cy.get('.oxd-input').eq(6).clear().type(details.driversLicenseNumber);
        
        cy.get('.oxd-input').eq(7).clear().type(details.licenseExpiryDate);
        
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains('.oxd-select-option',details.nationality);

        cy.get('.oxd-select-text').eq(1).click()
        cy.contains('.oxd-select-option',details.maritalStatus);
        
        
        cy.get('.oxd-input').eq(8).clear().type(details.dateOfBirth);

        if(details.gender=='Male')
        cy.get('.oxd-radio-input').eq(0).click();
        else 
        cy.get('.oxd-radio-input').eq(0).click();

        cy.get('.oxd-select-text').eq(2).click()
        cy.contains('.oxd-select-option',details.bloodType)

        cy.get('.oxd-input').eq(9).clear().type(details.testField);
        
        cy.contains('button', 'Save').click();
    }
}

export default new PersonalDetailsPage();
