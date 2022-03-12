/// <reference types="cypress" />

describe('Share location app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('input').first().type("Santa Caterina")
        cy.get('select').select('Hotel')
        cy.contains("Add").click()
    })

    it('adds location correctly', ()=> {
        cy.get('.leaflet-marker-icon').last().click()
        cy.contains("Santa Caterina").should('exist')
    })

    it('edits location correctly', ()=> {
        cy.get('.leaflet-marker-icon').last().click()
        cy.contains("edit").click()

        cy.get('.card-edit input').first().clear().type("La Mamounia")
        cy.contains("Save").click()
        cy.contains("Location edited successfully!").should('exist')

    })
})
