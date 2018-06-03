Feature: Update Computer
  As a user of a computers app
  I would like access to basic update computer functionality
  So that I can update a computer

  Scenario: Update computer page displaying
    Given The computers page is opened
    When The user click add new computer button
    And The user input "Update1" to the computer name
    And The user click create button
    And The user input "Update1" to the filter field
    And The user click filter button
    And The user click on the first computer in computer list
    Then Open the update computer page
    And The computer name is "Update1"

  Scenario: Cancel updating a computer name
    Given The computers page is opened
    When The user click add new computer button
    And The user input "Update2" to the computer name
    And The user click create button
    And The user input "Update2" to the filter field
    And The user click filter button
    And The user click on the first computer in computer list
    And The user input "Update2Modified" to the computer name
    And The user click cancel button
    Then Open the computers page


  Scenario Outline: successfull updates
    Given The computers page is opened
    When The user click add new computer button
    And The user input <computer name> to the computer name
    And The user click create button
    And The user input <computer name> to the filter field
    And The user click filter button
    And The user click on the first computer in computer list
    When The user input <modified computer name> to the computer name
    And The user input <introduced date> to the introduced date
    And The user input <discontinued date> to the discontinued date
    And The user select <company> to the company
    And The user click create button
    Then Open the computers page
    And The confirmation message is "Done! Computer <modified computer name> has been updated"

    Examples:
      | computer name | introduced date | discontinued date | company | modified computer name   |
      | "Update3"     |     ""          |        ""         |   ""    | "Update3Modified"        |
      | "Update4"     | "2022-03-04"    |       ""          | ""      | "Update4"                |
      | "Update5"     |    ""           | "2022-03-04"      | ""      | "Update5"                |
      | "Update6"     |    ""           |       ""          | "RCA"   | "Update6"                |
      | "Update7"     | "2013-03-04"    | "2022-03-04"      | "RCA"   | "Update7Modified"        |


  Scenario Outline: validation during updating
    Given The computers page is opened
    When The user click add new computer button
    And The user input <computer name> to the computer name
    And The user click create button
    And The user input <computer name> to the filter field
    And The user click filter button
    And The user click on the first computer in computer list
    And The user input <modified computer name> to the computer name
    And The user input <introduced date> to the introduced date
    And The user input <discontinued date> to the discontinued date
    And The user click create button
    Then Open the update computer page
    And The validation message is <error>


    Examples:
      | computer name   | introduced date | discontinued date | modified computer name | error                 |
      | "Update8"       |     ""          |      ""           |    ""                  | "Required"            |
      | "Update9"       | "jdkgfhjk43"    |      ""           | "Update9"              | "Date ('yyyy-MM-dd')" |
      | "Update10"      |     ""          | "43859734f"       | "Update10"             | "Date ('yyyy-MM-dd')" |
      | "Update11"      | ""              | "0000-00-01"      |      "Update11"        | "Date ('yyyy-MM-dd')" |
      | "Update12"      | "2014-13-32"    | ""                | "Update12"             |"Date ('yyyy-MM-dd')"  |
      | "Update13"      | "20114-13-32"   | ""                | "Update13"             |"Date ('yyyy-MM-dd')"  |
      | "Update14"      | ""              |     "14-13-32"    | "Uodate14"             |"Date ('yyyy-MM-dd')"  |
      | "Update15"      | "302--12--12"   |     ""            | "Update15"             |"Date ('yyyy-MM-dd')"  |
      | "Update16"      | ""              |   "2014-02-32"    | "Update16"             |"Date ('yyyy-MM-dd')"  |






