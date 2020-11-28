# CS 160 Project PokeBoba

## Introduction
PokeBoba is a social networking application for milk tea enthusiasts who want an organized
platform to connect with others and to obtain information regarding milk tea drinks.

## Pre-requisite
Install nodeJS and npm

## Getting Started
Download the whole project from github repo, type the following in command line:
```
git clone https://github.com/StevenvL/2020-Fall-CS-160-Team-Lake-Laogai
```

Frontend (Port: 3000) and Backend server (Port: 8000) are implemented separately, install all dependencies by:
```
cd <frontend/backend>
npm install
```
Starting react/nodeJS server:
```
cd <frontend/backend>
npm start
```

## Project Architecture 
```
root
|_frontend
  |_src (stores index and components, we could organized them to different sub folder)
    |_index.js      (Root for rendering the application, No need to modify on this)
    |_App.js        (Render view according to the route)
    |_ConnectionTest.js
    |_components
      |_FilterButton.js    
      |_FormComponent.js   
      |_ForumComponetForms.js
      |_InputLabel.js
      |_MenuCardCompont.js
      |_RatingStarOff.js
      |_SearchSuggestion.js
      |_StoreRating.js
      |_UserInput.js
    |_pages
      |_AddStore.js
      |_Blogs.js
      |_CreatePost.js
      |_FindStore.js
      |_ForumPost.js
      |_ForumPosts.js
      |_Forums.js
      |_Header.js
      |_Home.js
      |_Login.js
      |_Owner.js
      |_SignUp.js
      |_StoreView.js
  |_Dockerfile
  
|_backend
  |_app.js
  |_sql_conn.js  (creating connection to sql and sql login information)
  |_routes (control routing)
    |_users.js (in charge of all CRUD operation related to user)
    |_stores.js
    |_index.js
    |_forums.js 
  |_Dockerfile

|_test-automation
  |_integration
    |_createPostTest.js
    |_displayFindStorePage.js
    |_displayForumPostTest.js
    |_findStoreUserInput.js
    |_store-add-form.spec.js
  
```

## Useful Resources
ExpressJS and MySQL connection setup example
```
https://github.com/bezkoder/nodejs-express-sequelize-mysql
```

## Testing
 
### Installing Cypress
Clone latest build
Run ```npm install``` in ```test-automation```

### Running Cypress
Cd to ```test-automation```
Run command ```./node_modules/.bin/cypress open ```
Click on one of the tests and it should open a new chrome tab controlled by cypress.
It will run through all the tests and asserts described in the file
