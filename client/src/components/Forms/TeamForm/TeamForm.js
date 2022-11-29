import { Background,
    Container,
    RightContainer,
    LeftContainer,
    TeamDiv,
    Text,
    MiniProfile,
    ProfileImgBorder,
    CreateBtnDiv,
    CreateButton,
    TeamImgBorder,
    CircleContainer,
    ProfileTextDiv,
    DevName,
    DevTitle,
} from "./TeamForm.styles"

function TeamForm() {
    return(
        <Background>
            <Container>

            <LeftContainer>
                <MiniProfile>
                    <ProfileImgBorder></ProfileImgBorder>
                    <ProfileTextDiv>
                        <DevName>Nikita Maksimov</DevName>
                        <DevTitle>Web Designer</DevTitle> 
                    </ProfileTextDiv>
                </MiniProfile>

            </LeftContainer>








                <RightContainer>
                    <TeamDiv>
                        <CircleContainer>
                            <Text>Team Name</Text>
                        </CircleContainer>
                        

                        <TeamImgBorder></TeamImgBorder>

                        <Text>Creation date: 23/01/22</Text>

                        <CreateBtnDiv>
                            <CreateButton>Create</CreateButton>
                        </CreateBtnDiv>
                    </TeamDiv>
                </RightContainer>
            </Container>
        </Background>
    )
}

export default TeamForm