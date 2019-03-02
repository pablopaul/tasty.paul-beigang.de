import dayName from '../../src/dayName';

describe('Tasty', function () {
    it('Displays the current day', function () {
        cy.visit('http://localhost:3000')
        cy.contains(dayName(new Date().getDay()))
    })
})