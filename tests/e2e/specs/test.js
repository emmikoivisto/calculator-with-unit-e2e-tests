// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('buttons should update display', () => {
    cy.get('#number5').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '58')
  })

  it('arithmetical operations should update display with result', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '24')
  })

  it('should have multiple operations chained together', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '163')
  })

  it('should output negative numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator_subtract').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2')
  })
  
  it('should output decimals', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4.5')
  })

  it('should output big numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8999999999991')
  })

  it('should error when dividing by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'ERROR')
  })
})
