
**Installing Cypress**



*   Clone latest build
*   Run ```npm install``` in ```test-automation```

**Running Cypress**



*   Cd to ```test-automation```
*   Run command ```./node_modules/.bin/cypress open ```
*   Click on one of the tests and it should open a new chrome tab controlled by Cypress.
*   It will run through all the tests and asserts described in the file


**Locating Test files**



*   Test files are located in:
   ```cypress/integration```


**Test Automation**


*    createPostTest.js\
      Automated test on creating a new post and add this post to the selected forum category
      
*    displayForumPostTest.js\
      Automated test for a post, including testing on post display, commenting feature, go back to forum page, go back to forum main page
      
*    findStoreUserInput.js\
      Automated test by validating search elements on the page and type and validate a store name

*    forumMainPageFlow.js\
      Automated test to enter all avaliable categories on the forum main page

*    ifStoreDivInFindStoreIsClickable.js\


*    storeAddFormTest.js\
      Automated test for testing add store form

*    storesSearchButtonTest.js\
      Automated test for store search button and check if it will link to the according store info page
