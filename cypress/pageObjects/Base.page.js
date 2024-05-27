class BasePage {

    static get Visit() {
        return cy.visit('/automation-practice-form');
    }

    static get FirstName() {
        return cy.get('#firstName');
    }

    static get LastName() {
        return cy.get('#lastName');
    }

    static get GenderMale() {
        //return label for radio
        return cy.get('#gender-radio-1 + label');
    }

    static get MobileNUmber() {
        return cy.get('#userNumber');
    }

    static get Calendar() {
        return cy.get('.react-datepicker-wrapper');
    }

    static get CalendarYear() {
        return cy.get('.react-datepicker__year-select');
    }

    static get CalendarMonth() {
        return cy.get('.react-datepicker__month-select');
    }

    static get CalendarDay() {
        return cy.get('.react-datepicker__day--028').not('.react-datepicker__day--outside-month');
    }

    static get Subjects() {
        return cy.get('#subjectsInput');
    }

    static get SubjectsEconomics() {
        return cy.get('#react-select-2-option-0');
    }

    static get MusicHobby() {
        return cy.get('#hobbies-checkbox-3 + label');
    }

    static get PictureFileInput() {
        return cy.get('#uploadPicture');
    }

    static get StateSelect() {
        return cy.get('#state');
    }

    static get StateNCR() {
        return cy.get('#react-select-3-option-0');
    }

    static get CitySelect() {
        return cy.get('#city');
    }

    static get CityDelhi() {
        return cy.get('#react-select-4-option-0');
    }
    static get SubmitButton() {
        return cy.get('#submit');
    }

}

export default BasePage;