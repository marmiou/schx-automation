export default class TrainingPage {
    CATEGORIES_LIST = ".category_item"
    COURSES_TABLE = "div.course_listing tr:nth-child(n) > td:nth-child(n) b"

    getCategoryElements() {
        return cy.get(this.CATEGORIES_LIST)
    }

    getCategoryElementByText(text) {
        return this.getCategoryElements().contains(text)
    }

    clickCategoryElementByText(text) {
        this.getCategoryElementByText(text).click()
    }

    getCoursesTable() {
        return cy.get(this.COURSES_TABLE)
    }

    getCoursesTitles() {
        const titles = []
        this.getCoursesTable()
            .each(($b) => titles.push($b.text()))
        return titles
    }

    getCourseByTitle(title) {
        return this.getCoursesTable().contains(title)
    }

    clickCourseWithTitle(title) {
        this.getCourseByTitle(title).click()
    }
}