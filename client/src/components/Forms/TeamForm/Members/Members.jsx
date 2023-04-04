import React, { useState } from 'react'

import CaretDown from '../../../../assets/CaretDown'
import CaretUp from '../../../../assets/CaretUp'
import Close from '../../../../assets/Close'
import Crown from '../../../../assets/Crown'
import { ThinClose } from '../../../../assets/ThinClose'
import { LOCAL_PATH } from '../../../../http'
import {
  CaretContainer,
  CloseContainer,
  CrownContainer,
  CrownContainer2,
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
} from '../TeamForm.styles'

const Members = ({ team, isEditing, handleRemoveMembers }) => {
  const [selectLeader, openSelectLeader] = useState(false)
  const [chosenLeader, changeChosenLeader] = useState('')

  const listAccordion = (
    <ListBackdrop
      selectLeader={selectLeader}
      onClick={(e) => {
        if (e.target.nodeName !== 'P') {
          return
        }
        const newLeader = e.target.innerHTML
        changeChosenLeader(newLeader)
      }}
    >
      {team.members
        .filter((member) => member.isLeader && team.leader._id !== member._id)
        .map((member, key) => {
          return (
            <UserAccordionCard key={key}>
              <UserAccordionImg
                src={
                  member?.image
                    ? LOCAL_PATH + '/' + member.image
                    : 'https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg'
                }
              />
              <UserAccordionUsername> {member.username}</UserAccordionUsername>
            </UserAccordionCard>
          )
        })}
    </ListBackdrop>
  )

  return (
    <UserGrid>
      {team.members.map((member, i) => (
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
          <UserImg
            src={
              member?.image
                ? LOCAL_PATH + '/' + member.image
                : 'https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg'
            }
          />
          {team.leader._id === member._id && (
            <CrownContainer>
              <Crown />
            </CrownContainer>
          )}
          <UserInfo>
            <SpaceBetween>
              <Text fontSize="var(--B2-s)" color="#FFF" lineHeight="var(--B2-lh)">
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
              fontSize="var(--B3-s)"
              color="#FFF"
              fontWeight="100"
              lineHeight="var(--B3-lh)"
              alignment="start"
            >
              {member.concentration.length > 16
                ? member.concentration.slice(0, 10) + '...'
                : member.concentration}
            </Text>
          </UserInfo>
          {team.leader._id === member._id ? listAccordion : <></>}
        </UserCard>
      ))}
    </UserGrid>
  )
}

export default Members
