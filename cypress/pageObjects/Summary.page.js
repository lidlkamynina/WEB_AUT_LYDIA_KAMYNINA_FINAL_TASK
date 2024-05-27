class SummaryPage {

    static get NameRow() {
        return cy.get('.table-responsive tr:nth-child(1) td:nth-child(2)');
    }

    static get GenderRow() {
        return cy.get('.table-responsive tr:nth-child(3) td:nth-child(2)');
    }

    static get MobilePhoneRow() {
        return cy.get('.table-responsive tr:nth-child(4) td:nth-child(2)');
    }

    static get DOBRow() {
        return cy.get('.table-responsive tr:nth-child(5) td:nth-child(2)');
    }

    static get SubjectsRow() {
        return cy.get('.table-responsive tr:nth-child(6) td:nth-child(2)');
    }

    static get HobbiesRow() {
        return cy.get('.table-responsive tr:nth-child(7) td:nth-child(2)');
    }

    static get PictureRow() {
        return cy.get('.table-responsive tr:nth-child(8) td:nth-child(2)');
    }

    static get StateAndCityRow() {
        return cy.get('.table-responsive tr:nth-child(10) td:nth-child(2)');
    }


}

export default SummaryPage;