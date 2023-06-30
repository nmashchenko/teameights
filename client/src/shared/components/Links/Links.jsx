import React from 'react'

import { ContentContainer } from '../../../components/RegistrationPipeline/components/MultiStepRegistration/MultiStepRegistration.styles'
import { userLinks } from '../../../constants/finishRegistrationData'
import CustomInput from '../Formik/CustomInput/CustomInput'
import { InputWithIConWrapper } from '../Formik/CustomInput/CustomInput.styles'

const Links = () => {
  return (
    <>
      <ContentContainer rows={userLinks.length} gap="2.25rem">
        {userLinks.map((link) => (
          <InputWithIConWrapper key={link.name}>
            {link.icon}
            <CustomInput
              name={link.name}
              type="text"
              containerWidth="100%"
              placeholder="add link"
            />
          </InputWithIConWrapper>
        ))}
      </ContentContainer>
    </>
  )
}

export default Links
