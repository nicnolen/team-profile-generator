# Team Profile Generator

![MIT License](https://img.shields.io/badge/license-MIT-important)

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [License Section](#license)

- [Testing](#testing)
- [Contact Me](#contact-me)

## Description

An application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Installation Instructions

### node.js installation

Make sure that you have node.js installed on your computer by entering node -v in the command line. If successful, the command prompt will return a version number. If not, try reinstalling Node.js by following this link: https://nodejs.org/en/ and clicking on the LTS version. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)`

### Clone the code

Once node.js is downloaded, click on the green code button and copy the link to this repository. Then open up your favorite code editor and open the terminal. In the terminal use `cd` to go to the root directory you want this repository to be cloned to. Finally, in the terminal, type `git clone <file link>` to clone this repository to your directory.

### Inquirer

You must also install the Inquirer npm package to see the portfolio. Since Inquirer is an npm package instead of being built directly into node.js, you must type `npm init` into the command line to allow npm packages to be installed. Next, go to the app.js file, and in the command line, type `npm install inquirer` to install Inquirer on your computer. For documentation on Inquirer or other npm packages, follow this link: https://www.npmjs.com/ and type the npm you want to search in the search bar.

## Usage Instructions

When you first clone the code and open the index.js file, you should see the same folders and code as shown below.

![index.js Code](https://user-images.githubusercontent.com/88728912/150366892-b07339f3-412b-4f56-9244-39cc8925832a.png)

1. To create a new team profile, type node index into the command-line and you will be prompted with a series of questions.

2. The first question will ask for the name of the team manager. Type the name of the team manager in the command-line and press enter. Repeat this process for the rest of the questions. DO NOT PRESS ENTER UNTIL YOU ARE READY TO MOVE ON. Pressing enter saves the response and returns the next question. Once the response is saved, you cannot go back and edit it, however, once the team profile is generated, you can edit the content in your code editor by opening the `index.html` file in the `dist` folder.

3. After answering the manager questions, you will be prompted to enter the role of the new employee. Use the arrow keys on your keyboard to select the correct role for the employee. The role that will be selected will be highlighted in blue. When the correct role is highlighted, press enter and you will be prompted with questions corresponding to that role.

  ![Role Selection Prompt](https://user-images.githubusercontent.com/88728912/150386915-78db4f4a-d8a1-44ee-820b-6b2bbd098052.png)

4. After answering the questions about the first employee, the command line will prompt you with a question asking if you want to add more employees. 

  ![add-members](https://user-images.githubusercontent.com/88728912/150388998-391534a2-8d30-4afe-a78e-ada8a070e3c9.png)

  The default answer is no, so if you do not want to add any more employees, simply hit enter on the keyboard and your team portfolio will be generated. If you would like to add   more employees, type `yes` in the command-line and press enter and follow steps 1-4 until you have added all the employees.

5. Once all the questions have been answered, you should be prompted with a message that says "Your team profile has been created successfully! Check out index.html to see the output!" in the command line.

  ![New Profile Message](https://user-images.githubusercontent.com/88728912/150387200-3035eecb-5de1-4575-b8f6-5abc3e3170dc.png)

  You can now check out your new team profile by going to the explorer tab in your code editor located in the top-left corner of the side bar, clicking on the `dist` folder and   clicking on the new `index.html` file.

  ![New HTML File Created](https://user-images.githubusercontent.com/88728912/150387338-ad02b93c-0395-4457-b14a-6dbdc1a2c923.png)

  After opening the file, the code should look similar to the screenshot below.

  ![html-code](https://user-images.githubusercontent.com/88728912/150387659-02c3041c-7a68-4979-8826-a2bcd74a0386.png)

  You can now make changes to the file if you wish.

6. When you are done making changes, add and commit your team profile using `git add -A` and `git commit` and push the team profile to the correct repository using `git push origin main`.

7. To open the file in your default browser, right click and select `open in default browser`. The finished team profile should look similar to the screenshot below.

  ![html-page](https://user-images.githubusercontent.com/88728912/150387886-a01a22ab-7352-4463-a63f-680cc578182f.png)

### Visual Walkthrough

For a visual walkthrough about how to create the team profile, click on the link: https://watch.screencastify.com/v/b3qf8xvID1U0s7ONL8SJ

## License

Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

## Tests

If you would like see how the current tests work, type `npm test` in the command line. After running the `npm test` command, you should see a bunch of passing tests in the command line as shown below.

![success-tests](https://user-images.githubusercontent.com/88728912/150388463-6936d7df-a706-45de-bd5f-efc938e457a5.png)

## Contact Me

GitHub Link: (https://github.com/nicnolen)<br>
Email Address: <nicnolen@ymail.com>
