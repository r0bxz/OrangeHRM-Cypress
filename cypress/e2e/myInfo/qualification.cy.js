import qualificationsPage from '../../pages/myInfo/qualificationPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import qualificationsData from '../../fixtures/qualificationsData.json';

describe('Qualifications Page Tests', () => {
    let qualifications;

    before(() => {
        qualifications = qualificationsData;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });

    it('should add work experience', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Qualifications').click();
        
        qualificationsPage.addWorkExperience(qualifications.workExperience);

        
    });

    it('should add education', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Qualifications').click();
        qualificationsPage.addEducation(qualifications.education);
    });

    it('should add skills', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Qualifications').click();

        qualificationsPage.addSkill(qualifications.skill);
        qualificationsPage.deleteSkill(qualifications.skill)
        
    });

    it.skip('should add languages', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Qualifications').click();

        qualificationsPage.addLanguage(qualifications.language);
        qualificationsPage.deleteLanguage(qualifications.language);
       
    });

    it('should add licenses', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Qualifications').click(qualifications.license);

        qualificationsPage.addLicense(qualifications.license);
        qualificationsPage.deleteLicense(qualifications.license);
        
    });
});
