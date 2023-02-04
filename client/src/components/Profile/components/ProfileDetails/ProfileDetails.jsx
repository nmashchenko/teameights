import {
    BannerLine, DetailsWrapper,
    IconTextContainer, Img,
    ImgContainer, Information,
    InformationRow, InformationWrapper,
    LeftCard,
    ProfileLine, ProgrammingLanguage, RightCard, RightCardData, RightContainer, SocialRow, SocialWrapper, TelegramIcon,
    Text,
    TextContainer
} from "../../Profile.styles";
import Photo from "../../Photo.jpg";
import Location from "../../../../assets/UserProfile/Location";
import Star from "../../../../assets/UserProfile/Star";
import Email from "../../../../assets/UserProfile/Email";
import Github from "../../../../assets/UserProfile/Github";
import {CustomLink} from "../../../../shared/styles/Link.styles";
import Linkedin from "../../../../assets/UserProfile/Linkedin";
import languageOptions from "../../../../screens/UsersList/components/UserCard/ProgrammingLanguages";
import {Framework} from "../../../../screens/UsersList/components/UserCard/UserCard.styles";
import {frameworkColors, frameworkTextColors} from "../../../../screens/UsersList/components/UserCard/FrameworkColors";
import {EditUserDetails} from "../ProfileForm/ProfileForm.styles";
import EditIcon from "../../../../assets/EditIcon";

const ProfileDetails = ({user, team, onEditorToggle}) => {
    return (
        <Information>
            <LeftCard>
                <ImgContainer>
                    <Img src={Photo} />
                    <EditUserDetails onClick={onEditorToggle}>
                        <EditIcon />
                    </EditUserDetails>
                </ImgContainer>
                <TextContainer>
                    <Text margin="15px 0 0 0">{user.userRealName}</Text>
                    <Text margin="5px 0 0 0" color="rgba(255, 255, 255, 0.5)" fontSize="16px">
                        {user.userUsername}
                    </Text>
                    <Text margin="5px 0 0 0">{user.userConcentration}</Text>
                </TextContainer>
                <ProfileLine />
                <DetailsWrapper>
                    <InformationWrapper>
                        <InformationRow>
                            <IconTextContainer>
                                <Location />
                                <Text fontSize="15px">{user.userCountry}</Text>
                            </IconTextContainer>
                        </InformationRow>
                        <InformationRow>
                            <IconTextContainer>
                                <Star />
                                <Text fontSize="15px">{user.userExperience} years of experiences</Text>
                            </IconTextContainer>
                        </InformationRow>
                        <InformationRow>
                            <IconTextContainer>
                                <Email />
                                <Text fontSize="15px">{user.email}</Text>
                            </IconTextContainer>
                        </InformationRow>
                    </InformationWrapper>
                    <SocialWrapper>
                        {user.userLinks.github && (
                            <SocialRow>
                                <IconTextContainer>
                                    <Github />
                                    <CustomLink href={user.userLinks.github} target="_blank">
                                        Github
                                    </CustomLink>
                                </IconTextContainer>
                            </SocialRow>
                        )}
                        {user.userLinks.linkedIn && (
                            <SocialRow marginTop="10px">
                                <IconTextContainer>
                                    <Linkedin />
                                    <CustomLink href={user.userLinks.linkedIn} target="_blank">
                                        Linkedin
                                    </CustomLink>
                                </IconTextContainer>
                            </SocialRow>
                        )}
                        {user.userLinks.telegram && (
                            <SocialRow marginTop="10px">
                                <IconTextContainer>
                                    <TelegramIcon />
                                    <CustomLink href={user.userLinks.telegram} target="_blank">
                                        Telegram
                                    </CustomLink>
                                </IconTextContainer>
                            </SocialRow>
                        )}
                    </SocialWrapper>
                </DetailsWrapper>
            </LeftCard>
            <RightContainer>
                <RightCard id="Languages">
                    <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                        Languages
                    </Text>
                    <BannerLine />
                    <RightCardData>
                        {user.userProgrammingLanguages.map((language) => (
                            <ProgrammingLanguage key={language}>{languageOptions[language]}</ProgrammingLanguage>
                        ))}
                    </RightCardData>
                </RightCard>
                <RightCard id="Tools">
                    <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                        Tools
                    </Text>
                    <BannerLine />
                    <RightCardData>
                        {user.userFrameworks.slice(0, 6).map((framework, index) => (
                            <Framework
                                key={framework}
                                background={frameworkColors[framework]}
                                color={frameworkTextColors[framework]}
                                flexGrow="0"
                            >
                                <h3>{index < 5 ? framework : `+${user.userFrameworks.length - 5}`}</h3>
                            </Framework>
                        ))}
                    </RightCardData>
                </RightCard>
                <RightCard id="Team">
                    <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                        Team
                    </Text>
                    <BannerLine />
                    <RightCardData justify="center">
                        <Text margin="0" fontSize="16px" fontWeight="600" color="rgba(255, 255, 255, 0.7)">
                            {team ? team.name : "That's where your team will come in"}
                        </Text>
                    </RightCardData>
                </RightCard>
                <RightCard id="AboutMe">
                    <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                        About me
                    </Text>
                    <BannerLine />
                    <RightCardData justify={user.userDescription ? 'start' : 'center'}>
                        <Text margin="0" fontSize="16px" fontWeight="600" color="rgba(255, 255, 255, 0.7)">
                            {user.userDescription ? user.userDescription : 'This user is humble'}
                        </Text>
                    </RightCardData>
                </RightCard>
            </RightContainer>
        </Information>
    );
};

export default ProfileDetails;
