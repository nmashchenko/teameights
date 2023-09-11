# teameights.com

🦉 This is platform for developers to find each other.
![01](https://user-images.githubusercontent.com/52038455/232286679-bbffa9bc-ff13-4163-b752-a11d68eaed75.png)

# Detailed docs about app:

You can find all required information on how to start app, etc: <br>
https://nice-spectrum-c3b.notion.site/Engineering-docs-cc12492090084962ba37b535e2767fbd

# Diagram

**Services we are going to use to host:** <br>

✨ *Front:* Netlify <br>
✨ *Backend:* Heroku <br>
✨ *Database:* MongoDB automatically hosts it <br>


**Technologies we are going to use:** <br>

✨ *Front:* ReactJS, Redux Toolkit, Styled-Components, Axios, Material UI, React Query  <br>
✨ *Backend:* NestJS, MongoDB, Docker <br>
✨ *Database:* MongoDB <br>
✨ *Codeversions:* Github <br>
✨ *Design:* Figma <br>

**APIs we are going to use:** <br>

✨ Google / Github API for quick login

✨ MongoDB api for database operations

✨ Judge0 API (Docker container) to compile code

# Instructions on how to run:

👋🏻 I recorded a video that explains all functionality and steps:

https://www.youtube.com/watch?v=DXY9KiE8D3w

# What our app currently does?

🎉 By now, users are able to login/register via basic account creation and email validation OR using Google OAuth. After initial registration users are redirected to the finish-registration page that will ask them to provide more personal data about them so we can compose a user profile before allowing him to participate in tournaments/search for *teameights*! After completing registration, user is redirected back to the profiles screen where he will see all of the profiles currently looking for a team on platform, they can view the descriptions, avatars, favorite languages, frameworks, etc. 

🎉 Users can also access team page where they can ONLY access another screen if they press on "create team" button. Also they can view their profiles by clicking on Profile action from the burger menu, it's currently only UI and doesn't allow you to change anything but we are working on it!

# Links to the deployed app

📌 Backend: [Backend](https://teameights-server.herokuapp.com/api/docs)

📌 Frontend: [Frontend](https://app.teameights.com)

# Idea

🎧 Overall idea - platform for student developers (probably skilled also) to find each other and work together on pet projects/real projects from project pool of customers (will be available only for skilled teams), tournaments between them will determine skill level, etc. Also possible mentorship, premium projects, AI code review, etc. basic functionality is described below.

Link for details: https://youtu.be/TrilQtWWmCI

# Why teameights?

If you want to know why teameights.com or team8s.com – I don’t know, I just think this sounds cool =)

# Team
### Devs

🎉 Nikita (*Backend*)
<br>
🎉 Dima (*Frontend*)
<br>
🎉 Dima (*Frontend*)
<br>
🎉 Sergey (*Frontend*)
<br>
🎉 Tolik (*Frontend*)
<br>
🎉 Vova (*Frontend*)

### Design
🎉 Jenifer (*Designer*)


# Questions

**What does your application do?**

_It allows programmers (especially undergrads and lower) to find people with the same mindset to work on projects together, participate in coding tournaments (hackathon in box) and upgrade coding skills_

_Main idea is to add this experience to your resume in addition to internships that you have_

_Hackathon in box will be a unique tournament future described above that will allow teams of 2+ people to work work on different projects together right on the platform (using different APIs we will be able to implement this) and get feedback from real people upon completion of tournaments_

**What makes it different than a CRUD app? I.e., what functionality does it provide that is not just a user interface layer on top of a database of user information, and the ability to view / add to / change that information?**

_First of all we are actually building full stack REST application that is not just a basic operations to be done in a data repository (CRUD). Second, we are planning to use external public APIs (StackBlitz API to generate coding environment and embed it in platform, github API to generate repos, google api to handle OAuth, etc.). We plan to also have our unique tournament evaluation system inside that will determine winners of tournaments based on evaluations_

_As possible extensions to this project we can have an AI implemented on platofrom that will evaluate each team member's performance during the tournament and will give this data to user, etc._

**What security and privacy concerns do you expect you (as developers) or your users to have with this application?**

_As this application might become popular we would definitely should take care of user personal data protection. As we will be collecting a lot of user personal information (including names, ages, emails, locations, etc.) we will have to think how to prevent most of the attacks that we learnt in class, therefore create a reliable security infrastructure inside the application_
