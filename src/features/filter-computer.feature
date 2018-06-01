Feature: Filter Computer
  As a user of a computers app
  I would like access to basic filter computer functionality
  So that I can filter a computer

  Given The computers page is opened
  Then The element "addNewComputerBtn" is present on computers page
  And The element "listOfComputers" is present on computers page
  And The element "filterField" is present on computers page


  Scenario: Filtering result with existing value
    Given The computers page is opened
    When The user click add new computer button
    And The user input Filter1
    And The user click create button
    And The user input Filter1 in filter field
    And The user click filter button
    Then The Filter1 is displaying in computer list

  Scenario: Filtering result with incorrect value
    Given The computers page is opened
    When The user input Filter2 in filter field
    And The user click filter button
    Then the current page is computers page
    And The confirmation message is "Nothing to display"


  Scenario: Filtering result with empty value
    Given The computers page is opened
    When The user click filter button
    Then The Filter1 is displaying in computer list # ne fact
