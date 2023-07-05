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

function EditingComponentEducation({ handleBack, showingUser }) {
  const [modalActive, setModalActive] = useState('')
  const { values, setFieldValue, resetForm, validateForm, setErrors } = useFormikContext()
  const [currentAction, setCurrentAction] = useState('main') // 'main', 'editing', 'adding'
  const [index, setIndex] = useState(0)
  const [checkbox, setCheckbox] = useState(false)

  useEffect(() => {
    values && values?.universityData[index]?.graduationDate === null
      ? setCheckbox(true)
      : setCheckbox(false)
  }, [index, values?.universityData[index]?.graduationDate])

  const handleReset = () => {
    setModalActive('')
    setCurrentAction('main')
    setIndex(0)
  }

  const { mutate: editUserDetails, isLoading } = useEditUserDetails(handleReset)

  const handleRemoveUniversity = () => {
    const universities = [...values.universityData]

    const updatedUniversityData = universities.filter((_, i) => i !== index)

    setFieldValue('universityData', updatedUniversityData)

    editUserDetails({ email: showingUser.email, universityData: updatedUniversityData })
    setIndex(0)
  }

  const handleEditUniversity = (index) => {
    setIndex(index)
    setCurrentAction('editing')
  }

  const submitEditUniversity = async () => {
    const validation = await validateForm()

    if (!validation?.universityData) {
      const initialObject = cloneDeep(values.universityData)

      initialObject[index].addmissionDate = new Date(
        String(initialObject[index].addmissionDate),
      ).toISOString()
      initialObject[index].graduationDate = initialObject[index].graduationDate
        ? new Date(String(initialObject[index].graduationDate)).toISOString()
        : null

      setFieldValue(`universityData[${index}].addmissionDate`, initialObject[index].addmissionDate)
      setFieldValue(`universityData[${index}].graduationDate`, initialObject[index].graduationDate)

      editUserDetails({ email: showingUser.email, universityData: initialObject })
      setIndex(0)
    } else {
      setErrors({ universityData: validation.universityData[index] })
      errorToaster('Fill in data before submission!')
    }
  }

  const handleOpenModal = (index) => {
    setModalActive('DeleteUniversity')
    setIndex(index)
  }

  const handleClose = () => {
    setModalActive('')
    setIndex(0)
  }

  const handleCancel = () => {
    setCurrentAction('main')
    resetForm()
    setIndex(0)
  }

  const handleClick = () => {
    if (checkbox) {
      setCheckbox(false)
      setFieldValue(`universityData[${index}].graduationDate`, '')
    } else {
      setCheckbox(true)
      setFieldValue(`universityData[${index}].graduationDate`, null)
    }
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
          <Main
            values={values}
            handleEditUniversity={handleEditUniversity}
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
            isLoading={isLoading}
            handleCancel={handleCancel}
            submitEditUniversity={submitEditUniversity}
            checkbox={checkbox}
            handleClick={handleClick}
          />
        )}

        {currentAction === 'adding' && (
          <Adding
            handleCancel={handleCancel}
            submitEditUniversity={submitEditUniversity}
            isLoading={isLoading}
            handleClick={handleClick}
            checkbox={checkbox}
            index={index}
          />
        )}
      </FlexWrapper>
    </>
  )
}

export default EditingComponentEducation
