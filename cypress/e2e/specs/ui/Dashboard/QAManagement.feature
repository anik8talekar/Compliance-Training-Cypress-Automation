Feature: QA Management


       Scenario: QA Management - User should be able to add Training Question
              Given I open the app
              And I navigate to the Q&A management screen
              When I click on add new button
              And I enter appropriate data
              And I click on slide toggles
              Then I click on save button
              And I verify new record is created


       Scenario: QA Management - User should be able to add multiple card configurations
              Given I open the app
              And I navigate to the Q&A management screen
              When I click on add new button
              And I enter appropriate data
              And I click on slide toggles
              Then I click on card configurations button
              And I enter appropriate data
              And I click on save button
              And I verify new record is created

#   Need to dicuss whether EDIT functionality will be available or not
# Scenario: QA Management - User should be able to edit Training Question
#        Given I visit the last page
#        When I click on edit icon
#        Then I enter updated Data
#        And I click on save button


#   Need to dicuss whether DELETE functionality will be available or not
# Scenario: QA Management - User should be able to delete Training Question
#        When I click on delete icon
#        Then I verify the appropriate Message


# Scenario: QA Management - User should be able to navigate through pagination
#        When I click & select the pagesize from dropdown
#        Then I should be able to see records on the same page according to pagesize


# Scenario: QA Management - User should get pop-up of discard/unsaved changes 
#         Given I click on add new button
#         When I enter appropriate data
#         And I click on back button 
#         Then The unsaved changes pop-up should be displayed

# Scenario: QA Management - The changes should not be discarded when user clicks cancel button
#         Given I click on add new button
#         When I enter appropriate data
#         And I click on back button 
#         Then The unsaved changes pop-up should be displayed
#         And I click on cancel button
#         And It should not discard the changes


# Scenario: QA Management - The changes should be discarded when user clicks ok button
#         Given I click on add new button
#         When I enter appropriate data
#         And I click on back button 
#         Then The unsaved changes pop-up should be displayed
#         And I click on ok button
#         And It should discard the change & redirected to the same QA management screen
