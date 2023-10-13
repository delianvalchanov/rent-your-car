# rent-your-car
Website, designed for people to share their cars with others

Strating the project:
In the project repo there are two main folders
1. The project
2. The softuni practice server

To start the project: 
1. Go in rent-your-car folder
2. Install all dependancies
3. Run npm start

To start the server:
1. Go in server folder
2. Run node server.js

After starting the project, catalog will be empty, and after every session will clear collections and users (it`s practice server)

Server is initialized with 3 users, that you can use:
peter@abv.bg : 123456
george@abv.bg : 123456
admin@abv.bg : admin



User acitons -> Login, Register, Logout

Authorization states -> 
1.Logged in user: Can add new articles in catalog, can see article`s Details, can rent car from the selected article.
2.Logged in, owner:  If the user is owner, when Details of his article is rendered, is able to EDIT or DELETE the article
3.Guest: Can only view catalog's list of articles and main pages

Catalog -> 
1.Contains different articles, that users have created
2.Here can create a new article with your user
3.In each article you can see this information: the owner(not finished), rating of the article(not finished), fuel and body type

Article ->
1. Each article has details, where full info about vehicle is found.
2. If owner, in details you can edit or delete your vehicle
3. If selected "Drive" you will have to choose the period for renting, and after final price is calculated, to confirm //-> Drive modal is not finished
