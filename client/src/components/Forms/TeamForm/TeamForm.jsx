// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { Navigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import Cake from '../../../assets/Cake'
import Close from '../../../assets/Close'
import SearchIcon from '../../../assets/SearchIcon'
import Add from '../../../assets/TeamPage/Add'
import Delete from '../../../assets/TeamPage/Delete'
import UserPlus from '../../../assets/UserPlus'
import Users from '../../../assets/Users'
import Loader from '../../../shared/components/Loader/Loader'

import TeamActionModal from './TeamActionModal'
import {
  ActionButton,
  ButtonCardContent,
  CakeBox,
  CancelButton,
  Card,
  CardContainer,
  CircleContainer,
  CloseContainer,
  Container,
  CreateButton,
  CrownContainer,
  Input,
  InputBox,
  InviteButton,
  LeaveTeam,
  LeftContainer,
  MainCardContent,
  RightContainer,
  SearchIconContainer,
  Statistic,
  StatisticsFlex,
  style,
  SVGAndText,
  Tab,
  TabContainer,
  TeamCardBody,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardFigure,
  TeamCardMembers,
  TeamCardPerson,
  TeamCardPicture,
  TeamCardTop,
  TeamCardTopIcon,
  TeamCardTopInfo,
  TeamImgBorder,
  Text,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
  UserPlusContainer,
} from './TeamForm.styles'
import tempImg from './zxc1.jpg'

function TeamForm() {
  const [open, setOpen] = useState(false)
  const [inviteActive, setInviteActive] = useState(false)
  const [email, setEmail] = useState('')
  const [members, setMembers] = useState([])

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()

  useEffect(() => {
    const getTeam = async () => {
      if (team) {
        const users = await teamsAPI.getTeamMembers(team.members)

        setMembers(users.data)
      }
    }

    getTeam()
  }, [team])

  const { enqueueSnackbar } = useSnackbar()

  const handleOpenInvite = () => {
    setOpen(true)
    setInviteActive(true)
  }

  const handleOpenLeave = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setInviteActive(false)
  }

  const handleInvite = async () => {
    const result = await teamsAPI.inviteUserByEmail(email, team)

    if (result.data.error) {
      enqueueSnackbar(result.data.error, {
        preventDuplicate: true,
      })
    } else {
      handleClose()
    }
  }

  if (isUserTeamLoading) {
    return <Loader />
  }
  if (!team) {
    return <Navigate to={'/team'} />
  }

  const [isMembers, switchIsMembers] = useState(true)

  //   <ButtonCardContent>
  //   <ActionButton onClick={handleOpenInvite}>
  //     <Add />
  //   </ActionButton>
  //   <ActionButton onClick={handleOpenLeave}>
  //     <Delete />
  //   </ActionButton>
  // </ButtonCardContent>

  const membersVar = (
    <UserGrid>
      {members.map((member, i) => (
        <UserCard key={i}>
          <UserImg src="https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg" />
          <UserInfo>
            <Text fontSize="16px" color="#FFF">
              {member.userUsername}
            </Text>
            <Text fontSize="14px" color="#FFF" fontWeight="100" alignment="start">
              {member.userConcentration}
            </Text>
          </UserInfo>
        </UserCard>
      ))}
    </UserGrid>
  )
  const about = (
    <TeamCardFigure>
      <TeamCardTop>
        <TeamCardTopInfo>
          <div>
            <h3>Name</h3>
            <p>{team.name}</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <div>
            <h3>Tag</h3>
            <p>[TAG]</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <div>
            <h3>Status</h3>
            <p>[STATUS]</p>
          </div>
        </TeamCardTopInfo>
        <TeamCardTopInfo>
          <div>
            <h3>Country</h3>
            <p>{team.country}</p>
          </div>
        </TeamCardTopInfo>
      </TeamCardTop>
      <TeamCardBody>
        <TeamCardBodyPoint>
          <h3>Description</h3>
          <TeamCardDesc>insert long ass description here</TeamCardDesc>
        </TeamCardBodyPoint>
        <TeamCardBodyPoint></TeamCardBodyPoint>
        <TeamCardBodyPoint>
          <h3>Statistics</h3>
          <StatisticsFlex>
            <Statistic>
              <p>
                Tournaments: <span>5</span>
              </p>
            </Statistic>
            <Statistic>
              <p>
                Wins: <span>2</span>
              </p>
            </Statistic>
            <Statistic>
              <p>
                Points: <span>380</span>
              </p>
            </Statistic>
          </StatisticsFlex>
        </TeamCardBodyPoint>
      </TeamCardBody>
    </TeamCardFigure>
  )

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseContainer onClick={handleClose}>
            <Close />
          </CloseContainer>
          {inviteActive ? (
            <>
              <Text fontSize="24px" margin="0">
                Send invite
              </Text>

              <InputBox>
                <SearchIconContainer>
                  <SearchIcon />
                </SearchIconContainer>
                <Input
                  placeholder="Search username or email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></Input>
              </InputBox>
              <CreateButton onClick={handleInvite}>
                <UserPlusContainer>
                  <UserPlus />
                </UserPlusContainer>
                Invite
              </CreateButton>
            </>
          ) : (
            <>
              <TeamActionModal
                firstText="Leave Team"
                secondText="Are you sure you want to leave?"
                firstButton="Leave"
                firstButtonHandler={handleOpenLeave}
                secondButton="Cancel"
                secondButtonHandler={handleClose}
              />
            </>
          )}
        </Box>
      </Modal>
      <CardContainer>
        <Card>
          <MainCardContent>
            <TabContainer about={about}>
              <Tab
                onClick={() => {
                  switchIsMembers(true)
                }}
                isMembers={isMembers}
              >
                Members
                <span></span>
              </Tab>
              <Tab
                onClick={() => {
                  switchIsMembers(false)
                }}
                isMembers={!isMembers}
              >
                About
                <span></span>
              </Tab>
              <InviteButton onClick={handleOpenInvite}>
                <UserPlusContainer>
                  <UserPlus />
                </UserPlusContainer>
                invite
              </InviteButton>
            </TabContainer>
            {!isMembers ? about : <></>}
            {isMembers ? membersVar : <></>}
            <LeftContainer>{/* TODO: find team members in useEffect. */}</LeftContainer>
          </MainCardContent>
        </Card>
        <RightContainer>
          <TeamImgBorder src={tempImg} />
          <Text margin="16px 0 12px 0">{team.name}</Text>
          <SVGAndText>
            <CakeBox>
              <Cake />
            </CakeBox>
            <Text fontSize="16px" fontWeight="400">
              {team.created_at.split('T')[0]}
            </Text>
          </SVGAndText>
          <SVGAndText>
            <CakeBox>
              <Users />
            </CakeBox>
            <Text fontSize="16px" fontWeight="400">
              8/{team.members.length}
            </Text>
          </SVGAndText>
          <LeaveTeam onClick={handleOpenLeave}>Leave Team</LeaveTeam>
        </RightContainer>
      </CardContainer>
    </Container>
  )
}

export default TeamForm
