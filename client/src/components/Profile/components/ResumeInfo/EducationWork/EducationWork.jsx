import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import { Text } from '../ResumeInfo.styles'

const EducationWork = ({ showingUser }) => {
  return (
    <>
      <FlexWrapper direction="column" gap="16px" width="100%">
        <Text fontSize="16px" fontWeight="400">
          Education
        </Text>
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
                {university?.graduationDate?.split('-')[0]}
              </Text>
            </FlexWrapper>
          ))
        ) : (
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            User has no education.
          </Text>
        )}
        {/* <FlexWrapper direction="column">
          <Text fontSize="14px" fontWeight="400">
            Bachelor’s Degree - Economics and Managment
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            National University of Food Technologies
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            2019-2023
          </Text>
        </FlexWrapper>
        <FlexWrapper direction="column">
          <Text fontSize="14px" fontWeight="400">
            Bachelor’s Degree - Economics and Managment
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            National University of Food Technologies
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            2019-2023
          </Text>
        </FlexWrapper> */}
      </FlexWrapper>
      <FlexWrapper direction="column" height="100%" gap="16px">
        <Text fontSize="16px" fontWeight="400">
          Work experience
        </Text>
        {showingUser?.jobData?.length > 0 ? (
          showingUser?.jobData.map((job, index) => (
            <FlexWrapper direction="column" key={index}>
              <Text fontSize="14px" fontWeight="400">
                {job.title} - {job.company}
              </Text>
              <Text fontSize="14px" fontWeight="400" color="#8F9094">
                {job.startDate.split('-')[0]} - {job.endDate.split('-')[0]}
              </Text>
            </FlexWrapper>
          ))
        ) : (
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            User has no working experience.
          </Text>
        )}
        {/* <FlexWrapper direction="column">
          <Text fontSize="14px" fontWeight="400">
            Front-end Developer - Team8s StartUp
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            2019-2023
          </Text>
        </FlexWrapper>
        <FlexWrapper direction="column">
          <Text fontSize="14px" fontWeight="400">
            UX/UI designer - League Agency
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            2019-2023
          </Text>
        </FlexWrapper> */}
      </FlexWrapper>
    </>
  )
}

export default EducationWork
