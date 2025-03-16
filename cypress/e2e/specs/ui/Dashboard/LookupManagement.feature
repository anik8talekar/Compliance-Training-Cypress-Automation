Feature: Lookup Management

# Training Status
        Scenario: Lookup Management - User should be able to add training status
               Given I open the app
               When  I navigate to the training status screen
               Then I click on add new button
               And I enter training status data
               Then I click on save button
               And I verify new record is created under training status

              
       Scenario: Lookup Management - User should be able to edit training status
           
            Given I click on edit icon
            When I enter updated data
            And I click on save button
            Then I verify the Appropriate Update Message under training status


       Scenario: Lookup Management - User should be able to delete training status
            When I click on delete icon
            Then I verify the appropriate delete message

       Scenario: Lookup Management - User should be able to navigate through pagination
            When I click & select the pagesize from dropdown
            Then I should be able to see records on the same page according to pagesize

       Scenario: Lookup Management - The changes should not be discarded when user clicks cancel button
          Given I click on add new button
          When I enter training status data
          And I click on close button 
     #     Then The unsaved changes pop-up should be displayed
     #     And I click on cancel button
     #     And It should not discard the changes


 Scenario: Lookup Management - The changes should be discarded when user clicks ok button
         Given I click on add new button
         When I enter training status data
         And I click on close button 
#         Then The unsaved changes pop-up should be displayed
#         And I click on ok button
#         And It should discard the change & redirected to the same content management screen



# ##################################################################################################
# # Traininig Type 

  Scenario: Lookup Management - User should be able to add training type
               Given I open the app
               And I navigate to the training type screen
               When I click on add new button
               And I enter training type data
               And I click on save button
               Then I verify new record is created under training type

              
 Scenario: Lookup Management - User should be able to edit training type
            Given I click on edit icon
            When I enter updated data
            And I click on save button
            Then I verify the Appropriate Update Message under training type


 Scenario: Lookup Management - User should be able to delete training type
          When I click on delete icon
          Then I verify the appropriate delete message

 Scenario: Lookup Management - User should be able to navigate through pagination
         When I click & select the pagesize from dropdown
         Then I should be able to see records on the same page according to pagesize


 Scenario: Lookup Management - The changes should not be discarded when user clicks cancel button
          Given I click on add new button
          When I enter training status data
          And I click on close button 
#         Then The unsaved changes pop-up should be displayed
#         And I click on cancel button
#         And It should not discard the changes


 Scenario: Lookup Management - The changes should be discarded when user clicks ok button
         Given I click on add new button
         When I enter training status data
         And I click on close button 
#         Then The unsaved changes pop-up should be displayed
#         And I click on ok button
#         And It should discard the change & redirected to the same content management screen

# ##################################################################################################

# # Training 

 Scenario: Lookup Management - User should be able to add training 
               Given I open the app
               And I navigate to the training screen
               When I click on add new button
               And I enter training data
               And I click on save button
               Then I verify new record is created under training

              
 Scenario: Lookup Management - User should be able to edit training
            Given I click on edit icon
            When I enter updated Training data
            And I click on save button
            Then I verify the Appropriate Update Message under training


 Scenario: Lookup Management - User should be able to delete training 
        When I click on delete icon
        Then I verify the appropriate delete message

 Scenario: Lookup Management - User should be able to navigate through pagination
       When I click & select the pagesize from dropdown
       Then I should be able to see records on the same page according to pagesize

 Scenario: Lookup Management - The changes should not be discarded when user clicks cancel button
         Given I click on add new button
         When I enter updated Training data
         And I click on close button 
         Then The unsaved changes pop-up should be displayed
         And I click on cancel button
         And It should not discard the changes


 Scenario: Lookup Management - The changes should be discarded when user clicks ok button

         Given I click on close button 
         When The unsaved changes pop-up should be displayed
         Then I click on ok button
         And It should discard the change & redirected to the same training screen

# ##################################################################################################

# # Control Type 

 Scenario: Lookup Management - User should be able to add control type 
               Given I open the app
               And I navigate to the control type screen
               When I click on add new button
               And I enter control type data
               And I click on save button
               Then I verify new record is created under control type

              
 Scenario: Lookup Management - User should be able to edit control type
            Given I click on edit icon
            When I enter updated control type data
            And I click on save button
            Then I verify the Appropriate Update Message under control type


 Scenario: Lookup Management - User should be able to delete control type 
        When I click on delete icon
        Then I verify the appropriate delete message

 Scenario: Lookup Management - User should be able to navigate through pagination
        When I click & select the pagesize from dropdown
       Then I should be able to see records on the same page according to pagesize

 Scenario: Lookup Management - The changes should not be discarded when user clicks cancel button
         Given I click on add new button
         When I enter updated control type data
         And I click on close button 
         Then The unsaved changes pop-up should be displayed
         And I click on cancel button
         And It should not discard the changes


 Scenario: Lookup Management - The changes should be discarded when user clicks ok button
     
         And I click on close button 
         Then The unsaved changes pop-up should be displayed
         And I click on ok button
         And It should discard the change & redirected to the same control type screen
