const { expect } = require("@playwright/test")

class SwagLoginPage {
    constructor(page){
        this.page = page,
        this.username = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.submitButton = page.getByRole("button")
    }

    async goto() {
        await this.page.goto("https://www.saucedemo.com/", { waitUntil: 'domcontentloaded' })
    }

    async fillRequiredFields({ username, password}){
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async submit() {
        await this.submitButton.click()
    }

    async expectSuccess() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }

    async expectFailure() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com")
        await expect(this.page.getByRole("alert")).toBeVisible()
    }
}

module.exports = { SwagLoginPage }