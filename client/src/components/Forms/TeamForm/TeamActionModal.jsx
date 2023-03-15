import { CancelButton, EditTeam, LeaveTeam, Text } from './TeamForm.styles'

const TeamActionModal = ({
  firstText,
  secondText,
  firstButton,
  firstButtonHandler,
  secondButton,
  secondButtonHandler,
}) => {
  if (firstButton === 'Okay') {
    return (
      <>
        <Text fontWeight="600" fontSize="24px" margin={`${86 - 16}px 0 0 0`}>
          {firstText}
        </Text>
        <Text fontSize="16px" lineHeight="22px" margin="12px 0 0 0">
          {secondText}
        </Text>
        <EditTeam marginTop="24px" width="100%" onClick={firstButtonHandler}>
          {firstButton}
        </EditTeam>
      </>
    )
  }

  return (
    <>
      <Text fontWeight="600" fontSize="24px" margin={`${86 - 16}px 0 0 0`}>
        {firstText}
      </Text>
      <Text fontSize="16px" lineHeight="22px" margin="12px 0 0 0">
        {secondText}
      </Text>
      <LeaveTeam onClick={firstButtonHandler}>{firstButton}</LeaveTeam>
      <CancelButton onClick={secondButtonHandler}>{secondButton}</CancelButton>
    </>
  )
}

export default TeamActionModal
