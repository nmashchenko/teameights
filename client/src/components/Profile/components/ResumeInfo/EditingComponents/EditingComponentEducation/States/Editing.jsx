import { useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useFormikContext } from 'formik'

import { degrees } from '../../../../../../../constants/degrees'
import CheckboxWithLabel from '../../../../../../../shared/components/CheckboxWithLabel/CheckboxWithLabel'
import FlexWrapper from '../../../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelectAutocomplete from '../../../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import { ActionButton } from '../../../ResumeInfo.styles'

const Editing = ({
  index,
  isLoading,
  handleCancel,
  submitEditUniversity,
  checkbox,
  handleClick,
}) => {
  const { setFieldValue, errors, values } = useFormikContext()

  useEffect(() => {
    setFieldValue(
      `universityData[${index}].addmissionDate`,
      Number(values?.universityData[index]?.addmissionDate?.slice(0, 4)),
    )

    if (values?.universityData[index]?.graduationDate) {
      setFieldValue(
        `universityData[${index}].graduationDate`,
        Number(values?.universityData[index]?.graduationDate.slice(0, 4)),
      )
    }
  }, [])

  return (
    <FlexWrapper direction="column" gap="32px" height="100%" width="100%">
      <CustomSelectAutocomplete
        name={`universityData[${index}].degree`}
        label="Degree"
        options={degrees}
        placeholder="Degree"
        value={values.universityData[index].degree}
      />
      <CustomSelectAutocomplete
        name={`universityData[${index}].major`}
        label="Major"
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
      <FlexWrapper direction="column" gap={errors.universityData ? '12px' : '32px'}>
        <FlexWrapper width="100%" justify="space-between" gap="24px">
          <CustomInput
            name={`universityData[${index}].addmissionDate`}
            label="From"
            type="text"
            containerWidth="100%"
            placeholder="From"
            maxLength={4}
          />
          {!checkbox && (
            <CustomInput
              name={`universityData[${index}].graduationDate`}
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

      <FlexWrapper width="100%" justify="space-between">
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

export default Editing
