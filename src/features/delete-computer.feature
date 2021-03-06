Feature: Delete Computer
  As a user of a computers app
  I would like access to basic delete computer functionality
  So that I can delete a computer

  Scenario: Delete a computer
    Given The computers page is opened
    When The user click add new computer button
    And The user input "Delete" to the computer name
    And The user click create button
    And The user input "Delete" to the filter field
    And The user click filter button
    And The user click on the first computer in computer list
    And The user click delete button
    Then Open the computers page
    And The confirmation message is "Done! Computer has been deleted"

