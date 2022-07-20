
# Week 3 Assignment: Life Tracker

Submitted by: VERNON OWENGA OTIENO

Deployed Application: [Lifetracker Deployed Site](https://lifetracker-vernon.herokuapp.com)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button. 
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [x] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [x] The detailed activity page should display a feed of all previous tracked activities.
- [x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [x] The activity tracked should be given a unique id for easy lookup.
  
  * [Table Schema](https://github.com/thismustbevernon/lifetracker-starter/blob/main/backend/lifetracker-schema.sql) 

### Stretch Features

Implement any of the following features to improve the application:
- [x] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [x] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [x] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [x] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video



`ADD_EMBEDDED_CODE_HERE`

![](https://media.giphy.com/media/dhs1wzVRBK5zO6d224/giphy.gif)



### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

[The topic most important was setting up database and sql practice. I felt unprepared to do the user authentifcation]

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
[If I had more time I would have implemented functionalty of the activity page]

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

[During the demo, I experienced a bit of a challenge when my code broke just before the presentation, But I managed to fix it after]

### Open-source libraries used

- Add any links to open-source libraries used in your project.
https://vitejs.dev/guide/#scaffolding-your-first-vite-project
https://mui.com/


### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

[Special Shoutout To Nicholas, Beck and Moe who have been resourceful throughout the entire program]


