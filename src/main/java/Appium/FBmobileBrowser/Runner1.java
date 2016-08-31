package Appium.FBmobileBrowser;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\phani\\appium\\FBmobileBrowser\\src\\FB.Feature", plugin = {"pretty", "html:target/cucumber"})
public class Runner1 {

}



