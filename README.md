# Portfolio Website
Take a look at the React source code for my portfolio website.<br>
You can see the site in action at [mattkarwan.com.au](https://mattkarwan.com.au).

[![image](https://user-images.githubusercontent.com/61034752/123759291-1a0b2780-d903-11eb-9805-5cc173f2dd70.png)](https://mattkarwan.com.au/)

## Installation and Setup

### Install on Local Machine
Clone the repository to your device.<br>
Please note that you will need Node and npm installed globally on your device.

Install the project.<br>
`npm install`

Start the test server:<br>
`npm start`

Visit the app at the following URL:<br>
`localhost:3000/`

### Enable Contact Form Functionality
In order for the contact form to work, you will need to provide credentials from [EmailJS](https://www.emailjs.com/) and [reCaptcha](https://www.google.com/recaptcha/about/).

In the project's `src` folder, open `Keys.js` in a text editor.
Here, you will need to enter your `Service ID`, `Template ID` and `User ID` from your EmailJs account.
Below this you will need to enter a reCaptcha v2 `Site Key`.
