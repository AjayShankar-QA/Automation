import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "../../../support/pageObject/RegistrationPage";
import HomePage from "../../../support/pageObject/HomePage";
import { generateUserData } from "../../../utils/dataGenerator";

let userData;

Given("I am on the signup page", () => {
  userData = generateUserData();
  RegistrationPage.visitRegistrationPage(); // Static call
});

When("I fill out the registration form with valid details", () => {
  const { firstName, lastName, email, password } = userData;
  RegistrationPage.fillOutRegistrationForm({
    firstName,
    lastName,
    email,
    password,
  }); // Static call
});

When("I submit the registration form", () => {
  RegistrationPage.submitRegistrationForm(); // Static call
});

Then("I should see a success message", () => {
  RegistrationPage.verifySuccessfulRegistration(); // Static call
});

Then("I should be able to log in with the same credentials", () => {
    RegistrationPage.getRegisteredUsername();
    cy.get("@username").then((username) => {
      HomePage.visitHomePage(Cypress.env("baseUrl"));  // Static call to visit home page
      HomePage.verifyHomePageUsername(username);  // Static call to verify username
    });
});