import { B2fs, B2fw, B2lh, H3fs, H3fw, H3lh } from '../../../assets/fonts'

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div>
          <Text
            fontSize={`${H3fs}`}
            lineHeight={`${H3lh}`}
            fontWeight={`${H3fw}`}
            margin={`0 0 0 0`}
          >
            {firstText}
          </Text>
          <Text
            fontSize={`${B2fs}`}
            lineHeight={`${B2lh}`}
            fontWeight={`${B2fw}`}
            margin="12px 0 0 0"
          >
            {secondText}
          </Text>
          <EditTeam marginTop="24px" width="100%" onClick={firstButtonHandler}>
            {firstButton}
          </EditTeam>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Text fontWeight="600" fontSize="24px" lineHeight="var(--H3-lh)" margin={`0 0 0 0`}>
        {firstText}
      </Text>
      <Text fontSize="16px" lineHeight="22px" margin="8px 0 0 0">
        {secondText}
      </Text>
      <LeaveTeam onClick={firstButtonHandler}>{firstButton}</LeaveTeam>
      <CancelButton onClick={secondButtonHandler}>{secondButton}</CancelButton>
    </div>
  )
}

export default TeamActionModal
