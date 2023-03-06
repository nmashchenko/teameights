import { CancelButton, LeaveTeam, Text } from './TeamForm.styles'

const TeamActionModal = ({
  firstText,
  secondText,
  firstButton,
  firstButtonHandler,
  secondButton,
  secondButtonHandler,
}) => {
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
