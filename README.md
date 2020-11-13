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
  
|_backend
  |_app.js
  |_sql_conn.js  (creating connection to sql and sql login information)
  |_routes (control routing)
    |_ users.js (in charge of all CRUD operation related to user)
    |_ stores.js
    |_index.js
    |_forums.js 
  
```

## Useful Resources
ExpressJS and MySQL connection setup example
```
https://github.com/bezkoder/nodejs-express-sequelize-mysql
```


 
