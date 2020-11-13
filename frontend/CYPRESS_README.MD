
**Installing Cypress**

*   cd to ```frontend``` folder
*   Run command
    *   ```npm install cypress```

**Setting up Cypress**



*   Open ```package.json```
    *   Add to ```“scripts” { }``` json object this line below
        *   ```“cypress” : “cypress open”```
*   In a new terminal tab run the command
    *   ```npm run cypress```
*   ```cypress``` folder should be created in the ```frontend``` folder
*   All tests should be under the ```integration``` folder
    *   The files to be run must end with ```‘.spec.js’```
