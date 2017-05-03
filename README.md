Developer Workshop 1
------------------

Building a responsive web app and a RESTful API with Node.js and MongoDB

Author: Dywayne Johnson - Full-Stack Developer of mobile-optimized web apps, hybrid native apps, APIs, and databases

Email: djohnsonkc@gmail.com


Agenda
--------------

In this workshop, we’ll use Node to build a responsive, mobile-friendly Web app that serves web pages, exposes a RESTful API and persists data to a MongoDB database - all in the cloud, all for free! For the web pages, we’ll use a couple of Bootstrap themes and jQuery to make AJAX calls to our RESTful API. We’ll create a source code repository at GitHub.com and we’ll use Git to push changes to our source code repository. We’ll also use Git to deploy our app to Heroku, which will make our app publicly accessible in the cloud. For a working example of what we will be building, go to http://djohnsonkc-node-workshop1.herokuapp.com/

Preparation
--------------

- Create a free user account at GitHub.com (for source control) 
- Create a free user account at Compose.io (for hosting our MongoDB database) 
- Create a free user account at Heroku.com (for hosting our app)
- Install Node.js (http://http://nodejs.org)
- Install Git (http://git-scm.com/downloads)
- If using Windows, TortoiseGit is an additional tool that you can use to enable easy right-click features to check in your code and push it to your repository: https://code.google.com/p/tortoisegit/


Things that we will be discussing (not necessarily in this order)
--------------


- Configuring our app to connect to our MongoDB database
- Using models in our app as well as the MVC (model-view-controller) design pattern
- Limiting the properties revealed in our models
- MongoDB documents, nested child documents, indexing and more...
- Creating our own reusable library functions
- Using constants in our app
- Setting up our public directory for pages and other publicly-accessible assets
- Generating a Procfile for deployment to Heroku
- Generating a package.json file for deployment to Heroku 
- Putting it all together with app.js
- Installing and using third-party Node modules
- Use of console.log() for debugging
- Server-side data validation using mongoose features
- REST as an architectural style/design pattern and HTTP verbs
- How NoSQL, MongoDB in particular, differs from a relational database


Create a MongoDB database
--------------

- At Compose.io, create a new database called “workshop1”
- Add a new user to our database (see Admin, Users tab)


Setting up our local project workspace
--------------

We’ll use Git to create a local copy of a repository on GitHub. This will provide a fully functional example of the project that will run locally and we can start with and make enhancements to.

- Create a local project directory as our workspace - (e.g. C:\sites\node.js for PC, documents/dev/nodejs for Mac)
- Create a fork of https://github.com/djohnsonkc/workshop1 (for more info on forking see: https://help.github.com/articles/fork-a-repo)
- Git clone https://github.com/your-username/workshop1.git. This will create a new workshop1 folder with the source code.
- Install Node modules. Note, the first npm install will create a /node_modules directory within your project workspace. These typically aren't included in the repository as they can be easily reinstalled locally as needed (see .gitignore file in app root).
	- npm install express
	- npm install mongoose
	- npm install moment
	- npm install body-parser




Now, let’s open the source code and start writing some of our own code!
--------------

More info coming soon! This is where we'll make enhancements to the project, test the changes locally and check the changes into a new branch/fork of the repository. 

1. Making changes to our app and testing them locally 
	- change config/database.js to correct MongoHQ account
2. Committing our changes to our GitHub repository using Git commands
3. Deploying our app to Heroku using Git commands


Our app will serve these web pages (with SEO-friendly routes/URLS)
--------------

- http://localhost:3000/  
- http://localhost:3000/register
- http://localhost:3000/login
- http://localhost:3000/api-demo

Our app will serve these RESTful API methods/endpoints
--------------

These API endpoints provide a way to POST user credentials 
- POST /api/v1/accounts/register
- POST /api/v1/accounts/login

These are the more common CRUD methods (note: POST /v1/accounts is replaced by /api/v1/accounts/register)
- GET /api/v1/accounts/ 
- GET /api/v1/accounts/:id 
- PUT /api/v1/accounts/:id
- DELETE /api/v1/accounts/:id



You can access these endpoints from your browser (since they respond to GET requests). The POST, PUT and DELETE endpoints must be called from script. The Google Chrome extension "Postman - REST Client" may become your best friend for testing API methods locally. We'll explore the use of jQuery for POST, PUT and DELETE in this workshop.

- http://localhost:3000/api/v1/accounts
- http://localhost:3000/api/v1/accounts/{some id here}



Suggestions for Continued Learning After the Workshop
--------------

- Using a Heroku environment variable for our MongoHQ connection string so that it isn't managed in our code
- Adding unit tests for the Node.js app is an area of importance. There are many choices for unit testing tools. Mocha seems to be a popular Node module
- AngularJS is becoming a popular framework for front-end development, and supports unit testing (http://angularjs.org/). Follow the tutorial under Learn/Tutorial. This may be covered in our next workshop.
- Try other Node modules (tip: delete your Procfile and run "npm init" to recreate it and include new node module references)
- Improve on the password one-way hash by adding salt (we do this so that we obfuscate the password as much as possible to help prevent a hacker from obtaining account holder passwords)
- Check out Yeoman.io (http://yeoman.io/) for app scaffolding


Topics for our next workshop(s)
--------------

- Leverage other mongoose features such as limiting the collection properties that are returned (e.g. suppress password from API results)
- Use ejs and ejs-locals Node modules to create HTML templates that allow us to share and reuse common layouts and partials (i.e. common headers, footers)
- Use of JWTs (pronounced "jots") to secure your API endpoints and data using JSON Web Tokens. Return an access_token in our register and login API methods and require an x-access-token in the request header for subsequent API calls in order to protect our data.
- Replace jQuery AJAX calls and DOM manipulation with AngularJS
- Add salt to our password hash
- Using Postman to test API methods locally
- Use of free SSL provided by Heroku to secure my app using https as well as SSL adon-ons provided by Heroku to secure your own domain.
- Use of Apigee to proxy our API endpoints (security, throttling, etc.)
- Use of the async Node module to avoid "callback hell"








