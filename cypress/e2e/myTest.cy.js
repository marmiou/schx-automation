import LoginPage from "../pageObjects/LoginPage"
import MainPage from "../pageObjects/MainPage"
import TrainingPage from "../pageObjects/TrainingPage"
import CoursePage from "../pageObjects/CoursePage";

let loginPage = new LoginPage()
let mainPage = new MainPage()

describe("Test QA for Schx", () => {
    beforeEach(() => {
        loginPage.navigate()
        loginPage.getHeader().should("contain.text", "Log in Here")
        loginPage.login()
        mainPage.getMenu().should("be.visible")
        mainPage.clickMenuElementByText("Training")
    })

    it("Should display QA category to contain only the given list of items", () => {
        let trainingPage = new TrainingPage()
        trainingPage.clickCategoryElementByText("QA")
        cy.wrap(trainingPage.getCoursesTitles()).should("deep.equal", [
            "QA course",
            "ΒΑ course",
            "Μάθημα για τους Devs",
            "Μάθημα για automation"
        ])
    })

    it("Should have 100% progress for completed course", () => {
        let trainingPage = new TrainingPage()
        let coursePage = new CoursePage()
        trainingPage.clickCourseWithTitle("Μάθημα για automation")
        coursePage.enroll()
        coursePage.completeAllSteps()
        coursePage.getCompleteButtons().should("contain.text", "Completed")
        coursePage.getCourseProgress().should("contain.text", "100.00%")
    })

})
