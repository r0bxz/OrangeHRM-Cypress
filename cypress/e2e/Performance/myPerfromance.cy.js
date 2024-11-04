import performanceReviewPage from '../../pages/Performance/myPerformancePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import myPerformanceReviewData from '../../fixtures/myPerformanceReviewData.json';

describe('Performance Review Page Tests', () => {
    let reviewData;

    before(() => {
        reviewData = myPerformanceReviewData;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });

        // Navigate to the Performance Review page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/myPerformanceReview');
    });

    it('should fill out the self performance review', () => {
        cy.get('.oxd-icon-button').eq(2).click();

        performanceReviewPage.fillOutReview(reviewData);

        cy.contains('button','Save').click();
    });
});
