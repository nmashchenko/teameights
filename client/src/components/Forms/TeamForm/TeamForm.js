import { Background,
    Container,
    RightContainer,
    TeamDiv,
    Text,
    CreateBtnDiv,
    CreateButton,
    TeamImgBorder,
    CircleContainer,
} from "./TeamForm.styles"

function TeamForm() {
    return(
        <Background>
            <Container>

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