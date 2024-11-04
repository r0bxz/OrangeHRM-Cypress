import managePerformanceReviewsPage from '../../pages/Performance/employeeReviews';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import performanceReviewData from '../../fixtures/performanceReviewData.json';

describe('Manage Performance Reviews Page Tests', () => {
    let performanceReview;
    let validUser; 
    let users ;
    

    before(() => {
        performanceReview = performanceReviewData;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchPerformanceReview');

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC')
        .then((response) => {
             users = response.body.data;

             validUser = users.find(user => user.supervisors && user.supervisors.length > 0);
             if(validUser){
                performanceReview.newReview.employeeFirstAndLast=validUser.firstName +" "+ validUser.lastName;
                performanceReview.newReview.employeeName = validUser.middleName && validUser.middleName!== "" 
                    ? `${validUser.firstName} ${validUser.middleName} ${validUser.lastName}`
                    : `${validUser.firstName} ${validUser.lastName}`;

                    const supervisor = validUser.supervisors[0];
                    performanceReview.newReview.reviewerFirstName=supervisor.firstName;
                    performanceReview.newReview.reviewerName = supervisor.middleName && supervisor.middleName!== "" 
                        ? `${supervisor.firstName} ${supervisor.middleName} ${supervisor.lastName}`
                        : `${supervisor.firstName} ${supervisor.lastName}`;}
                        else 
                        cy.log('no valid user')
        });
    });

    it('should add a performance review', () => {

        managePerformanceReviewsPage.addReview(performanceReview.newReview);
    });

    it('should delete a performance review', () => {

        managePerformanceReviewsPage.deleteReview(performanceReview.newReview);
    });
});
