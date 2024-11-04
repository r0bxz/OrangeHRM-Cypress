class KpiPage {
    elements = {
        jobTitleDropdown: () => cy.get('.oxd-select-text-input'),
        searchButton: () => cy.contains('button', 'Search'),
        resetButton: () => cy.contains('button', 'Reset'),
        addButton: () => cy.contains('button', 'Add'),
        kpiTableRows: () => cy.get('table tbody tr'),
        kpiField: () => cy.get('.oxd-input').eq(1),
        minRatingField: () => cy.get('.oxd-input').eq(2),
        maxRatingField: () => cy.get('.oxd-input').eq(3),
        defaultCheckbox: () => cy.get('.oxd-switch-input'),
        saveButton: () => cy.contains('button', 'Save'),
        cancelButton: () => cy.contains('button', 'Cancel')
    };

    selectJobTitle(jobTitle) {
        this.elements.jobTitleDropdown().click();
        cy.contains('.oxd-select-option',jobTitle).click();


    }

    clickSearch(jobTitle) {
        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-option',jobTitle).click();
        
    }

    clickReset() {
        this.elements.resetButton().click();
    }

    clickAdd() {
        this.elements.addButton().click();
    }

    fillKpiForm(kpiData) {
        this.elements.kpiField().clear().type(kpiData.kpiName);
        this.selectJobTitle(kpiData.jobTitle);
        this.elements.minRatingField().clear().type(kpiData.minRating);
        this.elements.maxRatingField().clear().type(kpiData.maxRating);
        if (kpiData.isDefault) 
            this.elements.defaultCheckbox().click();

    }

    clickSave() {
        this.elements.saveButton().click();
    }

    clickEdit(kpi) {
        cy.contains('.oxd-table-row',kpi.kpiName).within(()=>{
            cy.get('.oxd-icon-button').eq(0).click();
        })
    }

    clickDelete(kpi) {
        cy.contains('.oxd-table-row',kpi.kpiName).within(()=>{
            cy.get('.oxd-icon-button').eq(1).click();
        })
    }
}

export default new KpiPage();
