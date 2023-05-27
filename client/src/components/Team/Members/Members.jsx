import React, { useEffect } from 'react'

import SCrownRight from '../../../assets/Shared/Crowns/SCrownRight'
import CaretDown from '../../../assets/Team/CaretDown'
import { ThinClose } from '../../../assets/Team/ThinClose'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'
import { LOCAL_PATH } from '../../../http'
import {
  CaretContainer,
  CloseContainer,
  CrownContainer,
  ListBackdrop,
  SpaceBetween,
  Text,
  UserAccordionCard,
  UserAccordionImg,
  UserAccordionUsername,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
} from '../TeamForm/TeamForm.styles'

const Members = ({
  selectLeader,
  openSelectLeader,
  chosenLeader,
  changeChosenLeader,
  team,
  isEditing,
  handleRemoveMembers,
}) => {
  // console.log(changeChosenLeader)

  useEffect(() => {
    // if (isEditing) {
    changeChosenLeader({ username: '', id: '' })
    openSelectLeader(false)
    // }
  }, [isEditing])

  const listModal = (
    <ListBackdrop
      selectLeader={selectLeader}
      onClick={(e) => {
        if (e.target.closest('div').childNodes.length !== 2) {
          return
        }

        const id = e.target.closest('div').id

        let newLeader = e.target

        if (e.target.nodeName === 'IMG') {
          newLeader = newLeader.closest('div').querySelector('p').innerHTML
        } else if (e.target.nodeName === 'P') {
          newLeader = e.target.innerHTML
        } else {
          newLeader = e.target.querySelector('p').innerHTML
        }

        changeChosenLeader({ username: newLeader, id: id })
      }}
    >
      {team?.members.length > 1 ? (
        team?.members
          .filter((member) => team.leader._id !== member._id)
          .map((member, key) => {
            return (
              <UserAccordionCard key={member._id} id={member._id}>
                <UserAccordionImg alt={member.username} src={LOCAL_PATH + '/' + member.image} />
                <UserAccordionUsername>{member.username}</UserAccordionUsername>
              </UserAccordionCard>
            )
          })
      ) : (
        <UserAccordionCard>
          <UserAccordionUsername>Invite more to transfer leader!</UserAccordionUsername>
        </UserAccordionCard>
      )}
    </ListBackdrop>
  )

  return (
    <>
      <UserGrid>
        {team?.members.map((member, i) => (
          <UserCard
            onClick={() => {
              // only able to open modal window
              // when isEditing and member isnt leader
              if (isEditing && team.leader._id !== member._id) {
                handleRemoveMembers(member._id)
              } else if (isEditing && team.leader._id === member._id) {
                openSelectLeader((prevState) => !prevState)
              }
            }}
            isTeamLeader={team.leader._id === member._id}
            selectLeader={selectLeader}
            isEditing={isEditing}
            key={i}
          >
            <UserImg src={LOCAL_PATH + '/' + member.image} />
            {(chosenLeader.username === '' && team.leader._id === member._id) ||
            chosenLeader.username === member.username ? (
              <CrownContainer>
                <SCrownRight />
              </CrownContainer>
            ) : (
              <> </>
            )}
            <UserInfo>
              <SpaceBetween>
                <Text
                  fontSize={`${B2fs}`}
                  color="#FFF"
                  lineHeight={`${B2lh}`}
                  fontWeight={`${B2fw}`}
                >
                  {member.username}
                </Text>
                {team.leader._id === member._id ? (
                  <CaretContainer selectLeader={selectLeader} isEditing={isEditing}>
                    <CaretDown />
                  </CaretContainer>
                ) : (
                  <CloseContainer isEditing={isEditing} color="#46A11B">
                    <ThinClose />
                  </CloseContainer>
                )}
              </SpaceBetween>
              <Text
                fontSize={`${B3fs}`}
                color="#FFF"
                fontWeight={`${B3fw}`}
                lineHeight={`${B3lh}`}
                alignment="start"
              >
                {member?.concentration?.length > 16
                  ? member.concentration.slice(0, 10) + '...'
                  : member.concentration}
              </Text>
            </UserInfo>
            {team.leader._id === member._id ? listModal : <></>}
          </UserCard>
        ))}
      </UserGrid>
    </>
  )
}

export default Members
