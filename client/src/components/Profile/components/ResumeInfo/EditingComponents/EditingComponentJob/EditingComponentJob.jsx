import { useEffect, useState } from 'react'
import { useFormikContext } from 'formik'
import { cloneDeep } from 'lodash'

import { useEditUserDetails } from '../../../../../../api/hooks/user/useEditUserDetails'
import FlexWrapper from '../../../../../../shared/components/FlexWrapper/FlexWrapper'
import ModalComponent from '../../../../../../shared/components/Modal/Modal'
import { errorToaster } from '../../../../../../shared/components/Toasters/Error.toaster'
import { Text } from '../../ResumeInfo.styles'

import Adding from './States/Adding'
import Editing from './States/Editing'
import Main from './States/Main'

function EditingComponentJob({ handleBack, showingUser }) {
  const [modalActive, setModalActive] = useState('')
  const { values, setFieldValue, resetForm, validateForm, setErrors } = useFormikContext()
  const [currentAction, setCurrentAction] = useState('main') // 'main', 'editing', 'adding'
  const [index, setIndex] = useState(0)
  const [checkbox, setCheckbox] = useState(false)

  useEffect(() => {
    console.log(index)
    values && values?.jobData[index]?.endDate === null ? setCheckbox(true) : setCheckbox(false)
  }, [index])

  const handleReset = () => {
    setModalActive('')
    setCurrentAction('main')
  }

  const { mutate: editUserDetails, isLoading } = useEditUserDetails(handleReset)

  const handleRemoveJob = () => {
    const jobs = [...values.jobData]

    const updatedJobData = jobs.filter((_, i) => i !== index)

    setFieldValue('jobData', updatedJobData)
    setIndex((prev) => prev - 1)

    editUserDetails({ email: showingUser.email, jobData: updatedJobData })
  }

  const handleEditJob = (index) => {
    setIndex(index)
    setCurrentAction('editing')
  }

  const submitEditJob = async () => {
    const validation = await validateForm()

    if (!validation?.jobData) {
      const initialObject = cloneDeep(values.jobData)

      initialObject[index].startDate = new Date(
        String(initialObject[index].startDate),
      ).toISOString()
      initialObject[index].endDate = initialObject[index].endDate
        ? new Date(String(initialObject[index].endDate)).toISOString()
        : null

      setFieldValue(`jobData[${index}].startDate`, initialObject[index].startDate)
      setFieldValue(`jobData[${index}].endDate`, initialObject[index].endDate)

      editUserDetails({ email: showingUser.email, jobData: initialObject })
    } else {
      setErrors({ jobData: validation.jobData[index] })
      errorToaster('Fill in data before submission!')
    }
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
    setIndex(0)
  }

  const handleClick = () => {
    if (checkbox) {
      setCheckbox(false)
      setFieldValue(`jobData[${index}].endDate`, '')
    } else {
      setCheckbox(true)
      setFieldValue(`jobData[${index}].endDate`, null)
    }
  }

  return (
    <>
      <ModalComponent
        modalActive={modalActive}
        open={modalActive !== ''}
        handleClose={handleClose}
        handleAction={handleRemoveJob}
        isLoading={isLoading}
      />
      <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
        <Text fontSize="20px" color="#5BD424" fontWeight="500">
          Work Experience
        </Text>
        {currentAction === 'main' && (
          <Main
            values={values}
            handleEditJob={handleEditJob}
            handleOpenModal={handleOpenModal}
            handleBack={handleBack}
            setCurrentAction={setCurrentAction}
            setIndex={setIndex}
            index={index}
          />
        )}

        {currentAction === 'editing' && (
          <Editing
            index={index}
            checkbox={checkbox}
            handleCancel={handleCancel}
            handleClick={handleClick}
            submitEditJob={submitEditJob}
            isLoading={isLoading}
          />
        )}

        {currentAction === 'adding' && (
          <Adding
            handleCancel={handleCancel}
            submitEditJob={submitEditJob}
            isLoading={isLoading}
            checkbox={checkbox}
            handleClick={handleClick}
            index={index}
          />
        )}
      </FlexWrapper>
    </>
  )
}

export default EditingComponentJob
