import {
  Container,
  Content,
  Div,
  TopContainer,
  SelectContainer,
  SelectItem,
  TournamentInfoContainer,
  InfoContainer,
  EntryStartsContainer,
  ButtonContainer,
  AvailableSlotsContainer,
  AvailableSlotsItem,
  Text,
  Span,
  PrimaryButton,
} from './TournamentInfo.styles'

import { data } from './TournamentInfo.data'

function TournamentInfo() {
  return (
    <Container>
      <Content>
        <TopContainer>
          <Text margin="10rem 0 0 0">Teameights cup #1</Text>
          <SelectContainer>
            <SelectItem>
              <Text fontSize="16px" color="#5D9D0B">
                OVERVIEW
              </Text>
            </SelectItem>
          </SelectContainer>
        </TopContainer>

        <Div>
          <Div>
            <Text fontSize="24px" color="#8A9AB5" margin="10px 0 0.5rem 0">
              Sign up closes in <Span>7h 22m</Span>
            </Text>
          </Div>

          <Div>
            <TournamentInfoContainer>
              <EntryStartsContainer>
                <InfoContainer>
                  <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                    ENTRY FEE
                  </Text>
                  <Text color="white" fontSize="16px">
                    Free to enter
                  </Text>
                </InfoContainer>

                <InfoContainer mr="15rem">
                  <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                    STARTS AT
                  </Text>
                  <Text color="white" fontSize="16px">
                    02/08/2022 06:00
                  </Text>
                </InfoContainer>
              </EntryStartsContainer>

              <ButtonContainer>
                <PrimaryButton>SIGN UP</PrimaryButton>
              </ButtonContainer>

              <AvailableSlotsContainer>
                <AvailableSlotsItem fd="column" justify="center">
                  AVAILABLE SLOTS
                </AvailableSlotsItem>

                {data.map((item) => (
                  <AvailableSlotsItem
                    borderb="solid 2px #353535"
                    align="center"
                    background="#1A1C22"
                    height="45px"
                  >
                    <Text color="#8A9AB5" fontSize="16px">
                      {item.name}
                    </Text>
                    <Text color="white" fontSize="16px">
                      {item.number}
                    </Text>
                  </AvailableSlotsItem>
                ))}
              </AvailableSlotsContainer>
            </TournamentInfoContainer>
            <Text margin="1rem 0 2rem 0">Tournament restrictions</Text>
            <Div
              style={{
                justifyContent: 'start',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <InfoContainer>
                <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                  RANK RESTRICTION
                </Text>
                <Text color="#5D9D0B" fontSize="16px">
                  None specified
                </Text>
              </InfoContainer>

              <InfoContainer mr="15mr">
                <Text color="#8A9AB5" margin="0 0 0.4rem 0" fontSize="16px">
                  ALLOWED EXCEPTIONS
                </Text>
                <Text color="white" fontSize="16px">
                  0 out of 5 team members may be from other countries
                </Text>
              </InfoContainer>
            </Div>
          </Div>
        </Div>
      </Content>
    </Container>
  )
}

export default TournamentInfo
