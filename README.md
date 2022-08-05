# mini_project

* Project title
	- DIT Mini-Project Email validation

* File structure

           ├── mini project
              ├── node_modules
              ├── .env
              ├── .gitignore
              ├── index.js
              ├── package-lock.json
              ├── package.json
              ├── README.md



* Libraries used
    - Express
    - Axios
    - dotenv

•	Step by step process on how to execute the program
1.	At first, we should make sure we have Node.JS installed on our device/computer, npm should come included with Node.JS but to verify, go to the terminal or command prompt and write the command: “npm -v”. 
2.	Then by visiting the GitHub repository for this project, we download the ZIP of the project, this should save the folder of the project to our device/computer.
3.	Then we open the project folder using a code editor, since we first need an API Key for the authentication to work, we visit the following link: https://verifier.meetchopra.com/docs#/ which will provide us with an API Key.
4.	We then go to the project folder and inside the folder create a .env file, inside the .env file we write down: “API_KEY=” and copy and paste the API Key that was provided to us, this should be securely stored.
5.	Then on the terminal, we write the command “npm start” to start the server, this should display: “Listening on 3000” on our terminal.
6.	We then go to a browser and inside the URL field we write down “localhost:3000/?email=” after that we write down an email address we wish to be validated and press “enter”.
•	Below are a few scenarios on how to perform step 6.
Scenario for an invalid email address:
if  betty@fnn.com is the email address I wanted to validate, I would go to a browser and type “localhost:3000?=email=betty@fnn.com” under the URL, if I then clicked on “enter”, it should display the below message since I provided an invalid email.
: {"message":"Email address invalid"}

    Scenario for a valid email address:
    If I type in a valid email address using the above step, then it should display the below message.
    :{"message":"Valid Email"} 

    Scenario for a disposable  email address:
    We can get a temporary/disposable email using for example : https://10minutemail.com/ , then we can copy and paste the provided email on our URL like this:
    localhost:3000?=email= “THE DISPOSABLE EMAIL”
    NOTE: “THE DISPOSABLE EMAIL” is where we place the temporary/disposable email address.

7.	This action should display with an informative message describing the validation performed on the email address we provided.
8.	We can repeat the process of validating emails multiple times to validate different types of email addresses.


* Errors we might encounter when executing this project
    - If we input the wrong API Key in the .env file, the validation would not be performed.
