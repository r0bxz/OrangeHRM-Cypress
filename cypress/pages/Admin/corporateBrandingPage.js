class corporateBrandingPage {

    selectColor(colorPickerIndex, colorHex) {
      cy.get('.oxd-color-input').eq(colorPickerIndex).click(); 
      cy.get('.oxd-color-picker-label').contains('HEX').next('input').clear().type(colorHex); 
    }
  
    uploadFile(fileInputIndex, fileName) {
      cy.get('input[type="file"]').eq(fileInputIndex).attachFile(fileName);
    }
  
    
    clickResetToDefault() {
      cy.contains('button', 'Reset to Default').click();
    }
  
    
    clickPreview() {
      cy.contains('button', 'Preview').click();
    }
  
    
    clickPublish() {
      cy.contains('button', 'Publish').click();
    }
  }
  
  export default new corporateBrandingPage();
  