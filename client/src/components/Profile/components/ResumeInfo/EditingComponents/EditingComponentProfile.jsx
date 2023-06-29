import { useMemo, useState } from 'react'
import { useFormikContext } from 'formik'

import { countries } from '../../../../../constants/countries'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelect from '../../../../../shared/components/Formik/CustomSelect/CustomSelect'
import { ResumePartBox, ResumePartBtn } from '../ResumeInfo.styles'

function EditingComponentProfile() {
  const [isActive, setIsActive] = useState('general')
  const { values } = useFormikContext()

  return (
    <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
      <ResumePartBox>
        <ResumePartBtn isActive={isActive === 'general'} onClick={() => setIsActive('general')}>
          General
        </ResumePartBtn>
        <ResumePartBtn
          isActive={isActive === 'concentration'}
          onClick={() => setIsActive('concentration')}
        >
          Concentration
        </ResumePartBtn>
        <ResumePartBtn isActive={isActive === 'links'} onClick={() => setIsActive('links')}>
          Links
        </ResumePartBtn>
      </ResumePartBox>
      <CustomInput
        label="Full name"
        name="fullName"
        type="text"
        placeholder="Full name"
        value={values.fullName}
      />
      {/* <CustomInput
        label="Username"
        name="username"
        type="text"
        placeholder="Username"
        value={values.username}
      /> */}
      <CustomSelect
        label="Сountry"
        name="country"
        options={countries}
        placeholder="Select country"
        value={values.country}
      />
      <CustomInput
        shouldFormatDate={true}
        label="Birthday"
        name="dateOfBirth"
        type="text"
        placeholder="DD/MM/YYYY"
      />
    </FlexWrapper>
  )
}

export default EditingComponentProfile
