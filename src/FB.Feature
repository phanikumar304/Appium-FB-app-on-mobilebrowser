Feature: Create an account in FB

  Scenario Outline:Launch FB and browse
  
    Given the appium webdriver
     When the user clicks on the "create new account"
     Then the user should be able to enter FirstName and enter the <FirstName>
     And the user should be able to enter LastName and enter  <LastName>
     And the user should be able to enter email and enter the <email>
     And the user should be able to enter gender and enter the <gender>
     And the user should be able to enter dd and enter <dd>
     And the user should be able to enter mm and enter  <mm>
     And  user should be able to enter YYYY and enter <YYYY>
     And the user should be able to enter password and enter the <password>
     When the user got "signup" and logged in to account
     Then the user should be able to navigate on the FB home page to update the contacts "sync"
     And the user should be able to "logoff"
  
    Examples: 
      | FirstName  | LastName | email                 | gender | dd | mm | YYYY | password    | 
      | Mike | Donald     | testappium1@gmail.com | male   | 02 | 06 | 1987 | jaisairam1= | 
