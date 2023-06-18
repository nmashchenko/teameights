import React from 'react'

import { userLinks } from '../../../../../constants/finishRegistrationData'
import CustomInput from '../../../../../shared/components/Formik/CustomInput/CustomInput'
import { InputWithIConWrapper } from '../../../../../shared/components/Formik/CustomInput/CustomInput.styles'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

const UserLinksForm = () => {
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

export default UserLinksForm
