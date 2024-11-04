class PerformanceReviewPage {
    fillOutReview(details){
      cy.get('.oxd-input').eq(1).type(details.kpiRatings[0],{force:true})
      cy.get('textarea').eq(0).clear({force:true}).type(details.kpiComments[0],{force:true})

      cy.get('.oxd-input').eq(2).type(details.kpiRatings[0],{force:true})
      cy.get('textarea').eq(1).clear({force:true}).type(details.kpiComments[0],{force:true})

      cy.get('.oxd-input').eq(3).type(details.kpiRatings[0],{force:true})
      cy.get('textarea').eq(2).clear({force:true}).type(details.kpiComments[0],{force:true})

      cy.get('.oxd-input').eq(4).type(details.kpiRatings[0],{force:true})
      cy.get('textarea').eq(3).clear({force:true}).type(details.kpiComments[0],{force:true})


      cy.get('.oxd-input').eq(5).type(details.kpiRatings[0],{force:true})
      cy.get('textarea').eq(4).clear({force:true}).type(details.kpiComments[0],{force:true})
     
     cy.get('textarea').eq(5).type(details.generalComment)
    }
    
}

export default new PerformanceReviewPage();
