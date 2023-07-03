import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { FieldArray, useFormikContext } from 'formik'

import LongArrowLeft from '../../../../../assets/Arrows/LongArrowLeft'
import CrossIcon from '../../../../../assets/UserProfile/CrossIcon'
import EditIcon from '../../../../../assets/UserProfile/EditIcon'
import PlusIconWhite from '../../../../../assets/UserProfile/PlusIconWhite'
import { useEditUserDetails } from '../../../../../shared/api/hooks/user/useEditUserDetails'
import FlexWrapper from '../../../../../shared/ui/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../shared/ui/Formik/CustomInput/CustomInput'
import ModalComponent from '../../../../../shared/ui/Modal/Modal'
import { ActionButton, EditIconContainer, Text } from '../ResumeInfo.styles'

function EditingComponentProjects({ handleBack, showingUser }) {
  const [modalActive, setModalActive] = useState('')
  const { values, setFieldValue, resetForm } = useFormikContext()
  const [currentAction, setCurrentAction] = useState('main') // 'main', 'editing', 'adding'
  const [index, setIndex] = useState(0)

  const handleReset = () => {
    setModalActive('')
    setCurrentAction('main')
  }

  const { mutate: editUserDetails, isLoading } = useEditUserDetails(handleReset)

  const handleRemoveProject = () => {
    const projects = [...values.projectData]

    const updatedProjects = projects.filter((_, i) => i !== index)

    setFieldValue('projectData', updatedProjects)

    editUserDetails({ email: showingUser.email, projectData: updatedProjects })
  }

  const handleEditProject = (index) => {
    setIndex(index)
    setCurrentAction('editing')
  }

  const submitEditProject = () => {
    editUserDetails({ email: showingUser.email, projectData: values.projectData })
  }

  const handleOpenModal = (index) => {
    setModalActive('DeleteProject')
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
        handleAction={handleRemoveProject}
        isLoading={isLoading}
      />
      <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
        <Text fontSize="20px" color="#5BD424" fontWeight="500">
          Projects
        </Text>
        {currentAction === 'main' && (
          <FieldArray name="projectData">
            {({ push, remove }) => (
              <>
                {values?.projectData?.length > 0 ? (
                  values?.projectData.map((project, index) => (
                    <FlexWrapper key={index} width="100%" justify="space-between">
                      <FlexWrapper direction="column">
                        <Text fontSize="16px" fontWeight="400">
                          {project.title}
                        </Text>
                        <Text fontSize="14px" fontWeight="400" color="#8F9094">
                          {project.link}
                        </Text>
                      </FlexWrapper>
                      <FlexWrapper>
                        <EditIconContainer
                          fill={true.toString()}
                          onClick={() => handleEditProject(index)}
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
                    No projects added yet.
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
                      push({ title: '', link: '' })
                      setCurrentAction('adding')
                    }}
                    type="button"
                    disabled={values.projectData.length === 5 ? true : false}
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
            <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
              <CustomInput
                name={`projectData[${index}].title`}
                label="Project title"
                type="text"
                containerWidth="100%"
                placeholder="Input title"
                value={values.projectData[index].title}
              />
              <CustomInput
                name={`projectData[${index}].link`}
                label="Project link"
                type="text"
                containerWidth="100%"
                placeholder="Add link"
                value={values.projectData[index].link}
              />
              <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0">
                <ActionButton type="button" onClick={handleCancel}>
                  Cancel
                </ActionButton>
                <ActionButton
                  type="button"
                  border="none"
                  background="#46A11B"
                  onClick={submitEditProject}
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
                name={`projectData[${values?.projectData?.length - 1}].title`}
                label="Project title"
                type="text"
                containerWidth="100%"
                placeholder="Input title"
              />
              <CustomInput
                name={`projectData[${values?.projectData?.length - 1}].link`}
                label="Project link"
                type="text"
                containerWidth="100%"
                placeholder="Add link"
              />
              <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0">
                <ActionButton type="button" onClick={handleCancel}>
                  Cancel
                </ActionButton>
                <ActionButton
                  type="button"
                  border="none"
                  background="#46A11B"
                  onClick={submitEditProject}
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

export default EditingComponentProjects
