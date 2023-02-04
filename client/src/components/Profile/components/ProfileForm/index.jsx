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
import Linkedin from "../../../../assets/UserProfile/Linkedin";
import languageOptions from "../../../../screens/UsersList/components/UserCard/ProgrammingLanguages";
import {Framework} from "../../../../screens/UsersList/components/UserCard/UserCard.styles";
import {frameworkColors, frameworkTextColors} from "../../../../screens/UsersList/components/UserCard/FrameworkColors";
import {ConcentrationWrapper, EditUserDetails} from "./ProfileForm.styles";
import EditIcon from "../../../../assets/EditIcon";
import {Formik} from "formik";
import CustomInput from "../../../../shared/components/CustomInput/CustomInput";
import CustomTextArea from "../../../../shared/components/CustomTextArea/CustomTextArea";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";
import {useNavigate} from "react-router-dom";
import CustomSelect from "../../../../shared/components/CustomSelect/CustomSelect";
import concentrationOptions from "../../../../constants/concentrations";
import Edit from "./components/Edit/Edit";
import countryList from "react-select-country-list";
import {useMemo} from "react";
import {userExperienceOptions} from "../../../../constants/finishRegistrationData";
import programmingLanguageOptions from "../../../../constants/programmingLanguages";
import frameworkOptions from "../../../../constants/frameworks";
import {Button} from "../../../../shared/components/CustomButton/CustomButon.styles";
import  {editProfileValidation} from "../../../../schemas";


const inputStyles = {border: '1px solid #5E5E5E', borderRadius: '0.5rem', padding: '0.5rem', width: 'auto'}

const ProfileForm = ({user, team, onEditorToggle}) => {
    const navigate = useNavigate()
    const countriesOptions = useMemo(() => countryList().getData(), [])

    const teamSearchHandler = () => {
        navigate('/teams')
    }
    return (
        <Formik initialValues={{fullName: user.userRealName, github: user.userLinks.github, linkedIn: user.userLinks.linkedIn, telegram: user.userLinks.telegram, description: user.userDescription ? user.userDescription : 'This user is humble', concentration: user.userConcentration, country: user.userCountry, experience: user.userExperience, programmingLanguages: user.userProgrammingLanguages, frameworks: user.userFrameworks}} validationSchema={editProfileValidation}>
            {({values}) => {
            return (
                <>
                    <Information>
                        <LeftCard>
                            <ImgContainer>
                                <Img src={Photo} />
                                <EditUserDetails onClick={onEditorToggle}>
                                    <EditIcon />
                                </EditUserDetails>
                            </ImgContainer>
                            <TextContainer>
                                <CustomInput  name="fullName" style={{...inputStyles, marginTop: '1rem'}}/>
                                <Text margin="5px 0 0 0" color="rgba(255, 255, 255, 0.5)" fontSize="16px">
                                    {user.userUsername}
                                </Text>
                                <ConcentrationWrapper>
                                    <Text margin="5px 0 0 0">{values.concentration}</Text>
                                    <CustomSelect style={{height: 'auto'}} renderValue={() => <></>} width="auto" margin="0" name="concentration"  options={concentrationOptions} line={false} IconComponent={Edit}/>
                                </ConcentrationWrapper>
                            </TextContainer>
                            <ProfileLine />
                            <DetailsWrapper>
                                <InformationWrapper>
                                    <InformationRow>
                                        <IconTextContainer>
                                            <Location />
                                            <Text fontSize="15px">{values.country}</Text>
                                        </IconTextContainer>
                                        <CustomSelect style={{height: 'auto'}} renderValue={() => <></>} width="auto" margin="0 0 0 1rem" name="country"  options={countriesOptions} line={false} IconComponent={Edit}/>
                                    </InformationRow>
                                    <InformationRow>
                                        <IconTextContainer>
                                            <Star />
                                            <Text fontSize="15px">{values.experience} {!values.experience.includes('years') ? ' years' : ''} of experiences</Text>
                                        </IconTextContainer>
                                        <CustomSelect style={{height: 'auto'}} renderValue={() =>  <></>} width="auto" margin="0 0 0 1rem" name="experience"  options={userExperienceOptions} line={false} IconComponent={Edit}/>
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
                                                <CustomInput  name="github" style={inputStyles}/>
                                            </IconTextContainer>
                                        </SocialRow>
                                    )}
                                    {user.userLinks.linkedIn && (
                                        <SocialRow marginTop="10px">
                                            <IconTextContainer>
                                                <Linkedin />
                                                <CustomInput  name="linkedIn" style={inputStyles}/>
                                            </IconTextContainer>
                                        </SocialRow>
                                    )}
                                    {user.userLinks.telegram && (
                                        <SocialRow marginTop="10px">
                                            <IconTextContainer>
                                                <TelegramIcon />
                                                <CustomInput  name="telegram" style={inputStyles}/>
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
                                    {values.programmingLanguages.map((language) => (
                                        <ProgrammingLanguage key={language}>{languageOptions[language]}</ProgrammingLanguage>
                                    ))}
                                    <CustomSelect renderValue={() =>  <></>}  width="auto"  name="programmingLanguages" margin="0" multiple={true} options={programmingLanguageOptions} line={false} IconComponent={Edit}/>
                                </RightCardData>
                            </RightCard>
                            <RightCard id="Tools">
                                <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                                    Tools
                                </Text>
                                <BannerLine />
                                <RightCardData>
                                    {values.frameworks.slice(0, 5).map((framework, index) => (
                                        <Framework
                                            key={framework}
                                            background={frameworkColors[framework]}
                                            color={frameworkTextColors[framework]}
                                            flexGrow="0"
                                            marginBottom="0"
                                        >
                                            <h3>{index < 4 ? framework : `+${values.frameworks.length - 4}`}</h3>
                                        </Framework>
                                    ))}
                                    <CustomSelect renderValue={() =>  <></>}  width="auto"  name="frameworks" margin="0" multiple={true} options={frameworkOptions} line={false} IconComponent={Edit}/>
                                </RightCardData>
                            </RightCard>

                            <RightCard id="Team">
                                <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                                    Team
                                </Text>
                                <BannerLine />
                                <RightCardData justify="center">
                                    {team ?
                                        <Text margin="0" fontSize="16px" fontWeight="600" color="rgba(255, 255, 255, 0.7)">
                                            {team.name}
                                        </Text>
                                        :
                                        <CustomButton onClick={teamSearchHandler}>
                                            Search team
                                        </CustomButton>
                                    }
                                </RightCardData>
                            </RightCard>

                            <RightCard id="AboutMe">
                                <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
                                    About me
                                </Text>
                                <BannerLine />
                                <RightCardData justify={user.userDescription ? 'start' : 'center'}>
                                    <CustomTextArea  name="description" maxLength={200} style={{...inputStyles, width: '100%'}} />
                                </RightCardData>
                            </RightCard>
                        </RightContainer>
                    </Information>
                    <Button type="submit" style={{alignSelf: 'flex-end', marginTop: '1.2rem'}}>Save</Button>
                </>
            )}}
        </Formik>
    );
};

export default ProfileForm;
