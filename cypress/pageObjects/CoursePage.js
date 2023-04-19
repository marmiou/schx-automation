export default class CoursePage {
    ENROLL_BUTTON = ".enroll"
    COURSE_PROGRESS = ".top_course_progress"
    COMPLETE_BUTTONS = "div.course_steps_main > div:nth-child(n) > div.course_steps_right > div > b"

    OK = "OK"

    getEnrollBtn() {
        return cy.get(this.ENROLL_BUTTON)
    }

    enroll() {
        this.getEnrollBtn().click()
    }

    getCourseProgress() {
        return cy.get(this.COURSE_PROGRESS)
    }

    getCompleteButtons() {
        return cy.get(this.COMPLETE_BUTTONS)
    }

    completeAllSteps() {
        this.getCompleteButtons().each(($b) => {
            $b.parent().on().click()
            cy.on("window:alert", (str) => {
                cy.contains(this.OK).click()
            })
            cy.on("window:confirm", () => true)
        })
    }


}