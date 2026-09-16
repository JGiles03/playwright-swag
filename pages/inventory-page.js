const { expect } = require("@playwright/test")

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.burgerBtn = page.getByText("Open Menu");
    this.links = page.getByRole("navigation");
    this.filter = page.getByRole("select", { name: "sort products" });
    this.goToCart = page.getByRole("button", { name: "Cart" });
    this.addToCartBtn = page.getByRole("button", {name: 'Add to cart'});
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/inventory.html", {
      waitUntil: "domcontentloaded",
    });
  }

  async cartBtnSuccess(){
    await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html")
  }

  async burgerBtnSuccess(){
    await this.burgerBtn.click()
    await expect(this.burgerBtn).toHaveJsProperty('validate.hidden', false)
  }

}


module.exports = { InventoryPage };