import { SelectedIcon } from '../../../../assets/Team/SelectedIcon'
import {
  ListBackdrop,
  NoMembersCard,
  Text,
  UserAccordionCard,
  UserAccordionImg,
  UsernameIconContainer,
} from '../Modal.styles'

const LeaderOptions = ({ team, changeChosenLeader, chosenLeader }) => {
  return (
    <ListBackdrop>
      {team?.members.length > 1 ? (
        team?.members
          .filter((member) => team.leader._id !== member._id)
          .map((member, key) => {
            return (
              <UserAccordionCard
                key={member._id}
                id={member._id}
                onClick={() => {
                  changeChosenLeader({ username: member.username, id: member._id })
                }}
              >
                <UserAccordionImg alt={member.username} src={member.image} />
                <UsernameIconContainer>
                  <p>{member.username}</p>
                  {chosenLeader.username === member.username ? <SelectedIcon /> : <></>}
                </UsernameIconContainer>
              </UserAccordionCard>
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
