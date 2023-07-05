import { FieldArray } from 'formik'

import LongArrowLeft from '../../../../../../../assets/Arrows/LongArrowLeft'
import CrossIcon from '../../../../../../../assets/UserProfile/CrossIcon'
import EditIcon from '../../../../../../../assets/UserProfile/EditIcon'
import PlusIconWhite from '../../../../../../../assets/UserProfile/PlusIconWhite'
import FlexWrapper from '../../../../../../../shared/components/FlexWrapper/FlexWrapper'
import { ActionButton, EditIconContainer, Text } from '../../../ResumeInfo.styles'

const Main = ({
  values,
  handleEditJob,
  handleOpenModal,
  handleBack,
  setCurrentAction,
  setIndex,
}) => {
  return (
    <FieldArray name="jobData">
      {({ push, remove }) => (
        <>
          {values?.jobData?.length > 0 ? (
            values?.jobData.map((job, index) => (
              <FlexWrapper key={index} width="100%" justify="space-between">
                <FlexWrapper direction="column">
                  <Text fontSize="16px" fontWeight="400">
                    {job.title} - {job.company}
                  </Text>
                  <Text fontSize="14px" fontWeight="400" color="#8F9094">
                    {job?.startDate?.split('-')[0]} -{' '}
                    {job?.startDate && job?.endDate === null
                      ? 'Present'
                      : job?.endDate?.split('-')[0]}
                  </Text>
                </FlexWrapper>
                <FlexWrapper>
                  <EditIconContainer fill={true.toString()} onClick={() => handleEditJob(index)}>
                    <EditIcon />
                  </EditIconContainer>
                  <EditIconContainer
                    stroke={true.toString()}
                    onClick={() => handleOpenModal(index)}
                  >
                    <CrossIcon />
                  </EditIconContainer>
                </FlexWrapper>
              </FlexWrapper>
            ))
          ) : (
            <Text fontSize="14px" fontWeight="400" color="#8F9094">
              No jobs added yet.
            </Text>
          )}
          <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0 ">
            <ActionButton
              type="button"
              width="95px"
              border="2px solid #46A11B"
              onClick={handleBack}
            >
              <LongArrowLeft />
              Back
            </ActionButton>
            <ActionButton
              width="123px"
              border="none"
              background="#46A11B"
              onClick={() => {
                values.jobData.length !== 0 && setIndex((prev) => prev + 1)
                push({
                  title: '',
                  company: ``,
                  startDate: '',
                  endDate: '',
                })
                setCurrentAction('adding')
              }}
              type="button"
              disabled={values?.jobData?.length === 2 ? true : false}
            >
              Add new
              <PlusIconWhite />
            </ActionButton>
          </FlexWrapper>
        </>
      )}
    </FieldArray>
  )
}

export default Main
