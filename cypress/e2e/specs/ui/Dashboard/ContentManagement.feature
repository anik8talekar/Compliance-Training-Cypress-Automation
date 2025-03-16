Feature: Content Management


       Scenario: Content Management - User should be able to add content
              Given I open the app
              And I navigate to the content management screen
              When I click on add new button
              And I enter appropriate data
              And I click on save button
              Then I verify new record is created

# Scenario: Content Management - User should be able to edit content
#        Given I visit the last page
#        When I click on edit icon
#        Then I enter updated data
#        And I click on save button

# Scenario: Content Management - User should be able to delete content
#        When I click on delete icon
#        Then I verify the appropriate message


# Scenario: Content Management - User should be able to navigate through pagination
#        When I click & select the pagesize from dropdown
#        Then I should be able to see records on the same page according to pagesize

Scenario: Content Management - User should get pop-up of discard/unsaved changes 
        Given I click on add new button
        When I enter appropriate data
        And I click on back button 
        Then The unsaved changes pop-up should be displayed

Scenario: Content Management - The changes should not be discarded when user clicks cancel button
        Given I click on add new button
        When I enter appropriate data
        And I click on back button
        Then The unsaved changes pop-up should be displayed
        And I click on cancel button
        And It should not discard the changes


Scenario: Content Management - The changes should be discarded when user clicks ok button
        Given I click on add new button
        When I enter appropriate data
        And I click on back button 
        Then The unsaved changes pop-up should be displayed
        And I click on ok button
        And It should discard the change & redirected to the same content management screen

   



