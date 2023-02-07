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

## List of significant changes

Documentation can be found at http://localhost:{PORT}/api/docs 

As it is swagger automatically-generated schema it is possible that some bugs exist that will be fixed in the future updates. In case any bugs were found, make pull request with description and suggested fix or use discord
# User
Some schemas was changed, let's start from User:

```
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

```
	name: string;
	description: string;
	leader: User;
	members: [User];
	country: string;
	// tournaments: [Tournament]; (is not connected yet)
	wins: Number;
	points: Number;
	image: string;
  ```

# Tournament
Tournament schema was changed:

```
// helper class used in Tournament schema
class TournamentParticipants {
	team_id: mongoose.Types.ObjectId;
	frontend_id: mongoose.Types.ObjectId;
	backend_id: mongoose.Types.ObjectId;
}

class Tournament {
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

```
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

```
export class Notifications {
	user: User;
	type!: NotificationType;
	read: Boolean;
	url: string;
	expiresAt: Date;
}
```

System notification that extends Basic Notification:

```
export class SystemNotification {
	type: string;
	system_message: string;
}
```

Team invite notification that extends Basic Notification:

```
export class TeamInvitationNotification {
	type: string;
	teamid: Team;
	message: string;
	from_user_id: User;
	to_user_email: string;
	status: string; (one of ['pending', 'accepted', 'rejected')
}
```

# Roles schema

```
export class Role {
	value: string; (for example 'ADMIN' or 'USER') // should be changed to enum later
	description: string;
}
```

That's all schema updates that was implemented.
