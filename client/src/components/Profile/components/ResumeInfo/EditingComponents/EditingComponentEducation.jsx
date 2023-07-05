import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { FieldArray, useFormikContext } from 'formik'

import { useEditUserDetails } from '../../../../../shared/api/hooks/user/useEditUserDetails'
import LongArrowLeft from '../../../../../shared/assets/Arrows/LongArrowLeft'
import CrossIcon from '../../../../../shared/assets/UserProfile/CrossIcon'
import EditIcon from '../../../../../shared/assets/UserProfile/EditIcon'
import PlusIconWhite from '../../../../../shared/assets/UserProfile/PlusIconWhite'
import FlexWrapper from '../../../../../shared/ui/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../shared/ui/Formik/CustomInput/CustomInput'
import ModalComponent from '../../../../../shared/ui/Modal/Modal'
import { ActionButton, EditIconContainer, Text } from '../ResumeInfo.styles'

function EditingComponentEducation({ handleBack, showingUser }) {
  const [modalActive, setModalActive] = useState('')
  const { values, setFieldValue, resetForm } = useFormikContext()
  const [currentAction, setCurrentAction] = useState('main') // 'main', 'editing', 'adding'
  const [index, setIndex] = useState(0)

  const handleReset = () => {
    setModalActive('')
    setCurrentAction('main')
  }

  const { mutate: editUserDetails, isLoading } = useEditUserDetails(handleReset)

  const handleRemoveUniversity = () => {
    const universities = [...values.universityData]

    const updatedUniversityData = universities.filter((_, i) => i !== index)

    setFieldValue('universityData', updatedUniversityData)

    editUserDetails({ email: showingUser.email, universityData: updatedUniversityData })
  }

  const handleEditUniversity = (index) => {
    setIndex(index)
    setCurrentAction('editing')
  }

  const submitEditUniversity = () => {
    editUserDetails({ email: showingUser.email, universityData: values.universityData })
  }

  const handleOpenModal = (index) => {
    setModalActive('DeleteUniversity')
    setIndex(index)
  }

  const handleClose = () => {
    setModalActive('')
  }

  const handleCancel = () => {
    setCurrentAction('main')
    resetForm()
  }

  return (
    <>
      <ModalComponent
        modalActive={modalActive}
        open={modalActive !== ''}
        handleClose={handleClose}
        handleAction={handleRemoveUniversity}
        isLoading={isLoading}
      />
      <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
        <Text fontSize="20px" color="#5BD424" fontWeight="500">
          Education
        </Text>
        {currentAction === 'main' && (
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
                          {university?.graduationDate?.split('-')[0]}
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
        )}

        {currentAction === 'editing' && (
          <>
            <FlexWrapper direction="column" gap="32px" height="100%" width="100%">
              <CustomInput
                name={`universityData[${index}].degree`}
                label="Degree"
                type="text"
                containerWidth="100%"
                placeholder="Degree"
                value={values.universityData[index].degree}
              />
              <CustomInput
                name={`universityData[${index}].major`}
                label="Major"
                type="text"
                containerWidth="100%"
                placeholder="Major"
                value={values.universityData[index].major}
              />
              <CustomInput
                name={`universityData[${index}].university`}
                label="University"
                type="text"
                containerWidth="100%"
                placeholder="University"
                value={values.universityData[index].university}
              />
              <FlexWrapper width="100%" justify="space-between" gap="24px">
                <CustomInput
                  name={`universityData[${index}].addmissionDate`}
                  label="From"
                  type="text"
                  containerWidth="100%"
                  placeholder="From"
                  value={values.universityData[index].addmissionDate}
                />
                <CustomInput
                  name={`universityData[${index}].graduationDate`}
                  label="To"
                  type="text"
                  containerWidth="100%"
                  placeholder="To"
                  value={values.universityData[index].graduationDate}
                />
              </FlexWrapper>
              <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0">
                <ActionButton type="button" onClick={handleCancel}>
                  Cancel
                </ActionButton>
                <ActionButton
                  type="button"
                  border="none"
                  background="#46A11B"
                  onClick={submitEditUniversity}
                >
                  {isLoading ? (
                    <ThreeDots
                      height="24"
                      width="24"
                      radius="9"
                      color="white"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  ) : (
                    'Save'
                  )}
                </ActionButton>
              </FlexWrapper>
            </FlexWrapper>
          </>
        )}

        {currentAction === 'adding' && (
          <>
            <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
              <CustomInput
                name={`universityData[${values?.universityData?.length - 1}].degree`}
                label="Degree"
                type="text"
                containerWidth="100%"
                placeholder="Degree"
              />
              <CustomInput
                name={`universityData[${values?.universityData?.length - 1}].major`}
                label="Major"
                type="text"
                containerWidth="100%"
                placeholder="Major"
              />
              <CustomInput
                name={`universityData[${values?.universityData?.length - 1}].university`}
                label="University"
                type="text"
                containerWidth="100%"
                placeholder="University"
              />
              <FlexWrapper width="100%" justify="space-between" gap="24px">
                <CustomInput
                  name={`universityData[${values?.universityData?.length - 1}].addmissionDate`}
                  label="From"
                  type="text"
                  containerWidth="100%"
                  placeholder="From"
                />
                <CustomInput
                  name={`universityData[${values?.universityData?.length - 1}].graduationDate`}
                  label="To"
                  type="text"
                  containerWidth="100%"
                  placeholder="To"
                />
              </FlexWrapper>
              <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0">
                <ActionButton type="button" onClick={handleCancel}>
                  Cancel
                </ActionButton>
                <ActionButton
                  type="button"
                  border="none"
                  background="#46A11B"
                  onClick={submitEditUniversity}
                >
                  {isLoading ? (
                    <ThreeDots
                      height="24"
                      width="24"
                      radius="9"
                      color="white"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  ) : (
                    'Save'
                  )}
                </ActionButton>
              </FlexWrapper>
            </FlexWrapper>
          </>
        )}
      </FlexWrapper>
    </>
  )
}

export default EditingComponentEducation
