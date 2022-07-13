# Overview
Outfitter, is a Twitter clone, but focuses on the sharing of sneakers, streetwear, and anything fashion related. 

https://outfitteralex.herokuapp.com/

![Outiftter Splash](https://user-images.githubusercontent.com/92739573/178652201-72c36fe9-a9f0-46ff-86ef-f105db211f3c.png)

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
![Screen Shot 2022-05-23 at 2 06 18 AM](https://user-images.githubusercontent.com/92739573/169784767-31942f33-1f3e-439e-b133-6db0469e1d80.png)


### Replies
Users can reply to posts on their Outfitter timeline
![Screen Shot 2022-05-23 at 2 07 17 AM](https://user-images.githubusercontent.com/92739573/169784927-890d1d2b-d599-4b84-a6e7-8380e0f624c1.png)


## Link to Wiki Docs
https://github.com/AlexanderSMin/outfitter/wiki

