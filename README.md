# teameights.com

🦉 This is platform for developers to find each other.

# Diagram

**Services we are going to use to host:** <br>

✨ *Front:* Netlify <br>
✨ *Backend:* Heroku <br>
✨ *Database:* MongoDB automatically hosts it <br>


**Technologies we are going to use:** <br>

✨ *Front:* ReactJS, Redux Toolkit, styled-components, axios, material ui <br>
✨ *Backend:* NodeJS, express, joi(validation), etc <br>
✨ *Database:* MongoDB <br>
✨ *Codeversions:* Github <br>
✨ *Design:* Figma <br>

**APIs we are going to use:** <br>

✨ Google / Github API for quick login

✨ MongoDB api for database operations

✨ StackBlitz API for creating coding env in application

# MVP Review

**🥳 By November 18 we did:**
- Complete the profiles page -- *DONE* ✅
- Complete the user profile page where he can change information about him -- *(In progress, almost done)* 🚧
- Start working on the tournaments system, integrate the stackblitz into the platform -- *(In progress, started working on it recently)* 🚧
- Complete the preregistration pipeline, e.g. after user signups with email/google/git redirect him to the pages where he can get more information about himself (refer to registration pipeline above) *DONE* ✅
- Start working on teams logic, design the database architecture, implement adding/removing users to team as well as creating/removing teams *(In progress, DB schemas are ready, initial codebase for creating/viewing/joining teams ready, implementation of invites/adding/removing in progress)* 🚧
- Work on filtering / infinite scroll for users in the profiles page *DONE* ✅

# What our app currently does?

🎉 By now, users are able to login/register via basic account creation and email validation OR using Google OAuth. After initial registration users are redirected to the finish-registration page that will ask them to provide more personal data about them so we can compose a user profile before allowing him to participate in tournaments/search for *teameights*! After completing registration, user is redirected back to the profiles screen where he will see all of the profiles currently looking for a team on platform, they can view the descriptions, avatars, favorite languages, frameworks, etc. 

🎉 Users can also access team page where they can ONLY access another screen if they press on "create team" button. Also they can view their profiles by clicking on Profile action from the burger menu, it's currently only UI and doesn't allow you to change anything but we are working on it!

# Link to the deployed app

https://ephemeral-biscochitos-6c41fa.netlify.app

It's currently just basic react app, we are currently working on another repo and will transfer the code here soon.

# Idea

🎧 Overall idea - platform for student developers (probably skilled also) to find each other and work together on pet projects/real projects from project pool of customers (will be available only for skilled teams), tournaments between them will determine skill level, etc. Also possible mentorship, premium projects, AI code review, etc. basic functionality is described below.

# Figma design

Here is our design on figma:

https://www.figma.com/file/QaEUKYrZnVUEOzMBBSd7Q3/team8s?node-id=0%3A1&t=k5t52OmxRs5fyqvO-0

If you want to know why teameights.com or team8s.com – I don’t know, I just think this sounds cool =)

# Roles

There will be several different roles on platform, for example:

⚜️ Default user <br>
⚜️ Premium user <br>
⚜️ Mentor user <br>
⚜️ etc. <br>

_In short, the idea is for now: default user will be able to search for teammates, won’t be able to add ask for mentor for his team, won’t have access to premium projects, etc. (this list will be extending during our calls).
Premium user, obviously, will be able to ask for mentor for his team and will have access to premium projects, probably also with some additional features (like deadline management, impact management, etc.)._

**Finally**, mentor user will be a person who is not interested in finding teammates but rather will be able to mentor some teams that are looking for him and he will be able to help multiple teams simultaneously with their questions, etc.

# Pages (Desktop versions)

Regarding the **platform** paging, currently we are 100% sure that this list of pages will exist (✅ – _page exists_, ❌ – _under development_, 🔧 -_under construction_, 📱 - _adaptive already_):

<p>
✅📱 Login / SignUp page:
  
![image](https://user-images.githubusercontent.com/52038455/192882103-4bfd20cc-46a2-43af-a5cd-bd650522ef93.png)
![image](https://user-images.githubusercontent.com/52038455/192882145-7c5b7618-8a4e-4e4f-8b8f-ff4188076e03.png)

✅📱 Email verification notice page (after sign-up):
![image](https://user-images.githubusercontent.com/52038455/192882393-5f9ad216-3cc8-4998-899a-fcbcc62268aa.png)

✅ Finish registration pipeline pages:
![image](https://user-images.githubusercontent.com/52038455/192882634-b13f5e8d-f401-4894-a777-585d2b23e487.png)
![image](https://user-images.githubusercontent.com/52038455/192882696-9f1b5c8e-ba8b-48d2-9873-3e59491c8d61.png)
![image](https://user-images.githubusercontent.com/52038455/192882745-05caf0aa-813c-4d7b-a299-0766215d3487.png)

⚠️ **TODO: Add all of the pages from this pipeline**

✅📱 Developer profiles page (whenever user login, signup he will be redirected to this page and his profile will be added to the list of people who search for teams.:
![image](https://user-images.githubusercontent.com/52038455/192883146-aec63869-255f-4cda-8b5b-20d81f4a3870.png)

✅📱 Sidebar for navigation on developer profiles page:
![image](https://user-images.githubusercontent.com/52038455/192883262-0599ecd8-c560-451a-a471-0649551b9578.png)

✅📱 Developer page (it will pop-up as a modal window whenever user will click on developer from the list) and will provide all information about the developer and also will contain button ‘invite to team’ <br>
![image](https://user-images.githubusercontent.com/52038455/192883516-e4d85298-df4a-42d3-94db-75d507d43a91.png)

✅📱 Results not found page (when filters didn't find anything):
![image](https://user-images.githubusercontent.com/52038455/192883634-0ec48b2e-e936-46e6-a63f-98e483c09a33.png)

❌ Tournaments page (it will display upcoming tournament information and winners of the past tournament, if you want to see how it looks like you can check it in figma ‘tournaments’) <br>
⚠️ **TODO: Add the tournaments page here**

❌ Upcoming tournament page (here teams will be able to see description of the tournament, prize pool, start date, and will be able to sign-up for it if there will be enough slots, we will decide maximum amount of slots later, this page is not ready yet on figma) <br>
⚠️ **TODO: Add the upcoming tournament page here**

🔧 Your team’s page (this page will display information about the team, founders will be able to remove people, assign roles for the project, add project name, add name to the team) <br>
⚠️ **TODO: Add your team page here**
![image](https://user-images.githubusercontent.com/52038455/202818362-6f6108c5-8410-4c85-a1f9-1db92e397463.png)


🔧 Team edit page (this will also be a module window that will pop-up whenever team’s founder will click on edit button) <br>
⚠️ **TODO: Add the team edit page here**

❌ Incoming invites (in this page user will be able how many teams invited him, reject or accept invites) <br>
⚠️ **TODO: Add incoming invite page here**

🔧 Your personal page (in this page user will be able to see information about him and change it) <br>
⚠️ **TODO: Add incoming invite page here**
![image](https://user-images.githubusercontent.com/52038455/202818292-e36ab1f4-50a7-4e41-be29-f1bd59272468.png)


TBD.

</p>
We might redesign some pages but for now they should exist in any form, also we might add some additional pages later.

# Pages (Phone/tablet versions)

⚠️ **TODO: Add screenshots here**

# Team

Regarding the team members as for now:

🧑🏻 Nikita <br>
🧑🏻 Leland <br>
🧑🏻 Zach <br>
🧑🏻 Zayn <br>

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
