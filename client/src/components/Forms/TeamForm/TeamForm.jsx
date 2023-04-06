// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { Link, useNavigate } from 'react-router-dom'
import { CssBaseline, Radio, RadioGroup } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Field, Form, Formik, useFormikContext } from 'formik'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../../api/hooks/auth/useUpdateAvatar'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useLeave } from '../../../api/hooks/team/useLeave'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import { useTransferLeader } from '../../../api/hooks/team/useTransferLeader'
import { useUpdateTeamsAvatar } from '../../../api/hooks/team/useUpdateTeamsAvatar'
import Cake from '../../../assets/Cake'
import { CheckCircle } from '../../../assets/CheckCircle'
import Close from '../../../assets/Close'
import Crown from '../../../assets/Crown'
import { defaultTeamImages } from '../../../assets/defaults/defaults'
import { B2fs, B2fw, B2lh, H4fs, H4fw, H4lh } from '../../../assets/fonts'
import { PencilSimple } from '../../../assets/PencilSimple'
import SearchIcon from '../../../assets/SearchIcon'
import Add from '../../../assets/TeamPage/Add'
import Delete from '../../../assets/TeamPage/Delete'
import { UploadSymbol } from '../../../assets/UploadSymbol'
import UserPlus from '../../../assets/UserPlus'
import Users from '../../../assets/Users'
import http, { LOCAL_PATH } from '../../../http'
import Loader from '../../../shared/components/Loader/Loader'

import About from './About/About'
import Members from './Members/Members'
import TeamActionModal from './TeamActionModal'
import {
  ActionButton,
  ButtonCardContent,
  CakeBox,
  CancelButton,
  Card,
  CardContainer,
  Center,
  CircleContainer,
  CloseContainer,
  CloseContainerModal,
  Container,
  CreateButton,
  CreateTeam,
  CrownContainer,
  CrownContainer2,
  DefaultImg,
  EditImageButton,
  EditTeam,
  FileButton,
  FormikContainer,
  ImageBox,
  Input,
  InputBox,
  InviteButton,
  LeaderActionsBox,
  LeaveTeam,
  LeftContainer,
  MainCardContent,
  MyRadioGroup,
  RightContainer,
  SearchIconContainer,
  Statistic,
  StatisticsFlex,
  style,
  SVGAndText,
  Tab,
  TabContainer,
  TeamButton,
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
  TeamInformationContainer,
  Text,
  TopContainer,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
  UserPlusContainer,
} from './TeamForm.styles'
import tempImg from './zxc1.jpg'

