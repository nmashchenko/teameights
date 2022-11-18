import { 
    Container,
    TextContainer,
    Text, Text2, Text3,
    ButtonGeneral, ButtonGeneral2,
    Container2, ToolbarContainer, NavContainer, NavContainer2, NavContainer3, LogoText
} from './NoTeamForm.styles'

import NotificationLogo from '../../../assets/Sidebar/Notification'
import ExitLogo from '../../../assets/Sidebar/Exit'
import Sidebar from '../../../assets/NavBarIcon'

function NoTeamForm()  {
    return (
        <Container>
            <ToolbarContainer>
                <NavContainer>
                    <span class="mousechange"><Sidebar /></span>
                    <Text2>My Team</Text2>
                </NavContainer>
                
                <LogoText>team8s</LogoText>
                <NavContainer2>
                    <NavContainer3>
                        <ExitLogo />
                        <Text3>Exit</Text3>
                    </NavContainer3>
                    <span class="mousechange"><NotificationLogo /></span>
                </NavContainer2>
            </ToolbarContainer>
            <Container2>
                <TextContainer>
                    <Text>You don't have a team yet!</Text>
                    <Text>Let's create it...</Text>
                </TextContainer>
                <buttonContainer>
                    <ButtonGeneral><span>Create team</span></ButtonGeneral>
                    <ButtonGeneral2><span>Join existing</span></ButtonGeneral2>
                </buttonContainer>
            </Container2>
        </Container>
    )
    }

export default NoTeamForm