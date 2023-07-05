import { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'

import CheckboxWithLabel from '../../../../../../../shared/components/CheckboxWithLabel/CheckboxWithLabel'
import FlexWrapper from '../../../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../../../shared/components/Formik/CustomInput/CustomInput'
import { ActionButton } from '../../../ResumeInfo.styles'

const Editing = ({ index, checkbox, handleCancel, handleClick, submitEditJob, isLoading }) => {
  const { setFieldValue, errors, values } = useFormikContext()

  useEffect(() => {
    setFieldValue(
      `jobData[${index}].startDate`,
      Number(values?.jobData[index]?.startDate?.slice(0, 4)),
    )

    if (values?.jobData[index]?.endDate) {
      setFieldValue(
        `jobData[${index}].endDate`,
        Number(values?.jobData[index]?.endDate.slice(0, 4)),
      )
    }
  }, [])

  return (
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
          maxLength={4}
        />
        {!checkbox && (
          <CustomInput
            name={`jobData[${index}].endDate`}
            label="To"
            type="text"
            containerWidth="100%"
            placeholder="Input year"
            maxLength={4}
          />
        )}
      </FlexWrapper>
      <CheckboxWithLabel
        label="I am still working here"
        value={checkbox}
        checked={checkbox}
        onChange={handleClick}
      />
      <FlexWrapper width="100%" justify="space-between">
        <ActionButton type="button" onClick={handleCancel}>
          Cancel
        </ActionButton>
        <ActionButton
          type="button"
          border="none"
          background="#46A11B"
          onClick={submitEditJob}
          disabled={errors?.jobData ? true : false}
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
  )
}

export default Editing
