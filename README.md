# Short Selling Exemptions Tracker 

# About the Project 
The short-selling exemptions tracker is a Single Page Appllication that allows users to keep a track of shares in which a Market Making exemption request has been applied for. It futher allows the user to add, delete, download, and search functionality. 


# Getting Started 
Ensure that the following dependencies are readily avaiable within your system: 
- Ruby 2.6.1p33 
- Github 
- React 17.0.1 
- Rails 6.0.3.4 

# How to use
Create a single folder and inside that folder clone both repos:
git@github.com:Tuki2ki2/mme_backend.git 
git@github.com:Tuki2ki2/short_selling_frontend.git 
Bundle install
Set up the Database - recommended to use a csv parser to mass input a list of isins and names into your database
optionally seed the database: rails db:seed
rails db:create
rails db:migrate
Kick start the server - rails s. Ensure this happens first, otherwise the data will not be shown on the page
cd mme_backend
npm install 
npm start
This will open in your browser.

# License 
Please see the license page. 


