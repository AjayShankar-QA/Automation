# Automation Assessment - Magento Signup Flow

This repository contains an automation framework for testing the Magento signup and login flow using Cypress, Cucumber, and Page Object Model (POM). The framework covers the entire process of registering a user and verifying the login functionality.

## Project Structure

The project is organized as follows:

D:/Incubyte Systems/Automation_Assessment/
│
├── cypress/
│   ├── e2e/
│   │   └── BDD/                        
│   │      	└── Magento/
|	|		|	└── magentoStepDef.js
│   │   	│
│   │   	└── Mageneto.feature                    
│   │      
│   │
│   ├── reports\html/                               
│   │   └── asserts
|	|	├── videos
|	|	└── index.html
│   │
│   ├── support/                           
│   │   ├── pageObject/
│   │   │   ├── HomePage.js                    
│   │   │   └── RegistrationPage.js            
│   │   └── selectors/                   
│   │   |    ├── homePageSelectors.js                   
│	|	|    └── registrationPageSelectors.js              
│   │	|
|	|	└── commands.js
│   |   ├── e2e.js                   
│   |   └── index.js       
|	|
|	|
│   └── utils/
│   |   └── dataGenerator.ts                   
│   └── videos                               
│
├── node_modules/                              
│
├── cypress.config.js                                
├── package-lock.json                               
├── package.json                                                        
└── README.md 

# Project documentation
## Features

- **User Registration**: Automates the process of registering a new user on the Magento website.
- **Login Validation**: Verifies that a newly registered user can log in using the same credentials.
- **BDD Integration**: The tests are written in Gherkin syntax using Cucumber for behavior-driven development (BDD).
- **Page Object Model**: The project follows the Page Object Model (POM) pattern for better maintainability and scalability.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Automation_Assessment.git
   cd Automation_Assessment

2. Install the required dependencies:

    ```bash
    npm install

# Configuration
## Ensure that the baseUrl is correctly set in the cypress.config.js file to match the Magento website:

- ** env: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    },
    
# Running the Tests

1. Run the tests in headless mode:

    ```bash
    npx cypress run

2. Run the tests with the Cucumber report:

    ```bash
    npx cypress run --reporter cypress-mochawesome-reporter

- ** This will generate a test report in the cypress/reports/html/index.html file. **

# Report Generation

    # Once the tests are executed, the results will be stored in the cypress/reports/html/ directory. You can view the results by opening the index.html file.

# Conclusion

    - This project demonstrates a modular approach for automating the Magento signup and login flow using Cypress, Cucumber, and Page Object Model. It follows industry best practices and ensures scalability and maintainability in testing.