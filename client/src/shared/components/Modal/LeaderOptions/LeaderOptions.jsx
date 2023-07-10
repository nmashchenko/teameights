import { ListBackdrop, NoMembersCard, Text } from '../Modal.styles'

import LeaderCard from './LeaderCard'

const LeaderOptions = ({ team, changeChosenLeader, chosenLeader }) => {
  return (
    <ListBackdrop>
      {team?.members.length > 1 ? (
        team?.members
          .filter((member) => team.leader._id !== member._id)
          .map((member, key) => {
            return (
              <LeaderCard
                key={member._id}
                member={member}
                changeChosenLeader={changeChosenLeader}
                chosenLeader={chosenLeader}
              />
            )
          })
      ) : (
        <NoMembersCard>
          <Text>Invite more to transfer leader!</Text>
        </NoMembersCard>
      )}
    </ListBackdrop>
  )
}

export default LeaderOptions
