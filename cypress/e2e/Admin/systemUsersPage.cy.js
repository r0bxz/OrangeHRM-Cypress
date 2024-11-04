import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import systemUsersPage from '../../pages/Admin/systemUsersPage';

describe('Dashboard Page Tests', () => {
  let validUser;
    beforeEach(() => {
        cy.session('login', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/');
          loginPage.enterUsername(loginData.validUser.username);
          loginPage.enterPassword(loginData.validUser.password);
          loginPage.clickSignIn();
          cy.url().should('include', '/dashboard/index');
        });
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
      .then((response) => {
        const users = response.body.data;
        validUser = users.find(user => user.status && !user.deleted);
      });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
      });

     
      it('should search for a user by username and verify details', () => {
        systemUsersPage.enterUsername(validUser.userName);
        systemUsersPage.clickSearch();
        cy.wait(1000);
        systemUsersPage.verifyUserInTable(validUser.userName);
    });

    it('should search for a user by employee name and verify details', () => {
        if(validUser.employee.middleName != "")
        systemUsersPage.enterEmployeeName(validUser.employee.firstName+" "+ validUser.employee.middleName+" "+ validUser.employee.lastName);
        else 
        systemUsersPage.enterEmployeeName(validUser.employee.firstName+" "+ validUser.employee.lastName);
        systemUsersPage.clickSearch();
        cy.wait(1000);
        systemUsersPage.verifyEmployeeNameInTable(validUser.employee.firstName +" "+ validUser.employee.lastName)
    });

    it('should search for users by role and verify results', () => {
      systemUsersPage.selectUserRole(validUser.userRole.name); 
      systemUsersPage.clickSearch();
      cy.wait(1000);
      systemUsersPage.verifyUserInTable(validUser.userRole.name); 
    });

    it('should reset the search form', () => {
        systemUsersPage.enterUsername('mahmoud123');
        systemUsersPage.clickReset();
        systemUsersPage.usernameField().should('have.value', '');
    });
    it('should allowing deleting the user', () => {
      systemUsersPage.deleteUser(validUser);
      
    })

    it('should allow editing the user information' , ()=> {
     systemUsersPage.editUser(validUser);
     cy.contains('Success').should('be.visible');
    })
    it('should search for a user by username and role and verify details', () => {
      systemUsersPage.searchByUsernameAndRole(validUser.userName, validUser.userRole.name);
      cy.wait(1000);
      systemUsersPage.verifyUserInTable(validUser.userName);
      systemUsersPage.verifyUserInTable(validUser.userRole.name);
    });
    it('should hide and show options', ()=>{
   systemUsersPage.hideOptionsButton();
    })
 it('should show and hide the overlay', ()=> {
systemUsersPage.hideAndShowOverlay();
 })

});

    