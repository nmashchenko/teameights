import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import CodingImage from 'shared/assets/Login/CodingImage'

import {
  AuthContainer,
  ImageContainer,
  RightScreenContainer,
  SeparateLine,
  SpannedLetter,
  Text,
  TextContainer,
} from './Auth.styles'

const AuthLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <CssBaseline />
      <AuthContainer>
        <Button
          sx={{ position: 'absolute', top: '2rem', left: '2rem' }}
          color="success"
          onClick={() => navigate('/')}
        >
          Back
        </Button>
        <Outlet />
        <SeparateLine />
        <RightScreenContainer>
          <ImageContainer>
            <CodingImage />
            <TextContainer>
              <Text>
                {location.pathname.includes('login') ? (
                  <>
                    Are you ready to find your Team<SpannedLetter>8</SpannedLetter>s?
                  </>
                ) : (
                  <>
                    start your coding journey with Team<SpannedLetter>8</SpannedLetter>s!
                  </>
                )}
              </Text>
            </TextContainer>
          </ImageContainer>
        </RightScreenContainer>
      </AuthContainer>
    </>
  )
}

export default AuthLayout
