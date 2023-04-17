import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

const CurrentStep = ({ step, steps }) => {
  const { setTouched } = useFormikContext()

  useEffect(() => {
    setTouched({})
  }, [step])
  const currentStep = steps[step - 1]

  return currentStep ? currentStep.component : <Navigate to="/not-found" />
}

export default CurrentStep
