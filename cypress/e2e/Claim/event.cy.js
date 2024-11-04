import eventsPage from '../../pages/Claim/eventsPage'; 
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Event Management Tests', () => {
    const eventName = 'Business Conference';
    const updatedDescription = 'Updated annual business conference description';
    const newEventData = {
        eventName: eventName,
        description: 'Annual business conference',
        isActive: true
    };
    let eventId;

    beforeEach(() => {

        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewEvents');
    });

    it('should add a new event', () => {
        
        cy.contains('button','Add').click();
        eventsPage.fillEventName(newEventData.eventName);
        eventsPage.fillDescription(newEventData.description);
        eventsPage.clickSave();
        cy.contains('Success').should('be.visible');

    });

    it('should search for an event', () => {
        eventsPage.fillEventNameForSearch(newEventData.eventName);
        eventsPage.clickSearch();
        
        cy.contains(newEventData.eventName).should('be.visible');
    });

    it('should edit the event', () => {
        cy.contains('.oxd-table-row',newEventData.eventName).within(()=>{
           cy.get('button').eq(1).click();
        })
        
        eventsPage.fillDescription(updatedDescription);
        eventsPage.toggleActiveStatus(); 
        eventsPage.clickSave();
        
        cy.contains('Success').should('be.visible');
    });

    it('should verify the event is updated', () => {
        
        cy.contains('.oxd-table-row',newEventData.eventName).should('be.visible');
    });

    it('should delete the event', () => {
        
        cy.contains('.oxd-table-row',newEventData.eventName).within(()=>{
           cy.get('button').eq(0).click();
        })
        
        // Confirm the delete action if necessary
        cy.contains('Yes, Delete').click();
        
        cy.contains('Success').should('be.visible');
    });

    it('should verify the event is deleted', () => {
        
        cy.contains(newEventData.eventName).should('not.exist');
    });
});
