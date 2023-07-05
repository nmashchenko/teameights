import EditIcon from '../../../../../shared/assets/UserProfile/EditIcon'
import FlexWrapper from '../../../../../shared/ui/FlexWrapper/FlexWrapper'
import { EditIconContainer, Text } from '../ResumeInfo.styles'

const EducationWork = ({ showingUser, setIsEditing, userStatus }) => {
  return (
    <>
      <FlexWrapper direction="column" gap="16px" width="100%">
        <FlexWrapper width="100%" justify="space-between" align="center">
          <Text fontSize="16px" fontWeight="400">
            Education
          </Text>
          {userStatus === 'same' && (
            <EditIconContainer onClick={() => setIsEditing('education')} fill={true.toString()}>
              <EditIcon />
            </EditIconContainer>
          )}
        </FlexWrapper>
        {showingUser?.universityData?.length > 0 ? (
          showingUser?.universityData.map((university, index) => (
            <FlexWrapper direction="column" gap="8px" key={index}>
              <Text fontSize="14px" fontWeight="400">
                {university.degree} - {university.major}
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#8F9094">
                {university.university}
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#8F9094">
                {university?.addmissionDate?.split('-')[0]} -{' '}
                {university?.addmissionDate && !university?.graduationDate
                  ? 'Present'
                  : university?.graduationDate?.split('-')[0]}
              </Text>
            </FlexWrapper>
          ))
        ) : (
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            User has no education.
          </Text>
        )}
      </FlexWrapper>
      <FlexWrapper direction="column" gap="16px">
        <FlexWrapper width="100%" justify="space-between" align="center">
          <Text fontSize="16px" fontWeight="400">
            Work experience
          </Text>
          {userStatus === 'same' && (
            <EditIconContainer onClick={() => setIsEditing('work')} fill={true.toString()}>
              <EditIcon />
            </EditIconContainer>
          )}
        </FlexWrapper>
        {showingUser?.jobData?.length > 0 ? (
          showingUser?.jobData.map((job, index) => (
            <FlexWrapper direction="column" key={index}>
              <Text fontSize="14px" fontWeight="400">
                {job.title} - {job.company}
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#8F9094">
                {job?.startDate?.split('-')[0]} -{' '}
                {job?.startDate && !job?.endDate ? 'Present' : job?.endDate?.split('-')[0]}
              </Text>
            </FlexWrapper>
          ))
        ) : (
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            User has no working experience.
          </Text>
        )}
      </FlexWrapper>
    </>
  )
}

export default EducationWork
