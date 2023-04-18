export default class MainPage {
    MENU_LIST = "#menu > div:nth-child(n) > a > i"

    getMenu() {
        return cy.get(this.MENU_LIST)
    }

    getMenuElementByText(text) {
        return this.getMenu().contains(text)
    }

    clickMenuElementByText(text) {
        this.getMenuElementByText(text).click()
    }
}
