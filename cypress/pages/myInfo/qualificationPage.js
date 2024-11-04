class QualificationsPage {
    addWorkExperience(details) {
        cy.get('.oxd-button').eq(0).click();
        cy.get('.oxd-input').eq(1).clear().type(details.company);
        cy.get('.oxd-input').eq(2).clear().type(details.jobTitle);
        cy.get('.oxd-input').eq(3).clear().type(details.fromDate);
        cy.get('.oxd-input').eq(4).clear().type(details.toDate);
        cy.get('.oxd-textarea').clear({force:true}).type(details.comment,{force:true});
        cy.contains('button', 'Save').click();
    }

    deleteWorkExperience(details){
        cy.contains('.oxd-table-row',details.company).within(()=>{
            cy.get('.oxd-icon.bi-trash').click();
        });
        cy.contains('button', 'Yes, Delete').click();
    }

    addEducation(details) {
        cy.get('.oxd-button').eq(1).click();
        cy.get('.oxd-select-text').eq(0).click();
        cy.contains('.oxd-select-option', details.level).click();
        cy.get('.oxd-input').eq(1).clear().type(details.institute);
        cy.get('.oxd-input').eq(2).clear().type(details.major);
        cy.get('.oxd-input').eq(3).clear().type(details.year);
        cy.get('.oxd-input').eq(4).clear().type(details.gpa);
        cy.get('.oxd-input').eq(5).clear().type(details.startDate);
        cy.get('.oxd-input').eq(6).clear().type(details.endDate);
        cy.contains('button', 'Save').click();
    }

    addSkill(details) {
        cy.get('.oxd-button').eq(2).click();
        cy.get('.oxd-select-text').eq(0).click();
        cy.contains('.oxd-select-option', details.skill).click();
        cy.get('.oxd-input').eq(0).clear().type(details.yearsOfExperience);
        cy.get('.oxd-textarea').clear().type(details.comments);
        cy.contains('button', 'Save').click();
    }

    editSkill(details) {
        cy.get('.oxd-icon.bi-pencil-fill').eq(2).click();
        this.addSkill(details);
    }

    deleteSkill(details) {
        cy.contains('.oxd-table-row',details.skill).within(()=>{
            cy.get('.oxd-icon.bi-trash').click();
            
        })
        cy.contains('button', 'Yes, Delete').click();
    }

    addLanguage(details) {
        cy.get('.oxd-button').eq(3).click();
        cy.get('.oxd-select-text').eq(0).click();
        cy.contains('.oxd-select-option', details.language).click();
        cy.get('.oxd-select-text').eq(1).click();
        cy.get('.oxd-select-option').eq(1).click();
        cy.get('.oxd-select-text').eq(2).click();
        cy.contains('.oxd-select-option', details.competency).click();
        cy.get('.oxd-textarea').clear().type(details.comments);
        cy.contains('button', 'Save').click();
    }

    

    deleteLanguage(details) {
        cy.contains('.oxd-table-row',details.language).within(()=>{
            cy.get('.oxd-icon.bi-trash').click();
    })
    cy.contains('button', 'Yes, Delete').click();
}

    addLicense(details) {
        cy.get('.oxd-button').eq(4).click();
        cy.get('.oxd-select-text').eq(0).click();
        cy.contains('.oxd-select-option', details.licenseType).click();
        cy.get('.oxd-input').eq(1).clear().type(details.licenseNumber);
        cy.get('.oxd-input').eq(2).clear().type(details.issuedDate);
        cy.get('.oxd-input').eq(3).clear().type(details.expiryDate);
        cy.contains('button', 'Save').click();
    }

    deleteLicense(details) {
        cy.contains('.oxd-table-row',details.licenseType).within(()=>{
            cy.get('.oxd-icon.bi-trash').click();
            
        });
        cy.contains('button', 'Yes, Delete').click();
    }
}

export default new QualificationsPage();
