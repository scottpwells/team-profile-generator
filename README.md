# Team Profile Generator
  
  ![github](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 

![team-profile-generator](https://user-images.githubusercontent.com/57837212/98756313-500d9280-2398-11eb-8584-f4fd936cd38b.PNG)


  ## Description
  Team Profile Generator is a cli application that allows a engineering leader of a team to build out a html page with
  his or her team members information by inputing in each team members name, employee ID, email, and either a office number for a manager, 
  or Github user name for an engineer, or the name of the school attended by the intern into a series of prompts. Once all the prompts are answered.
  the data is then written to the team.html page and when a user opens a browser. Then all of the leaders team member information is displayed on the web page.


  ## Installation
   1. Run npm init -y
   2. npm install inquirer jest
   3. from the root run node index.js
   4. Insert your manager information
   5. Add any combination of engineers and interns by answering the prompts
   6. When you have entered in the last employee. use the  navigate arrow to navigate to done and hit enter
   7. Finally open team.html and right click and open the browser 
   8. Your team will be displayed on the screen

  ## Usage
  As a engineering leader I want a cli application that allows me to enter in a manager name, manager email, manager ID, manager office number
  ,engineer name, engineer ID, engineer email, engineer Github username, intern name, intern ID, intern email, and intern School name into
  a series of prompts and when I am done. Then the data should be written into a html file. Then my teams information should be displayed on a web page.
  

  ## Contributing
  Pull requests and stars are always welcome. For bugs and feature requests, please submit a GitHub [issues](https://github.com/scottpwells/team-profile-generator/issues)

  ## Tests
  npm run test  at root to validate employee.test.js, engineer.test.js, intern.test.js, and manager.test.js
  
  ## Questions
  For any questions please contact me by email: scottpwells@gmail.com or github.com/scottpwells
