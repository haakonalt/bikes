describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('page loads ok', () => {
        cy.get('[data-testid=title]')
            .should('be.visible');
    });

    it('list view is displayed and shows a list of bikes', () => {
        cy.get('[data-testid=tab-selection-list').click()
        cy.get('[data-testid=bike-list]').should('be.visible');

        const bikes = cy.get('[data-testid=bike-list-row]');
        // asserting that we get a fairly large list.
        // Don't want to make our tests too flaky by asserting on an exact number here
        bikes.should('to.have.lengthOf.above', 100);

        bikes
            .eq(0) // just asserting first element in the list, as testing all 247 takes a while.
            .each(row => {
                cy.wrap(row).find("[data-testid=station-name]").should('be.visible');
                cy.wrap(row).find("[data-testid=station-docks-available]").should('be.visible');
                cy.wrap(row).find("[data-testid=station-bikes-available]").should('be.visible');
                cy.wrap(row).find("[data-testid=station-capacity]").should('be.visible');
            });
    });

    it('Map view is displayed and show bikes in a map', () => {
        cy.get('[data-testid=tab-selection-map]').click();

        cy.get('.leaflet-marker-pane').within(_ => {
            cy.get("img").should('to.have.lengthOf.above', 100);
            cy.get("img").eq(0).click();
        });

        // assert that popup is visible
        cy.get('[data-testid=map-marker-popup]').should('be.visible');
    })

});