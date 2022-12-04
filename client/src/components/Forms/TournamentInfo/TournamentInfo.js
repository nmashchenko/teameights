// * Modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import isEqual from 'lodash/isEqual'
import { useSnackbar } from 'notistack'

// * Styles
import {
  Container,
  Content,
  Div,
  TopContainer,
  ComeBackBtn,
  SelectContainer,
  SelectItem,
  TournamentInfoContainer,
  InfoContainer,
  EntryStartsContainer,
  ButtonContainer,
  AvailableSlotsContainer,
  AvailableSlotsItem,
  Text,
  Span,
  PrimaryButton,
  style,
  CloseContainer,
  CustomSelect,
  CustomOption,
} from './TournamentInfo.styles'

// * Assets
import { data } from './TournamentInfo.data'
import ArrowLeftReset from '../../../assets/ArrowLeftReset'
import X from '../../../assets/X'
import CodingForm from '../CodingForm/CodingForm'

// * API
import teamsAPI from '../../../api/endpoints/team'
import tournamentAPI from '../../../api/endpoints/tournament'

function TournamentInfo() {
  const [open, setOpen] = useState(false)
  const [frontEnd, setFrontEnd] = useState('')
  const [backEnd, setBackEnd] = useState('')
  const [allowStart, setAllowStart] = useState(false)
  const [team, setTeam] = useState({})
  const [updating, setUpdating] = useState(true)
  const [members, setMembers] = useState([])
  const [userRole, setUserRole] = useState('')

  const { user } = useSelector((state) => state.userReducer)
  const { enqueueSnackbar } = useSnackbar()

  const navigate = useNavigate()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleFront = (e) => {
    console.log('front: ' + e.target.value)
    setFrontEnd(e.target.value)
  }
  const handleBack = (e) => {
    console.log('back: ' + e.target.value)
    setBackEnd(e.target.value)
  }

  const handleTournamentCheck = (userRole) => {
    setUserRole(userRole)
    setAllowStart(true)
  }

  const handleSubmit = async () => {
    if (frontEnd === backEnd) {
      enqueueSnackbar('Should be different users!', {
        preventDuplicate: true,
      })
    } else if (frontEnd === '' || backEnd === '') {
      enqueueSnackbar('Select both front & back!', {
        preventDuplicate: true,
      })
    } else {
      const res = await tournamentAPI.addTeamToTournament(team._id, frontEnd, backEnd)
      console.log(res)
      if (res.data?.error) {
        enqueueSnackbar(res.data.error, {
          preventDuplicate: true,
        })
      } else {
        setAllowStart(true)
        handleClose()
      }
    }
  }

  const handleStart = async () => {
    navigate('/coding')
  }

  useEffect(() => {
    const getData = async () => {
      if (isEqual(user, {})) {
        navigate('/auth/login', { replace: true })
      } else {
        const team = await teamsAPI.getTeamById(user.userTeam)
        const users = await teamsAPI.getTeamMembers(team.data.members)
        const checkSignedUp = await tournamentAPI.checkUserSignedUp(user._id)
        console.log(checkSignedUp)
        checkSignedUp.data.exists && checkSignedUp.data.exists === true
          ? handleTournamentCheck(checkSignedUp.data.role)
          : setAllowStart(false)
        setTeam(team.data)
        setMembers(users.data)
        setUpdating(false)
      }
    }
    getData()
  }, [])

  return (
    <Container>
      <Content>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CloseContainer>
              <div style={{ cursor: 'pointer' }} onClick={handleClose}>
                <X />
              </div>
            </CloseContainer>
            {members.length >= 2 ? (
              <>
                <Text alignment="center" fontSize="18px" fontWeight="200">
                  Select team members
                </Text>
                <Text alignment="center" fontSize="18px" margin="15px 0 0 0">
                  Frontend dev
                </Text>
                <CustomSelect onChange={handleFront}>
                  <CustomOption value="none" selected disabled hidden>
                    Select frontend
                  </CustomOption>
                  {members.map((member) => (
                    <CustomOption value={member._id}>{member.userRealName}</CustomOption>
                  ))}
                </CustomSelect>
                <Text alignment="center" fontSize="18px" margin="25px 0 0 0">
                  Backend dev
                </Text>
                <CustomSelect onChange={handleBack}>
                  <CustomOption value="none" selected disabled hidden>
                    Select backend
                  </CustomOption>
                  {members.map((member) => (
                    <CustomOption value={member._id}>{member.userRealName}</CustomOption>
                  ))}
                </CustomSelect>
                <PrimaryButton
                  margin="35px 0 0 0"
                  padding="13px 60px"
                  background="white"
                  color="#26292B"
                  onClick={handleSubmit}
                >
                  Submit
                </PrimaryButton>
              </>
            ) : user.userTeam ? (
              <Text>You need at least two team members.</Text>
            ) : (
              <Text>You need to join team first</Text>
            )}
          </Box>
        </Modal>
        <TopContainer>
          <ComeBackBtn onClick={() => navigate('/tournament', { replace: true })}>
            <ArrowLeftReset />
          </ComeBackBtn>
          <Text>Teameights cup #1</Text>
          <SelectContainer>
            <SelectItem>
              <Text fontSize="16px" color="#5D9D0B">
                OVERVIEW
              </Text>
            </SelectItem>
          </SelectContainer>
        </TopContainer>

        <Div>
          <Div>
            <Text fontSize="24px" color="#8A9AB5" margin="10px 0 0.5rem 0">
              Sign up closes in <Span>7h 22m</Span>
            </Text>
          </Div>

          <Div>
            <TournamentInfoContainer>
              <EntryStartsContainer>
                <InfoContainer>
                  <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                    ENTRY FEE
                  </Text>
                  <Text color="white" fontSize="16px">
                    Free to enter
                  </Text>
                </InfoContainer>

                <InfoContainer mr="15rem">
                  <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                    STARTS AT
                  </Text>
                  <Text color="white" fontSize="16px">
                    02/08/2022 06:00
                  </Text>
                </InfoContainer>
              </EntryStartsContainer>

              <div>
                <ButtonContainer>
                  {allowStart ? (
                    <PrimaryButton onClick={handleStart}>Start coding</PrimaryButton>
                  ) : (
                    <PrimaryButton onClick={handleOpen}>SIGN UP</PrimaryButton>
                  )}
                  <PrimaryButton onClick={() => navigate('/leaderboard')}>
                    Leaderboard
                  </PrimaryButton>
                </ButtonContainer>
              </div>

              <AvailableSlotsContainer>
                <AvailableSlotsItem fd="column" justify="center">
                  AVAILABLE SLOTS
                </AvailableSlotsItem>

                {data.map((item) => (
                  <AvailableSlotsItem
                    borderb="solid 2px #353535"
                    align="center"
                    background="#1A1C22"
                    height="45px"
                  >
                    <Text color="#8A9AB5" fontSize="16px">
                      {item.name}
                    </Text>
                    <Text color="white" fontSize="16px">
                      {item.number}
                    </Text>
                  </AvailableSlotsItem>
                ))}
              </AvailableSlotsContainer>
            </TournamentInfoContainer>
            <Text margin="1rem 0 2rem 0">Tournament restrictions</Text>
            <Div
              style={{
                justifyContent: 'start',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <InfoContainer>
                <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                  RANK RESTRICTION
                </Text>
                <Text color="#5D9D0B" fontSize="16px">
                  None specified
                </Text>
              </InfoContainer>

              <InfoContainer mr="15mr">
                <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                  ALLOWED EXCEPTIONS
                </Text>
                <Text color="white" fontSize="16px">
                  0 out of 5 team members may be from other countries
                </Text>
              </InfoContainer>
            </Div>
          </Div>
        </Div>
      </Content>
    </Container>
  )
}

export default TournamentInfo
