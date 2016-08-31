/*package Appium.FBmobileBrowser;

import io.appium.java_client.android.AndroidDriver;

import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class FbBrowser {
	
	AndroidDriver driver= null;
	
	@Given("^the appium webdriver$")
	public void the_appium_webdriver() throws Throwable {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("automationName", "Appium");
		capabilities.setCapability("platformName", "Andriod");
		capabilities.setCapability("platformVersion","6.0");
		capabilities.setCapability("deviceName", "Galaxy");
		capabilities.setCapability("app", "Browser");
		capabilities.setCapability("appPackage", "com.android.browser");
		capabilities.setCapability("appActivity", "BrowserActivity");
		driver=new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://m.facebook.com/?refsrc=https%3A%2F%2Fwww.facebook.com%2F&_rdr");
	}

	@When("^the user clicks on the \"([^\"]*)\"$")
	public void the_user_clicks_on_the(String arg1) throws Throwable {
	    driver.findElement(By.xpath(".//*[@id='u_0_0']/div[2]/div/div[2]/a")).click();
	}

	@Then("^the user should be able to click \"([^\"]*)\" and enter the Testappium$")
	public void the_user_should_be_able_to_enter_and_enter_the_Testappium(String arg1) throws Throwable {
	   
	}

	@Then("^the user should be able to enter \"([^\"]*)\" and enter the Test$")
	public void the_user_should_be_able_to_enter_and_enter_the_Test(String arg1) throws Throwable {
	   
	}

	@Then("^the user should be able to enter \"([^\"]*)\" and enter the testappium(\\d+)@gmail\\.com$")
	public void the_user_should_be_able_to_enter_and_enter_the_testappium_gmail_com(String arg1, int arg2) throws Throwable {
	    
	}

	@Then("^the user should be able to enter \"([^\"]*)\" and enter the male$")
	public void the_user_should_be_able_to_enter_and_enter_the_male(String arg1) throws Throwable {
	   
	}

	@Then("^the user should be able to enter \"([^\"]*)\" and enter (\\d+)$")
	public void the_user_should_be_able_to_enter_and_enter(String arg1, int arg2) throws Throwable {
	  
	}

	@Then("^the user should be able to enter \"([^\"]*)\" and enter  (\\d+)$")
	public void the_user_should_be_able_to_enter_and_enter1(String arg1, int arg2) throws Throwable {
	    
	}

	@Then("^user should be able to enter \"([^\"]*)\" and enter (\\d+)$")
	public void user_should_be_able_to_enter_and_enter(String arg1, int arg2) throws Throwable {
	
	}

	@Then("^the user should be able to enter \"([^\"]*)\" and enter the jaisairam(\\d+)=$")
	public void the_user_should_be_able_to_enter_and_enter_the_jaisairam(String arg1, int arg2) throws Throwable {
	   
	}

	@When("^the user got \"([^\"]*)\" and logged in to account$")
	public void the_user_got_and_logged_in_to_account(String arg1) throws Throwable {
	    
	}

	@Then("^the user should be able to navigate on the FB home page to update the contacts \"([^\"]*)\"$")
	public void the_user_should_be_able_to_navigate_on_the_FB_home_page_to_update_the_contacts(String arg1) throws Throwable {
	    
	}

	@Then("^the user should be able to \"([^\"]*)\"$")
	public void the_user_should_be_able_to(String arg1) throws Throwable {
	   
	}
	
}
*/