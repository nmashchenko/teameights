import React from 'react'

import CustomInput from '../../../../../../shared/components/CustomInput/CustomInput'
import { InputWithIConWrapper } from '../../../../../../shared/components/CustomInput/CustomInput.styles'
import {ContentContainer} from "../../MultiStepRegistration/MultiStepRegistration.styles";
import {userLinks} from "../../../../../../constants/finishRegistrationData";

const UserLinksForm = () => {

  return (
    <>
      <ContentContainer rows={userLinks.length} gap="2.25rem">
        {userLinks.map(link => (
            <InputWithIConWrapper key={link.name}>
              {link.icon}
              <CustomInput
                  name={link.name}
                  type="text"
                  containerWidth="100%"
                  inputWidth="70%"
                  placeholder="add link (optional)"
              />
            </InputWithIConWrapper>
        ))}
      </ContentContainer>
    </>
  )
}

export default UserLinksForm