function TeamForm({ switchPage }) {
  const navigate = useNavigate()
  const [inviteActive, setInviteActive] = useState(false)
  const [deleteActive, setDeleteActive] = useState(false)
  const [leaveActive, setLeaveActive] = useState(false)
  const [removeMemberActive, setRemoveMemberActive] = useState('')
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [hasUpdate, update] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editImage, setEditImage] = useState(false)
  const [chosenLeader, changeChosenLeader] = useState({ username: '', id: '' })
  const [selectLeader, openSelectLeader] = useState(false)
  const [transferActive, setTransferActive] = useState(false)

  const [isMembers, switchIsMembers] = useState(true)

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()
  const { mutate: deleteTeam, isLoading: isDeleting } = useDelete()
  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()
  const { mutate: removeFromTeam, isLoading: isRemoving } = useRemoveMember()
  const { mutate: updateTeamsAvatar, isLoading: isUpdatingTeamsAvatar } = useUpdateAvatar('teams')
  const { mutate: transferLeader, isLoading: isTransferring } = useTransferLeader()

  const createDate = new Date(team?.createdAt)
      .toLocaleDateString({}, { timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric' })
      .replace(',', '')

  const { data: user } = useCheckAuth()
  // We need: Leave team

  useEffect(() => {
    // maybe we need to turn off edits if we switch tabs
    if (!isEditing) {
      setEditImage(false)
    }
  }, [isEditing])

  useEffect(() => {
    if (chosenLeader.username !== '') {
      // new leader chosen
      console.log('SET ACTIVE')

      setOpen((prevState) => !prevState)
      setTransferActive(true)
    }
  }, [chosenLeader])
  // When we press the cancel button, we need to turn Off

  useEffect(() => {
    const saveUpdates = async () => {
      setLoading(true)

      setTimeout(function () {
        // update(false)
        // setIsEditing(false)
      }, 2000)

      setLoading(false)
    }

    if (hasUpdate) {
      saveUpdates()
    }
  }, [hasUpdate])

  // START IMAGES
  const [selectedImage, changeSelectedImage] = useState('')
  const defaultTeamImages = ['defaultGreen', 'defaultPink', 'defaultOrange', 'defaultBlue']
  const [picture, setPicture] = useState(null)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    setPicture(null)
    setImgData(null)
    changeSelectedImage('')
  }, [isEditing])

  const selectedImgJSX =
      imgData === null ? (
          <>
            <UploadSymbol />
            <p style={{ margin: '0', marginTop: '12px' }}>Drop here or click to upload</p>
          </>
      ) : (
          <div>{picture === null ? '' : picture.name}</div>
      )

  const getServedProfilePic = () => {
    // if we have no picture chosen, choose team image.
    // if we dont have image, choose temp
    if (picture === null && selectedImage === '') {
      return tempImg
    }

    // if we have a default, choose default
    if (selectedImage !== '') {
      return require(`../../../assets/defaults/${defaultTeamImages[selectedImage]}.png`)
    }

    if (picture !== null) {
      return imgData
    }
  }

  const servedProfilePic = getServedProfilePic()
  // END IMAGES
  console.log({servedProfilePic})
  const handleClose = () => {
    setOpen(false)
    setInviteActive(false)
    setDeleteActive(false)
    setLeaveActive(false)
    setRemoveMemberActive('')
    setTransferActive(false)
    changeChosenLeader({ username: '', id: '' })
  }

  const { enqueueSnackbar } = useSnackbar()
  const handleDelete = () => deleteTeam(team?._id)

  const handleLeave = () => {
    leaveTeam({
      user_id: user?._id,
      teamid: team?._id,
    })
    handleClose()
  }

  const handleTransfer = () => {
    transferLeader({
      leader_id: team.leader._id,
      new_leader_id: chosenLeader.id,
      teamid: team._id,
    })

    setIsEditing(false)
    handleClose()
  }

  const removeMember = () => {
    removeFromTeam({
      user_id: removeMemberActive,
      teamid: team?._id,
    })
    handleClose()
  }

  const handleOpenInvite = () => {
    setOpen(true)
    setInviteActive(true)
  }

  const handleOpenDelete = () => {
    setOpen(true)
    setDeleteActive(true)
  }

  const handleOpenLeave = () => {
    setOpen(true)
    setLeaveActive(true)
  }

  const handleRemoveMembers = (member) => {
    setOpen(true)
    setRemoveMemberActive(member)
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

  if (isUserTeamLoading || isDeleting || isLeaving || isRemoving || isTransferring || isUpdatingTeamsAvatar) {
    return <Loader />
  }

  const noTeam = (
      <Center>
        <Text fontWeight="600" fontSize="24px" margin="0 0 8px 0">
          You don't have a team yet!
        </Text>
        <Text fontSize="16px" margin="0 0 8px 0">
          You can create a new team or join an existing team.
        </Text>
        <Link to={'/create-team'}>
          <CreateTeam>Create Team</CreateTeam>
        </Link>
        <TeamButton
            onClick={() => {
              navigate('/teams')
            }}
        >
          Join Team
        </TeamButton>
      </Center>
  )

  if (team === undefined) {
    return <Container>{noTeam}</Container>
  }

  const membersVar = (
      <Members
          chosenLeader={chosenLeader}
          changeChosenLeader={changeChosenLeader}
          handleRemoveMembers={handleRemoveMembers}
          isEditing={isEditing}
          team={team}
          selectLeader={selectLeader}
          openSelectLeader={openSelectLeader}
      />
  )
  const about = (
      <About
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleOpenDelete={handleOpenDelete}
          team={team}
      />
  )

  const removeMemberModal = (
      <TeamActionModal
          firstText="Remove Member"
          secondText="Are you sure you want to remove member from team?"
          firstButton="Remove"
          firstButtonHandler={removeMember}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
      />
  )

  const leaderOrMemberAction = (
      <>
        {team.leader._id === user._id ? (
            <LeaderActionsBox opacity={!isEditing || isMembers || editImage}>
              <EditTeam
                  onClick={() => {
                    if (!isEditing) {
                      // only update state if you are not editing
                    } else {
                      updateTeamsAvatar({ teamID: team._id, image: servedProfilePic.split(',')[1] })
                    }
                    setIsEditing((prevState) => {
                      return !prevState
                    })
                  }}
              >
                {isEditing ? 'Save' : 'Edit'}
              </EditTeam>
              {loading ? Loader : <></>}
              <LeaveTeam
                  height="40px"
                  onClick={() => {
                    if (isEditing) {
                      setIsEditing((prevState) => !prevState)
                    } else {
                      handleOpenDelete()
                    }
                  }}
                  marginTop="0"
              >
                {isEditing ? 'Cancel' : 'Delete'}
              </LeaveTeam>
            </LeaderActionsBox>
        ) : (
            <LeaveTeam onClick={handleOpenLeave}>Leave Team</LeaveTeam>
        )}
      </>
  )

  const canDelete =
      team.members.length > 1 ? (
          <TeamActionModal
              firstText="You can't delete team"
              secondText="Before deleting team, you must delete all members"
              firstButton="Okay"
              firstButtonHandler={handleClose}
          />
      ) : (
          <TeamActionModal
              firstText="Delete Team"
              secondText="Are you sure you want to delete?"
              firstButton="Delete"
              firstButtonHandler={handleDelete}
              secondButton="Cancel"
              secondButtonHandler={handleClose}
          />
      )

  const updateImageContainer = (
      <FormikContainer>
        <Formik
            initialValues={{
              image: '',
              default: '',
            }}
            onSubmit={(values, actions) => {}}
        >
          {({ values, dirty, resetForm }) => {
            return (
                <Form
                    style={{
                      marginTop: '8px',
                      color: '#FFFFFF',
                    }}
                    id="saveForm"
                >
                  <label htmlFor="defaults" style={{ marginBottom: '16px', display: 'inline-block' }}>
                    Select a default
                  </label>
                  <MyRadioGroup
                      name="default"
                      onClick={(e) => {
                        const pic = e.target.dataset.pic

                        if (pic === undefined) {
                          return
                        }
                        const nextPic = pic === selectedImage ? '' : pic

                        setPicture(null)
                        setImgData(null)
                        changeSelectedImage(nextPic)
                      }}
                  >
                    {defaultTeamImages.map((image, key) => (
                        <ImageBox key={key} myKey={String(key) === selectedImage}>
                          <DefaultImg
                              data-pic={key}
                              src={require(`../../../assets/defaults/${image}.png`)}
                          />
                          <span>
                      <CheckCircle />
                    </span>
                        </ImageBox>
                    ))}
                  </MyRadioGroup>

                  <label htmlFor="image" style={{ marginBottom: '16px', display: 'inline-block' }}>
                    Or add your own
                  </label>
                  <Field
                      style={{
                        color: '#FFF',
                        border: 'none',
                        padding: '8px 4px',
                        borderBottom: '1px solid #86878B',
                        width: `98%`,
                        transition: 'all .2s',
                        // display: 'none',
                        position: 'absolute',
                        opacity: '0',
                        pointerEvents: 'none',
                      }}
                      type="file"
                      id="image"
                      name="image"
                      onChange={(ev) => {
                        ev.preventDefault()
                        const file = ev.target.files[0]

                        // do not accept HEIC
                        if (String(file.name).includes('HEIC') || String(file.name).includes('heic')) {
                          return
                        }
                        setPicture(file)
                        const reader = new FileReader()

                        reader.addEventListener('load', () => {
                          changeSelectedImage('')
                          setImgData(reader.result)
                        })
                        reader.readAsDataURL(file)
                      }}
                  />
                  <FileButton
                      onClick={(ev) => {
                        ev.preventDefault()
                        document.querySelector('#image').click()
                      }}
                      onDrop={(ev) => {
                        ev.preventDefault()

                        if (ev.dataTransfer.items) {
                          // Use DataTransferItemList interface to access the file(s)
                          ;[...ev.dataTransfer.items].forEach((item, i) => {
                            // If dropped items aren't files, reject them
                            if (item.kind === 'file') {
                              const file = item.getAsFile()

                              // do not accept HEIC
                              if (
                                  String(file.name).includes('HEIC') ||
                                  String(file.name).includes('heic')
                              ) {
                                return
                              }
                              setPicture(file)
                              const reader = new FileReader()

                              reader.readAsDataURL(file)
                              reader.addEventListener('load', () => {
                                changeSelectedImage('')
                                setImgData(reader.result)
                              })
                            }
                          })
                        } else {
                          // Use DataTransfer interface to access the file(s)
                          ;[...ev.dataTransfer.files].forEach((file, i) => {
                            // console.log(`… file[${i}].name = ${file.name}`)
                          })
                        }
                      }}
                      onDragOver={(e) => {
                        e.preventDefault()
                        document.querySelector('#image').click()
                      }}
                      dropzone="move"
                  >
                    {selectedImgJSX}
                  </FileButton>
                </Form>
            )
          }}
        </Formik>
      </FormikContainer>
  )

  // const aboutInput = !isMembers ? about : <></>
  const input = isMembers ? membersVar : about

  // const totalInput = <>{/* {aboutInput} {membersInput} */}</>

  const topContainer = (
      <TopContainer isMembers={isMembers}>
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
        </TabContainer>
        {isMembers && (
            <InviteButton onClick={handleOpenInvite}>
              <UserPlusContainer>
                <UserPlus />
              </UserPlusContainer>
              Invite
            </InviteButton>
        )}
      </TopContainer>
  )

  // by the modal logic, the default is the
  const aTeam = (
      <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CloseContainerModal onClick={handleClose}>
              <Close />
            </CloseContainerModal>
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
                <></>
            )}
            {deleteActive ? canDelete : <></>}
            {leaveActive ? (
                <TeamActionModal
                    firstText="Leave Team"
                    secondText="Are you sure you want to leave?"
                    firstButton="Leave"
                    firstButtonHandler={handleLeave}
                    secondButton="Cancel"
                    secondButtonHandler={handleClose}
                />
            ) : (
                <></>
            )}
            {transferActive ? (
                <TeamActionModal
                    firstText="Transfer leadership"
                    secondText={`Are you sure you want to transfer leadership to ${chosenLeader.username}? You will lose management rights.`}
                    firstButton="Confirm"
                    firstButtonHandler={handleTransfer}
                    secondButton="Cancel"
                    secondButtonHandler={handleClose}
                />
            ) : (
                <></>
            )}
            {removeMemberActive ? removeMemberModal : <></>}
          </Box>
        </Modal>
        <CardContainer>
          <Card>
            {editImage ? <></> : topContainer}
            <>{editImage ? updateImageContainer : input}</>
          </Card>
          <RightContainer>
            <TeamInformationContainer>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '100px', height: '124px' }}>
                  <TeamImgBorder
                      alt={team.username}
                      src={
                        picture !== null || selectedImage !== ''
                            ? servedProfilePic
                            : LOCAL_PATH + '/' + team?.image
                      } // not currently
                  />
                  {isEditing ? (
                      <EditImageButton
                          editImage={editImage}
                          onClick={() => {
                            setEditImage((prevState) => !prevState)
                          }}
                      >
                        <PencilSimple />
                      </EditImageButton>
                  ) : (
                      <></>
                  )}
                  <CrownContainer2>
                    <Crown />
                  </CrownContainer2>
                </div>
              </div>
              <Text
                  margin="0 0 17px 0"
                  fontSize={`${H4fs}`}
                  lineHeight={`${H4lh}`}
                  fontWeight={`${H4fw}`}
              >
                {team.name}
              </Text>
              <SVGAndText margin="0 0 17px 0">
                <CakeBox>
                  <Cake />
                </CakeBox>
                <Text
                    margin="0 0 0 0"
                    fontSize={`${B2fs}`}
                    lineHeight={`${B2lh}`}
                    fontWeight={`${B2fw}`}
                >
                  {team.createdAt.split('T')[0]}
                </Text>
              </SVGAndText>
              <SVGAndText>
                <CakeBox>
                  <Users />
                </CakeBox>
                <Text fontSize={`${B2fs}`} lineHeight={`${B2lh}`} fontWeight={`${B2fw}`}>
                  {team.members.length}/8
                </Text>
              </SVGAndText>
            </TeamInformationContainer>
            {leaderOrMemberAction}
          </RightContainer>
        </CardContainer>
      </>
  )

  return (
      <Container>
        {aTeam}

        <CssBaseline />
      </Container>
  )
}

export default TeamForm
