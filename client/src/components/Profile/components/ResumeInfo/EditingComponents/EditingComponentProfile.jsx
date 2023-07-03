import { useState } from 'react'
import { useFormikContext } from 'formik'

import concentrationOptions from '../../../../../constants/concentrations'
import { countries } from '../../../../../constants/countries'
import { userExperienceOptions } from '../../../../../constants/finishRegistrationData'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import CustomSelectAutocomplete from '../../../../../shared/components/Formik/CustomSelectAutocomplete/CustomSelectAutocomplete'
import Links from '../../../../../shared/components/Links/Links'
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
      {isActive === 'general' && (
        <>
          <CustomInput label="Full name" name="fullName" type="text" placeholder="Full name" />
          <CustomSelectAutocomplete
            label="Сountry"
            name="country"
            options={countries}
            placeholder="Select country"
          />
          <CustomInput
            shouldFormatDate={true}
            label="Birthday"
            name="dateOfBirth"
            type="text"
            placeholder="DD/MM/YYYY"
          />
        </>
      )}
      {isActive === 'concentration' && (
        <>
          <CustomSelectAutocomplete
            label="Concentration"
            name="concentration"
            options={concentrationOptions}
            placeholder="Select country"
          />
          <CustomSelectAutocomplete
            label="Experience"
            name="experience"
            options={userExperienceOptions}
            placeholder="Select experience"
          />
        </>
      )}
      {isActive === 'links' && <Links />}
    </FlexWrapper>
  )
}

export default EditingComponentProfile
