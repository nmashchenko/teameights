import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { FieldArray, useFormikContext } from 'formik'

import { useEditUserDetails } from '../../../../../api/hooks/user/useEditUserDetails'
import LongArrowLeft from '../../../../../assets/Arrows/LongArrowLeft'
import CrossIcon from '../../../../../assets/UserProfile/CrossIcon'
import EditIcon from '../../../../../assets/UserProfile/EditIcon'
import PlusIconWhite from '../../../../../assets/UserProfile/PlusIconWhite'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import ModalComponent from '../../../../../shared/components/Modal/Modal'
import { ActionButton, EditIconContainer, Text } from '../ResumeInfo.styles'

function EditingComponentJob({ handleBack, showingUser }) {
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
    const jobs = [...values.jobData]

    const updatedJobData = jobs.filter((_, i) => i !== index)

    setFieldValue('jobData', updatedJobData)

    editUserDetails({ email: showingUser.email, jobData: updatedJobData })
  }

  const handleEditJob = (index) => {
    setIndex(index)
    setCurrentAction('editing')
  }

  const submitEditJob = () => {
    editUserDetails({ email: showingUser.email, jobData: values.jobData })
  }

  const handleOpenModal = (index) => {
    setModalActive('DeleteJob')
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
          Work Experience
        </Text>
        {currentAction === 'main' && (
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
                          {job.startDate.split('-')[0]} - {job.endDate.split('-')[0]}
                        </Text>
                      </FlexWrapper>
                      <FlexWrapper>
                        <EditIconContainer
                          fill={true.toString()}
                          onClick={() => handleEditJob(index)}
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
                      push({
                        title: '',
                        company: ``,
                        startDate: '',
                        endDate: '',
                      })
                      setCurrentAction('adding')
                    }}
                    type="button"
                    disabled={values.jobData.length === 2 ? true : false}
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
                name={`jobData[${index}].title`}
                label="Job Title"
                type="text"
                containerWidth="100%"
                placeholder="Ex: Data Scientist"
                value={values.jobData[index].title}
              />
              <CustomInput
                name={`jobData[${index}].company`}
                label="Company"
                type="text"
                containerWidth="100%"
                placeholder="Ex: Teameights"
                value={values.jobData[index].company}
              />
              <FlexWrapper width="100%" justify="space-between" gap="24px">
                <CustomInput
                  name={`jobData[${index}].startDate`}
                  label="From"
                  type="text"
                  containerWidth="100%"
                  placeholder="Input year"
                  value={values.jobData[index].startDate}
                />
                <CustomInput
                  name={`jobData[${index}].endDate`}
                  label="To"
                  type="text"
                  containerWidth="100%"
                  placeholder="Input year"
                  value={values.jobData[index].endDate}
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
                  onClick={submitEditJob}
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
                name={`jobData[${values?.jobData?.length - 1}].title`}
                label="Job Title"
                type="text"
                containerWidth="100%"
                placeholder="Ex: Data Scientist"
              />
              <CustomInput
                name={`jobData[${values?.jobData?.length - 1}].company`}
                label="Company"
                type="text"
                containerWidth="100%"
                placeholder="Ex: Teameights"
              />
              <FlexWrapper width="100%" justify="space-between" gap="24px">
                <CustomInput
                  name={`jobData[${values?.jobData?.length - 1}].startDate`}
                  label="From"
                  type="text"
                  containerWidth="100%"
                  placeholder="Input year"
                />
                <CustomInput
                  name={`jobData[${values?.jobData?.length - 1}].endDate`}
                  label="To"
                  type="text"
                  containerWidth="100%"
                  placeholder="Input year"
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
                  onClick={submitEditJob}
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

export default EditingComponentJob
