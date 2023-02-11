## Introduction

Documentation can be found at [DOCUMENTATION](http://localhost:7001/api/docs#/)

As it is swagger automatically-generated schema it is possible that some bugs exist that will be fixed in the future updates. In case any bugs were found, make pull request with description and suggested fix or use discord

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## List of significant schema changes

Here is the list of all schemas that were changed:
# User
Some schemas was changed, let's start from User:

```ts
export class User {
	email: string;
	password: string;
	username: string;
	fullName: string;
	isActivated: Boolean;
	isRegistered: Boolean;
	isLeader: Boolean;
	activationLink: string;
	country: string;
	age: string;
	university: string;
	major: string;
	graduationDate: string;
	concentration: string;
	description: string;
	experience: string;
	image: string;
	links: {
		github: string;
		linkedIn: string;
		instagram: string;
		telegram: string;
	};
	programmingLanguages: string[];
	frameworks: string[];
	roles: Role[];
	notifications: Notifications[];
	team: Team;
}
```

Old User looked mostly the same but most of the fields had user in front of every naming, 
so it will be extremely important **to change** all fields in frontend code

# Team
Team schema also was changed:

```ts
  export class Team {
	name: string;
	description: string;
	leader: User;
	members: [User];
	country: string;
	// tournaments: [Tournament]; (is not connected yet)
	wins: Number;
	points: Number;
	image: string;
  }
  ```

# Tournament
Tournament schema was changed:

```ts
// helper class used in Tournament schema
class TournamentParticipants {
	team_id: mongoose.Types.ObjectId;
	frontend_id: mongoose.Types.ObjectId;
	backend_id: mongoose.Types.ObjectId;
}

export class Tournament {
	tournament_name: string;
	tournament_participants: [TournamentParticipants];
	tournament_startTime: Date;
	tournament_endTime: Date;
	status: string;
	winner: Team;
  // tournament_prize: Number; (not implemented yet)
}
```

# Leaderboard
Leaderboard schema was changed:

```ts
// helper class for Leaderboard
class TournamentTeam {
	team_id: mongoose.Types.ObjectId;
	frontendScore: Number;
	backendScore: Number;
}

export class Leaderboard {
	tournament_id: mongoose.Types.ObjectId;
	tournament_teams: TournamentTeam[];
}
```

# New schemas that was implemented:

New update have roles and notifications schemas.

Please note that notification schema is implemented with polymorphism, meaning that you will be able to extend main notification schema class to easily add any new types of notifications in the future.

# Notifications schemas:

Basic notification:

```ts
export class Notifications {
	user: User;
	type!: NotificationType;
	read: Boolean;
	url: string;
	expiresAt: Date;
}
```

System notification that extends Basic Notification:

```ts
export class SystemNotification {
	type: string;
	system_message: string;
}
```

Team invite notification that extends Basic Notification:

```ts
export class TeamInvitationNotification {
	type: string;
	teamid: Team;
	message: string;
	from_user_id: User;
	to_user_email: string;
  // one of ['pending', 'accepted', 'rejected']
	status: string;
}
```

# Roles schema

```ts
export class Role {
  // should be changed to enum later ['ADMIN', 'USER', ...]
	value: string;
	description: string;
}
```

That's all schema updates that was implemented.

## List of significant endpoint changes

# SocialLoginRegistration

Previously, we received a token from the response and immediately decoded it on the front, after that we simply passed the login to the back

Now, we will receive credential from the response and pass it to the server, where the server will validate this token and give the user/access object and the refresh token

How it worked:

```js
  const createOrGetUser = async (response) => {
    const decoded = jwt_decode(response.credential)
    const { picture, email, sub } = decoded
    const username = email.split('@')[0]

    socialLoginRegisterUser({ username, email, picture, sub })
  }
```

How it will work now:

```js
  const createOrGetUser = async (response) => {
    const token = response.credential;

    // make get request to /google/:token 
    
    // this request will either login user OR sign him up
  }
  ```

# Login/Registration endpoints

Now, with a normal login / registration (for Google, Git, etc. it will be different) we will always take only email / password
Username will be added to the user already during additional registration where he will put a photo / etc.

For example that is what DTO login/registration endpoints will accept:

```ts
export class AuthUserDto {
	readonly email: string;
	readonly password: string;
}
```

# /get-user-object endpoint update

In the old one, we sent a request in which there were cookies with a refresh token to /get-user-object, after which it returned the user to us if there was one (or anauthorize)

In the new version of the server there will be a new approach to requesting a user object for the useTokenCheck hook, firstly we will access /users/get-by-token in the header of which there will be a Bearer with an access token that we will check on the back and return anauthorize/user, firstly, we will get rid of the constant jerking of the refresh, and secondly, it will be more logical if we throw out the user after 24 inactivation instead of 30 days

# /users & /users-filtered endpoint endpoint update

Now we will have three endpoints available:

```
/users/get-all - returns absolutely all users available in the database
```

```
/users/get/?page=1 - returns a specific page in the format:
{
     "users": [],
     "total": 100
     "page": 1,
     "limit": 8,
     "last_page": 13
}
```

By default, the page will be 1, the limit will always be 9, it cannot be changed, the page can be transferred to queris

```
/users/get-filtered/?page=1 - returns the same as the previous endpoint but with search filters applied (will also work on its own)
```

# /registration-checkout update

Now we will refer to two endpoints instead of one:

1) After we get base64 photos on the front, it will look like this: 'data:image/webp;base64,UklGRqIvAABXRUJQVlA4IJYvAAD...', we clean it from data:image/webp:base64, => str. split('base64,')[1] and then we will send it to a separate endpoint which will be called **users/update-avatar** and accept {email: string, image: base64string}

2) And we will send the object itself with the updated info to another endpoint:
**users/registration-checkout** which will accept dto with fields:
```ts
class User {
  email:string
  username:string
  fullName:string
  age:string
  description: string
  concentration:string
  country:string
  experience: string
  isLeader: Boolean
  links: {
    github?:string
    linkedIn?: string
    instagram?:string
    telegram?:string
  }
  programmingLanguages: string[]
  frameworks: string[]
  university?: string
  major?: string
  graduationDate?: string
}
```

## Other

Everything else is described in the swagger documentation:


<img width="812" alt="Снимок экрана 2023-02-07 в 1 29 46 PM" src="https://user-images.githubusercontent.com/52038455/217346115-68a8ec6b-92a3-43a3-807a-04fdeca78ee4.png">
<img width="802" alt="Снимок экрана 2023-02-07 в 1 30 20 PM" src="https://user-images.githubusercontent.com/52038455/217346246-4e1f7448-4118-4c95-b3f3-d26345f984b6.png">
