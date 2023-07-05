import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'

import CheckboxWithLabel from '../../../../../../../shared/components/CheckboxWithLabel/CheckboxWithLabel'
import FlexWrapper from '../../../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../../../shared/components/Formik/CustomInput/CustomInput'
import { ActionButton } from '../../../ResumeInfo.styles'

const Adding = ({ handleCancel, submitEditJob, isLoading, handleClick, checkbox }) => {
  const { values, errors } = useFormikContext()

  return (
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
        {!checkbox && (
          <CustomInput
            name={`jobData[${values?.jobData?.length - 1}].endDate`}
            label="To"
            type="text"
            containerWidth="100%"
            placeholder="Input year"
          />
        )}
      </FlexWrapper>
      <CheckboxWithLabel
        label="I am still studying here"
        value={checkbox}
        checked={checkbox}
        onChange={handleClick}
      />
      <FlexWrapper width="100%" justify="space-between" margin="24px 0 0 0">
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

export default Adding
