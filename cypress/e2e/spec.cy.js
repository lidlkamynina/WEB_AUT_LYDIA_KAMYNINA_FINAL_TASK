//IF TEST FAILS, IT MAY BE BECAUSE OF THE AD AT THE BOTTOM OF THE SCREEN.
//IT COVERS UP THE STATE AND CITY DROPDOWN
//INSTALL ADBLOCK TO FIX THIS ISSUE.

import BasePage from "../pageObjects/Base.page"
import SummaryPage from "../pageObjects/Summary.page"

describe('Final work', () => {
  context('Actions', () => {
    before(() => {
      BasePage.Visit
    })
    it('Automatic form', () => {

      //input and submit data

      //input first, last name
      BasePage.FirstName.type('Lydia')
      BasePage.LastName.type('Kamynina')

      //select female gender
      BasePage.GenderFemale.click()

      //input mobile number
      BasePage.MobileNUmber.type('1234567890')

      //select date of birth - 28-02-1930
      BasePage.Calendar.click()
      BasePage.CalendarYear.select('1930')
      BasePage.CalendarMonth.select('February')
      BasePage.CalendarDay.click()

      //select subject
      BasePage.Subjects.type('Music')
      BasePage.SubjectsEconomics.click()

      //select hobby
      BasePage.MusicHobby.click()

      //select picture
      BasePage.PictureFileInput.selectFile('./cypress/files/cat.jpg')

      //select state and city
      BasePage.StateSelect.click() //only works if the ad doesn't cover up the dropdown. Install Adblock.
      BasePage.StateNCR.click()
      BasePage.CitySelect.click()
      BasePage.CityDelhi.click()

      //submit data
      BasePage.SubmitButton.click() //Works only if footer isn't covering the button. The reason behind viewpoint width being 1200px.

      //validate data
      SummaryPage.NameRow.should('have.text', 'Lydia Kamynina')
      SummaryPage.GenderRow.should('have.text', 'Female')
      SummaryPage.MobilePhoneRow.should('have.text', '1234567890')
      SummaryPage.DOBRow.should('have.text', '28 February,1930')
      SummaryPage.SubjectsRow.should('have.text', 'Economics')
      SummaryPage.HobbiesRow.should('have.text', 'Music')
      SummaryPage.PictureRow.should('have.text', 'cat.jpg')
      SummaryPage.StateAndCityRow.should('have.text', 'NCR Delhi')
    })
  })
})