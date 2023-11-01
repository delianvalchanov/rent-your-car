# Rent Your Car
Rent Your Car is a project, based on an idea to create a website, where private owners of cars can offer them for rent, when they aren`t using their vehicle. 

## Project Description
### The project offers two main benefits for owners and users:
1. Owners can earn funds from a vehicle, which they aren`t using at the moment;
2. Users can easily find a vehicle, for the time they need a transport;

### Main functionalities:
* Owners
  * Have full access to article`s Details and Catalog
  * Can create their own articles
  * Can edit or delete their own articles
  * Can rent other owner`s cars
* Logged-in users
  * Have full access to article`s Details and Catalog
  * Can create their own articles
  * Can rent other owner`s cars
* Guest users
  * Only have access to Home page
  * When attempting to access Catalog, they are rerouted to Login
  * Can register their account
    
### Server
The project is currently using SoftUni Practice Server. <br />
Server is initialized with 3 users, that you can use: <br />
peter@abv.bg : 123456 <br />
george@abv.bg : 123456 <br />
admin@abv.bg : admin <br />

### RESTful API and Authentication
* The project is using requster to make API calls to server
* All CRUD operations are done by service factory and called by article context, which then can be used in components
* Authentication is done by authentication factory and called by authentication context, which then can be used in components

### Form control and clint-side data validation
* For for control is used useFormik hook
* For data validation are used Yup schemas

### Notifications
All notifications and alerts are displayed using react toasters

## Built with:
* [React.js](https://react.dev/)
* HTML5 + CSS3 modules
* [Formik and Yup](https://formik.org/)
* [React-Bootstrap](https://react-bootstrap.netlify.app/)
* [React router](https://reactrouter.com/en/main)
* [React toasters](https://react-hot-toast.com/)
* [React date-range picker](https://mui.com/x/react-date-pickers/date-range-picker/)

## Getting started:
The project has two main folders:
* The project folder
* The SoftUni practice server folder
  
### Project initialization
* Go in rent-your-car folder
```properties
cd rent-your-car
```
* Install all dependancies
```properties
npm install
```
* Start project
```properties
npm start
```
You can open your project in your browser via localhost on port 3000

### Server start
* Go in server folder
```properties
cd server
```
* Start server
```properties
node server.js
```
## Usage
* After starting the project, catalog will be empty, and after every session will clear collections and newly registered users
* State is persisted in Local Storage
* Catalog ->
  * Contains different articles, that users have created
  * Here can create a new article with your user
  * In each article you can see this information: the owner(not finished), rating of the article(not finished), fuel and body type
* Article ->
  * Each article has details, where full info about vehicle is found. 
  * If owner, in details you can edit or delete your vehicle
  * If selected "Drive" you will have to choose the period for renting, and after final price is calculated, to confirm your choice

## Further development:
* Adding validation on client-side on Edit form(need to fix bug with reinitializing Initial Values in formik, when data is successfully fetched from server)
* Sending data from article`s rating to server and adding a feature to sort by rating
* Creating section with "latest articles" in Home page
* Adding search in Catalog
* Role based authorization, depending on is owner or user
* Adding Google-maps API to select location of owner`s vehicles
* Adding translation feature, using i18next
* And many others...
