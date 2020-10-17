/// <reference types="cypress" />

import {terminalLog} from '../support/helpers.ts'

describe('Personal values page loads and looks correct', () => {
  beforeEach(() => {
    const sessionId = 'fake-session=id'

    cy.server();
    cy.route({
      method: 'GET',
      url: '/questions',
      response: 'fixture:questions.json',
    });
    cy.route({
      method: 'POST',
      url: '/scores',
      response: `{"sessionId": "${sessionId}"}`,
    });
    cy.route({
      method: 'GET',
      url: `/personal_values?session-id=${sessionId}`,
      response: 'fixture:personal-values.json',
    });

  })

  it('can complete questionnaire and see personal values', () => {
    cy.visit('./questionnaire')
    let i = 0
    while (i < 10) {
      cy.contains(`Q${i+1}`).should('be.visible')
      cy.contains('Very Much Like Me').click()
      i++
    }
    cy.contains('Find out my Climate Personality').click()
    cy.contains('This is your Climate Personality').should('be.visible');
    cy.percySnapshot('Personal Values')

    //TODO: When this goes somewhere check it goes to the correct place
    cy.contains('Yes I’m ready!').should('be.visible')
  });
});
