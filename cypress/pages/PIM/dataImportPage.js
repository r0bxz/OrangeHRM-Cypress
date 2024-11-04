class DataImportPage {
    get uploadButton() { return cy.contains('Upload'); }
    get fileInput() { return cy.get('input[type="file"]'); }
    get successMessage() { return cy.contains('button','Ok'); } 

    uploadFile(fileName) {
        this.fileInput.selectFile(fileName,{force:true}); 
        this.uploadButton.click();
    }

    verifyUploadSuccess() {
        this.successMessage.should('be.visible').click();
    }
}

export default new DataImportPage();
