/// <reference types="Cypress" />

describe('tasks management', () => {
  it('should open and close the new task model', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.contains('Add Task').click()
    cy.get('.backdrop').click({
      force: true
    })
  })
})