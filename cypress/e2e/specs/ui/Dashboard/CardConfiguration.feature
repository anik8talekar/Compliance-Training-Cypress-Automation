Feature: Card Configuration


       Scenario: Card Configuration - User should be able to add Card
              Given I open the app
              And I navigate to the card configuration screen
              When I click on add new button
              And I enter appropriate data
              And I click on switch checkbox
              And I click on card configuration button
              Then I click on save button
              And I verify new record is created

# Scenario: Card Configuration - User should be able to edit Content
#        Given I visit the last page
#        When I click on edit icon
#        Then I enter updated data
#        And I click on save button

# Scenario: Card Configuration - User should be able to delete Content
#        When I click on delete icon
#        Then I verify the appropriate message


# Scenario: Card Configuration - User should be able to navigate through pagination
#        When I click & select the pagesize from dropdown
#        Then I should be able to see records on the same page according to pagesize
 
# Scenario: Card Configuration - User should get pop-up of discard/unsaved changes 
#         Given I click on add new button
#         When I enter appropriate data
#         And I click on back button
#         Then The unsaved changes pop-up should be displayed


# Scenario: Card Configuration - The changes should not be discarded when user clicks cancel button
#         Given I click on add new button
#         When I enter appropriate data
#         And I click on back button
#         Then The unsaved changes pop-up should be displayed
#         And I click on cancel button
#         And It should not discard the changes


# Scenario: Card Configuration - The changes should be discarded when user clicks ok button
#         Given I click on add new button
#         When I enter appropriate data
#         And I click on back button 
#         Then The unsaved changes pop-up should be displayed
#         And I click on ok button
#         And It should discard the change & redirected to the same content management screen
