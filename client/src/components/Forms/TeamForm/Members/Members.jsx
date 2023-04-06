import React, { useEffect, useState } from 'react'
import { Box, Modal } from '@mui/material'

import CaretDown from '../../../../assets/CaretDown'
import CaretUp from '../../../../assets/CaretUp'
import Close from '../../../../assets/Close'
import Crown from '../../../../assets/Crown'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../../assets/fonts'
import { ThinClose } from '../../../../assets/ThinClose'
import { LOCAL_PATH } from '../../../../http'
import TeamActionModal from '../TeamActionModal'
import {
  CaretContainer,
  CloseContainer,
  CrownContainer,
  CrownContainer2,
  ListBackdrop,
  SpaceBetween,
  style,
  Text,
  UserAccordionCard,
  UserAccordionImg,
  UserAccordionUsername,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
} from '../TeamForm.styles'

const Members = ({
  selectLeader,
  openSelectLeader,
  chosenLeader,
  changeChosenLeader,
  team,
  isEditing,
  handleRemoveMembers,
}) => {
  useEffect(() => {
    changeChosenLeader({ username: '', id: '' })
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
      {team.members
        .filter((member) => member.isLeader && team.leader._id !== member._id)
        .map((member, key) => {
          return (
            <UserAccordionCard key={member._id} id={member._id}>
              <UserAccordionImg
                alt={member.username}
                src={
                  member?.image
                    ? LOCAL_PATH + '/' + member.image
                    : 'https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg'
                }
              />
              <UserAccordionUsername>{member.username}</UserAccordionUsername>
            </UserAccordionCard>
          )
        })}
    </ListBackdrop>
  )

  return (
    <>
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
            {(chosenLeader.username === '' && team.leader._id === member._id) ||
            chosenLeader.username === member.username ? (
              <CrownContainer>
                <Crown />
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
                {member.concentration.length > 16
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
