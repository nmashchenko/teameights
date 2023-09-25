export interface IRegisterInput {
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IPasswordUpdateRequest {
  email: string;
  token: string | null;
  password: string;
}

export interface ILoginInput {
  email: string;
  password: string;
  token?: string;
}

export interface IUserResponse {
  user: {
    email: string;
    password: string;
    username: string;
    fullName: string;
    isActivated: true;
    isRegistered: true;
    isLeader: true;
    activationLink: string;
    country: string;
    dateOfBirth: string;
    universityData: [
      {
        university: string;
        degree: string;
        major: string;
        addmissionDate: string;
        graduationDate: string;
      },
    ];
    jobData: [
      {
        title: string;
        company: string;
        startDate: string;
        endDate: string;
      },
    ];
    projectData: [
      {
        title: string;
        link: string;
      },
    ];
    concentration: string;
    description: string;
    experience: string;
    image: string;
    links: {
      github: string;
      linkedin: string;
      behance: string;
      telegram: string;
    };
    programmingLanguages: ['JS', 'C++'];
    frameworks: ['NestJS', 'NodeJS'];
    roles: ['USER', 'PREMIUM'];
    notifications: ['5f6d8b6db0c6d71be6e0e070', '5f6d8b6db0c2d71be6e0es70'];
    team: string;
  };
  accessToken: string;
  refreshToken: string;
}
