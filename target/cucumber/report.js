$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/phani/appium/FBmobileBrowser/src/FB.Feature");
formatter.feature({
  "line": 1,
  "name": "Create an account in FB",
  "description": "",
  "id": "create-an-account-in-fb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Launch FB and browse",
  "description": "",
  "id": "create-an-account-in-fb;launch-fb-and-browse",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the appium webdriver",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the \"create new account\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user should be able to enter FirstName and enter the \"\u003cFirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user should be able to enter LastName and enter  \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user should be able to enter email and enter the \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user should be able to enter gender and enter the \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user should be able to enter dd and enter \"\u003cdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user should be able to enter mm and enter  \"\u003cmm\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to enter YYYY and enter \"\u003cYYYY\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user should be able to enter password and enter the \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user got \"signup\" and logged in to account",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user should be able to navigate on the FB home page to update the contacts \"sync\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the user should be able to \"logoff\"",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-an-account-in-fb;launch-fb-and-browse;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "email",
        "gender",
        "dd",
        "mm",
        "YYYY",
        "password"
      ],
      "line": 20,
      "id": "create-an-account-in-fb;launch-fb-and-browse;;1"
    },
    {
      "cells": [
        "Mike",
        "Donald",
        "testappium1@gmail.com",
        "male",
        "02",
        "06",
        "1987",
        "jaisairam1\u003d"
      ],
      "line": 21,
      "id": "create-an-account-in-fb;launch-fb-and-browse;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Launch FB and browse",
  "description": "",
  "id": "create-an-account-in-fb;launch-fb-and-browse;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the appium webdriver",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the \"create new account\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user should be able to enter FirstName and enter the \"Mike\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user should be able to enter LastName and enter  \"Donald\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user should be able to enter email and enter the \"testappium1@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user should be able to enter gender and enter the \"male\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user should be able to enter dd and enter \"02\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user should be able to enter mm and enter  \"06\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to enter YYYY and enter \"1987\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user should be able to enter password and enter the \"jaisairam1\u003d\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user got \"signup\" and logged in to account",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user should be able to navigate on the FB home page to update the contacts \"sync\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the user should be able to \"logoff\"",
  "keyword": "And "
});
formatter.match({
  "location": "Fbsignup.the_appium_webdriver()"
});
formatter.result({
  "duration": 26846157,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: A new session could not be created. (Original error: Requested a new session but one was in progress) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 17 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027NISUM-P3L2R15\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:36)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:114)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:132)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:92)\r\n\tat Appium.FBmobileBrowser.Fbsignup.the_appium_webdriver(Fbsignup.java:31)\r\n\tat ✽.Given the appium webdriver(C:/phani/appium/FBmobileBrowser/src/FB.Feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "create new account",
      "offset": 24
    }
  ],
  "location": "Fbsignup.the_user_clicks_on_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mike",
      "offset": 58
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_FirstName_and_enter_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Donald",
      "offset": 54
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_LastName_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testappium1@gmail.com",
      "offset": 54
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_email_and_enter_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 55
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_gender_and_enter_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 47
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_dd_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "06",
      "offset": 48
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_mm_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1987",
      "offset": 45
    }
  ],
  "location": "Fbsignup.user_should_be_able_to_enter_YYYY_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jaisairam1\u003d",
      "offset": 57
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_enter_password_and_enter_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signup",
      "offset": 14
    }
  ],
  "location": "Fbsignup.the_user_got_and_logged_in_to_account(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sync",
      "offset": 80
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to_navigate_on_the_FB_home_page_to_update_the_contacts(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "logoff",
      "offset": 28
    }
  ],
  "location": "Fbsignup.the_user_should_be_able_to(String)"
});
formatter.result({
  "status": "skipped"
});
});