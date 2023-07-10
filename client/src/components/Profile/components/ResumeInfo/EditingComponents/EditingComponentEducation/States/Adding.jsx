import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'

import { degrees } from '../../../../../../../constants/degrees'
import { majors } from '../../../../../../../constants/majors'
import CheckboxWithLabel from '../../../../../../../shared/components/CheckboxWithLabel/CheckboxWithLabel'
import FlexWrapper from '../../../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelectAutocomplete from '../../../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ActionButton } from '../../../ResumeInfo.styles'

const Adding = ({
  handleCancel,
  submitEditUniversity,
  isLoading,
  handleClick,
  checkbox,
  index,
}) => {
  const { values, errors } = useFormikContext()

  return (
    <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
      <CustomSelectAutocomplete
        name={`universityData[${values?.universityData?.length - 1}].degree`}
        label="Degree"
        options={degrees}
        placeholder="Degree"
        value={values.universityData[values?.universityData?.length - 1].degree}
      />
      <CustomSelectAutocomplete
        name={`universityData[${values?.universityData?.length - 1}].major`}
        label="Major"
        options={majors}
        placeholder="Major"
        value={values.universityData[values?.universityData?.length - 1].major}
      />
      <CustomInput
        name={`universityData[${values?.universityData?.length - 1}].university`}
        label="University"
        type="text"
        containerWidth="100%"
        placeholder="University"
      />
      <FlexWrapper direction="column" gap={errors.universityData ? '12px' : '32px'}>
        <FlexWrapper width="100%" justify="space-between" gap="24px">
          <CustomInput
            name={`universityData[${values?.universityData?.length - 1}].addmissionDate`}
            label="From"
            type="text"
            containerWidth="100%"
            placeholder="From"
            maxLength={4}
          />
          {!checkbox && (
            <CustomInput
              name={`universityData[${values?.universityData?.length - 1}].graduationDate`}
              label="To"
              type="text"
              containerWidth="100%"
              placeholder="To"
              maxLength={4}
            />
          )}
        </FlexWrapper>
        <CheckboxWithLabel
          label="I am still studying here"
          value={checkbox}
          checked={checkbox}
          onChange={handleClick}
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
          disabled={errors?.universityData ? true : false}
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
