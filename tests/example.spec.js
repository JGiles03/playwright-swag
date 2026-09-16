// @ts-check
const { test, expect } = require('@playwright/test');
const { SwagLoginPage } = require("../pages/swag-login-page")
import { describe } from "node:test";

describe("Login page tests", () => {
  test('logs in with correct user and password', async ({ page }) => {
    const form = new SwagLoginPage(page)
    await form.goto()

    await form.fillRequiredFields({
      username: "standard_user",
      password: "secret_sauce"
    })

    await form.submit()
    await form.expectSuccess()
  });

  test("doesn't log in with incorrect username", async ({ page }) => {
    const form = new SwagLoginPage(page)
    await form.goto()

    await form.fillRequiredFields({
      username: "standard_use",
      password: "secret_sauce"
    })

    await form.submit()
    await form.expectFailure()
  });

  test("doesn't log in with incorrect password", async ({ page }) => {
    const form = new SwagLoginPage(page)
    await form.goto()

    await form.fillRequiredFields({
      username: "standard_user",
      password: "aaaaaaaaa"
    })

    await form.submit()
    await form.expectFailure()
  });

  test("doesn't log in with no inputs", async ({ page }) => {
    const form = new SwagLoginPage(page)
    await form.goto()

    await form.submit()
    await form.expectFailure()
  });

  test("doesn't let in locked_out_user", async ({ page }) => {
    const form = new SwagLoginPage(page)
    await form.goto()

    await form.fillRequiredFields({
      username: "locked_out_user",
      password: "secret_sauce"
    })

    await form.submit()
    await form.expectFailure()
  });

})
