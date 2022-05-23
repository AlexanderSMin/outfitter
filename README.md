# Overview
Outfitter, is a Twitter clone, but focuses on the sharing of sneakers, streetwear, and anything fashion related. 

https://outfitteralex.herokuapp.com/


## Application Breakdown
**Frontend:**

* React 
* Redux 
* Javascript 
* HTML 
* CSS 

**Backend**

* Flask
* Python
* PostreSQL
* SQLAlchemy


## Setup
1. Clone the repository: https://github.com/AlexanderSMin/outfitter.git
2. Install dependencies: pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
3. Create .env file (use .env.example) as reference
4. Create PostgreSQL Database, User, and Password matching the .env file
5. In pipenv: migrate database, seed database, and run flask app
* Helpful Commands: 
*  pipenv shell
*  flask db upgrade 
*  flask seed all 
*  flask run 

## Features
### Posts
Users can post to their Outfitter timeline for others to see

### Replies
Users can reply to posts on their Outfitter timeline

## Link to Wiki Docs
https://github.com/AlexanderSMin/outfitter/wiki

