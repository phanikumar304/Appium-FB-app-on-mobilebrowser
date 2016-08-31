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

//Entering User FirstName
	@Then("^the user should be able to enter FirstName and enter the \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_FirstName_and_enter_the(String firstname) throws Throwable {
	   System.out.println(firstname);
	   driver.findElement(By.xpath(".//*[@id='u_0_0']/input")).sendKeys(firstname);
	}
	//Entering User LastName
	@Then("^the user should be able to enter LastName and enter  \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_LastName_and_enter(String lastname) throws Throwable {
		System.out.println(lastname);
		driver.findElement(By.xpath(".//*[@id='u_0_1']/input")).sendKeys(lastname);
	}
	//Entering User emailID
	@Then("^the user should be able to enter email and enter the \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_email_and_enter_the(String email) throws Throwable {
		System.out.println(email);
		driver.findElement(By.xpath(".//*[@id='u_0_2']/input")).sendKeys(email);
	}
	//Entering User Gender
	@Then("^the user should be able to enter gender and enter the \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_gender_and_enter_the(String gender) throws Throwable {
		System.out.println(gender);  
		Select gender1 = new Select(driver.findElement(By.xpath(".//*[@id='sex']")));
		gender1.selectByValue("2");
	}
	//Entering User DOB-Month
	@Then("^the user should be able to enter dd and enter \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_dd_and_enter(String mm) throws Throwable {
		System.out.println(mm); 
		driver.findElement(By.xpath(".//*[@id='birthday_month']")).sendKeys(mm);
	}
	//Entering User DOB-Date
	@Then("^the user should be able to enter mm and enter  \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_mm_and_enter(String dd) throws Throwable {
		System.out.println(dd);  
		driver.findElement(By.xpath(".//*[@id='birthday_day']")).sendKeys(dd);
	}
	//Entering User DOB-Year
	@Then("^user should be able to enter YYYY and enter \"([^\"]*)\"$")
	public void user_should_be_able_to_enter_YYYY_and_enter(String YYYY) throws Throwable {
		System.out.println(YYYY); 
		driver.findElement(By.xpath(".//*[@id='birthday_year']")).sendKeys(YYYY);
	}
	//Entering User account password creation
	@Then("^the user should be able to enter password and enter the \"([^\"]*)\"$")
	public void the_user_should_be_able_to_enter_password_and_enter_the(String password) throws Throwable {
		System.out.println(password); 
		driver.findElement(By.xpath(".//*[@id='u_0_3']/input")).sendKeys(password);
	}
    //Clicking signup button
	@When("^the user got \"([^\"]*)\" and logged in to account$")
	public void the_user_got_and_logged_in_to_account(String singin) throws Throwable {
		driver.findElement(By.xpath(".//*[@id='signup_button']")).click();
	}

	@Then("^the user should be able to navigate on the FB home page to update the contacts \"([^\"]*)\"$")
	public void the_user_should_be_able_to_navigate_on_the_FB_home_page_to_update_the_contacts(String sync) throws Throwable {
		
	}

	@Then("^the user should be able to \"([^\"]*)\"$")
	public void the_user_should_be_able_to(String logout) throws Throwable {
		//driver.quit();	
	}
}
