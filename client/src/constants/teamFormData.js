import greenAvatar from "../assets/defaultAvatars/team/default-green.png";
import pinkAvatar from "../assets/defaultAvatars/team/default-pink.png";
import blueAvatar from "../assets/defaultAvatars/team/default-blue.png";
import orangeAvatar from "../assets/defaultAvatars/team/default-orange.png";
import purpleAvatar from "../assets/defaultAvatars/team/default-purple.png";
import yellowAvatar from "../assets/defaultAvatars/team/default-yellow.png";

export const teamTypes = [
    {
        value: 'open',
        label: 'Open'
    },
    {
        value: 'invite-only',
        label: 'Invite-only'
    },
    {
        value: 'closed',
        label: 'Closed'
    },
]


export const defaultTeamAvatars = [
    { name: 'green', path:greenAvatar  },
    { name: 'pink' , path:pinkAvatar  },
    { name: 'blue'  , path:blueAvatar  },
    { name: 'orange', path:orangeAvatar  },
    { name: 'purple', path:purpleAvatar  },
    { name: 'yellow', path:yellowAvatar  }
];