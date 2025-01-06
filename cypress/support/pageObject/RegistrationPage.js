import homePageSelectors from "../selectors/homePageSelectors";
import registrationPageSelectors from "../selectors/registrationPageSelectors";

class RegistrationPage {
  static visitRegistrationPage() {
    const baseUrl = Cypress.env("baseUrl"); 
    cy.visit(baseUrl + "/customer/account/create/"); 
  }

  static fillOutRegistrationForm(userData) {
    const { firstName, lastName, email, password } = userData;    
    cy.get(registrationPageSelectors.firstNameInput).type(firstName);
    cy.get(registrationPageSelectors.lastNameInput).type(lastName);
    cy.get(registrationPageSelectors.emailInput).type(email);
    cy.get(registrationPageSelectors.passwordInput).type(password);
    cy.get(registrationPageSelectors.passwordConfirmationInput).type(password);
  }

  static submitRegistrationForm() {
    cy.get(registrationPageSelectors.createAccountButton).click();
  }

  static verifySuccessfulRegistration() {
    cy.url().then((url) => {
      cy.log("Current URL:", url); 
    });

    cy.contains(registrationPageSelectors.registrationSuccessMessage, {
      timeout: 10000,
    })
      .should("be.visible")
      .then(() => {
        cy.log("Success message found!");
      });
  }

  static getRegisteredUsername() {
    cy.get(registrationPageSelectors.registeredUsernameText)
      .invoke("text")
      .then((contactInfoText) => {
        const generatedUsername = contactInfoText.split("\n")[0].trim();
        cy.wrap(generatedUsername).as("username");
      });
  }

  static verifyHomePageUsername() {
    cy.get("@username").then((username) => {
      cy.visit("https://magento.softwaretestingboard.com/");
      cy.get(homePageSelectors.welcomeMessage).should("contain", username);
      cy.get(homePageSelectors.baseText).should("have.text", "Home Page");
    });
  }
}

export default RegistrationPage;
