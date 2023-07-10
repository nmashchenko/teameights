import { FieldArray } from 'formik'

import LongArrowLeft from '../../../../../../../assets/Arrows/LongArrowLeft'
import CrossIcon from '../../../../../../../assets/UserProfile/CrossIcon'
import EditIcon from '../../../../../../../assets/UserProfile/EditIcon'
import PlusIconWhite from '../../../../../../../assets/UserProfile/PlusIconWhite'
import FlexWrapper from '../../../../../../../shared/components/FlexWrapper/FlexWrapper'
import { ActionButton, EditIconContainer, Text } from '../../../ResumeInfo.styles'

const Main = ({
  values,
  handleEditUniversity,
  handleOpenModal,
  handleBack,
  setCurrentAction,
  setIndex,
  index,
}) => {
  return (
    <FieldArray name="universityData">
      {({ push, remove }) => (
        <>
          {values?.universityData?.length > 0 ? (
            values?.universityData.map((university, index) => (
              <FlexWrapper key={index} width="100%" justify="space-between">
                <FlexWrapper direction="column">
                  <Text fontSize="16px" fontWeight="400">
                    {university.degree} - {university.major}
                  </Text>
                  <Text fontSize="14px" fontWeight="400" color="#8F9094">
                    {university.university}
                  </Text>
                  <Text fontSize="14px" fontWeight="400" color="#8F9094">
                    {university?.addmissionDate?.split('-')[0]} -{' '}
                    {university?.addmissionDate && university?.graduationDate === null
                      ? 'Present'
                      : university?.graduationDate?.split('-')[0]}
                  </Text>
                </FlexWrapper>
                <FlexWrapper>
                  <EditIconContainer
                    fill={true.toString()}
                    onClick={() => handleEditUniversity(index)}
                  >
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
              No universities added yet.
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
                values.universityData.length !== 0 && setIndex((prev) => prev + 1)
                push({
                  university: '',
                  degree: ``,
                  major: '',
                  addmissionDate: '',
                  graduationDate: '',
                })
                setCurrentAction('adding')
              }}
              type="button"
              disabled={values.universityData.length === 2 ? true : false}
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
