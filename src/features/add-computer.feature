#Feature: Add Computer
#  User would like access to basic add computer functionality
#  So that user can add a computer
#
#
#  Scenario: Add computer page displaying
#    Given The computers page is opened
#    When The user click add new computer button
#    Then Open the add computer page
#    And The element "addNewComputerBtn" is present on computer page
#    And The element "computerNameField" is present on computer page
#    And The element "introducedDateField" is present on computer page
#
#
#  Scenario: Cancel Add a new computer
#    Given The computers page is opened
#    When The user click add new computer button
#    And The user click cancel button
#    Then Open the computers page
#
#  Scenario Outline: successfull adding
#    Given The add computer page is opened
#    When The user input <computer name> to the computer name
#    And The user input <introduced date> to the introduced date
#    And The user input <discontinued date> to the discontinued date
#    And The user select <company> to the company
#    And The user click create button
#    Then Open the computers page
#    And The confirmation message is "Done! Computer <computer name> has been created"
#
#    Examples:
#      | computer name | introduced date | discontinued date | company  |
#      | "Add1"         |         ""      |    ""             |  "RCA"  |
#      | "Add2"         | "2022-03-04"    |    ""             |  "RCA"  |
#      | "Add4"         |         ""      | "2022-03-04"      |  "RCA"  |
#      | "Add6"         |         ""      |    ""             | "RCA"   |
#      | "Add7"         | "2013-03-04"    | "2022-03-04"      | "RCA"   |
#
##  Scenario Outline: validation errors
##    Given The add computer page is opened
##    When The user input <computer name> to the computer name
##    And The user input <introduced date> to the introduced date
##    And The user input <discontinued date> to the discontinued date
##    And The user click create button
##    Then Open the add computer page
##    And The validation message is <error>
##
##    Examples:
##      | computer name | introduced date | discontinued date   | error                 |
##      | ""            |   ""            |       ""            | "Required"            |
##      | "Add3"        | "jdkgfhjk43"    |       ""            | "Date ('yyyy-MM-dd')" |
##      | "Add5"        |    ""           | "43859734f"         | "Date ('yyyy-MM-dd')" |
#
#
#
#
#
#
#
#
#
#
