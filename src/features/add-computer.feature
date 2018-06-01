Feature: Add Computer
  User would like access to basic add computer functionality
  So that user can add a computer

  Background:
    Given The user input Add to the filter field and delete all found computers

  Scenario: Add computer page displaying
    Given The computers page is opened
    When The user click add new computer button
    Then The add computer page is opened
    And The element "addNewComputerBtn" is present on computer page
    And The element "computerNameField" is present on computer page
    And The element "introducedDateField" is present on computer page


  Scenario: Cancel Add a new computer
    Given The computers page is opened
    When The user click add new computer button
    And The user click cancel button
    Then The computers page is opened

  Scenario Outline: successfull adding
    Given The add computer page is opened
    When The user input <computer name>
    And The user <introduced date>
    And The user input <discontinued date>
    And The user select <company>
    And The user click create button
    Then The computers page is opened
    And The confirmation message is "Done! Computer Test Computer has been created"

    Examples:
      | computer name | introduced date | discontinued date | company |
      | Add1          |                 |                   |         |
      | Add2          | "2022-03-04"    |                   |         |
      | Add4          |                 | "2022-03-04"      |         |
      | Add6          |                 |                   | RCA     |
      | Add7          | "2013-03-04"    | "2022-03-04"      | RCA     |

  Scenario:
    Given The computers page is opened
    And The user input Add1 in filter field
    And The user click filter button
    Then The Add1 is displaying in computer list


  Scenario Outline: validation errors
    Given The add computer page is opened
    When The user input <computer name>
    And The user <introduced date>
    And The user input <discontinued date>
    And The user click create button
    Then The add computer page is opened
    And The validation message is <error>

    Examples:
      | computer name | introduced date | discontinued date | error                 |
      |               |                 |                   | Required              |
      | Add3          | jdkgfhjk43      |                   | "Date ('yyyy-MM-dd')" |
      | Add5          |                 | 43859734f         | "Date ('yyyy-MM-dd')" |










