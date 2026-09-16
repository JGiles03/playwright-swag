const { InventoryPage } = require('../pages/inventory-page')
const {test, expect} =require('@playwright/test')
import { describe } from "node:test";


describe('Inventory page test', ()=>{

    // test('When the buger btn is shown the nav links are visible', async ({page})=>{

    //     const form = new InventoryPage(page)

    //     await form.goto()

    //     await form.burgerBtnSuccess()
    // })

    test('When the cart buton is hit redirected to cart page', async({page})=>{

        const form = new InventoryPage(page)

        await form.goto()
        await form.goToCart.click()
        await form.cartBtnSuccess()
    })
})