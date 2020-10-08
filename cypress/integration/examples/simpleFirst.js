/// <reference types="cypress"/>

beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!')
})

context("trying new context", () => {
    specify("First Tests", () => {
        cy.visit("https://www.airbnb.co.nz")
        cy.log("First Test is running")
    })

    specify("Second Test", () => {
        cy.log("Second test is running")
    })


})
