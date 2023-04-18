export default class LoginPage {
    //elements
    URL = "http://qatest.schoox.com/login"
    HEADER = "h2"
    EMAIL_FIELD = "input[type=email]"
    PASSWORD_FIELD = "input[type=password]"
    BUTTON = "button[type=submit]"

    //literals
    EMAIL = "admin@schoox.com"
    PASSWORD = "123456"

    navigate() {
        return cy.visit(this.URL)
    }

    getHeader() {
        return cy.get(this.HEADER)
    }

    getEmailInput() {
        return cy.get(this.EMAIL_FIELD)
    }

    getPasswordInput() {
        return cy.get(this.PASSWORD_FIELD)
    }

    getBtn() {
        return cy.get(this.BUTTON)
    }

    login() {
        this.getEmailInput().type(this.EMAIL)
        this.getPasswordInput().type(this.PASSWORD)
        this.getBtn().click()
    }
}
