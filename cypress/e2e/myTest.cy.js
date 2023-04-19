import LoginPage from "../pageObjects/LoginPage"
import MainPage from "../pageObjects/MainPage"
import TrainingPage from "../pageObjects/TrainingPage"
import CoursePage from "../pageObjects/CoursePage"


describe("Test QA for Schx", () => {

    let loginPage = new LoginPage()
    let mainPage = new MainPage()
    let trainingPage = new TrainingPage()

    beforeEach(() => {
        loginPage.navigate()
        loginPage.getHeader().should("contain.text", "Log in Here")
        loginPage.login()
        mainPage.getMenu().should("be.visible")
        mainPage.clickMenuElementByText("Training")
    })

    it("Should display QA category to contain only the given list of items", () => {
        trainingPage.clickCategoryElementByText("QA")
        cy.wrap(trainingPage.getCoursesTitles()).should("deep.equal", [
            "QA course",
            "ΒΑ course",
            "Μάθημα για τους Devs",
            "Μάθημα για automation"
        ])
    })

    it("Should have 100% progress for completed course", () => {
        let coursePage = new CoursePage()
        trainingPage.clickCourseWithTitle("Μάθημα για automation")
        coursePage.enroll()
        coursePage.completeAllSteps()
        coursePage.getCompleteButtons().should("contain.text", "Completed")
        coursePage.getCourseProgress().should("contain.text", "100.00%")
    })

})
