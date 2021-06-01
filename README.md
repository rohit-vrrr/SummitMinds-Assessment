
# SummitMinds-Assessment
## Problem Statement:
**Given JSON Dataset of Nobel Prize winners, create a program which will load the information from the JSON file (see the link below) and allow a user to:**
1. Search a Nobel prize winner by name

2. Find out Nobel prize winner in a year input by him

3. Search Prize winner based on the year and category (Peace/Chemistry/Physics etc...)

4. Show a list of all Winners in Alphabetical order (With year and category against the name)

**Link to the data:**
**https://drive.google.com/open?id=1udrhAEPkI0F2IFfcHa9qcpDmdoLFGMST**

**Expected outcome:**
-   You can use any programming language (Java/Python/JavaScript).
-   You can download the data and store it locally in your program.
-   Build 4 APIs / services for each of the operations listed above.
-   Check in the code in GitHub and send us the link to the repository.
-   Optional: Write unit tests for the code if time permits.
-   Document the instructions to run and execute the code.

## Instruction to run:
**NPM Packages**
***express***
***dotenv***
***lodash***
***nodemon***
***mocha***
***chai***

**Steps:**
1. Install the dependencies
```javascript
npm install
```
2. Optional: Create a ".env" file and give the PORT number to run the server on that port. (Default PORT: 3000)
```javascript
PORT=3000
```
3. To start the server locally
```javascript
npm start
```
4. To run the test cases
```javascript
npm test
```

**Nobel Prize APIs:**
To search a Nobel Prize winner by name
GET: <http://localhost:3000/searchbyfirstname/{fname}>

To find out Nobel Prize winners in a year
GET: <http://localhost:3000/searchbyyear/{year}>

Search Nobel Prize winner based on the year and category
Replace the year and category fields
GET: <http://localhost:3000/search/?year=2018&category=physics>

To retrieve all winners in alphabetical order along with year and category
GET: <http://localhost:3000/showall>


**I thank SummitMinds for this opportunity**
