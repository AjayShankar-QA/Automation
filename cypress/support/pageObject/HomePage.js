import homePageSelectors from "../selectors/homePageSelectors";

class HomePage {
  static visitHomePage(baseUrl) {
    cy.visit(baseUrl);  
  }

  static verifyHomePageUsername(username) {
    cy.get(homePageSelectors.welcomeMessage).should('be.visible').and('contain', username);
    cy.get(homePageSelectors.baseText).should("have.text", "Home Page");  
  }
 
  }

export default HomePage;  
