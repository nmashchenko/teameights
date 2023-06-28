import LinkIcon from '../../../../../assets/UserProfile/LinkIcon'
import TeamMembersIcon from '../../../../../assets/UserProfile/TeamMembersIcon'
import { frameworkColors, frameworkTextColors } from '../../../../../constants/frameworkColors'
import { languageOptions } from '../../../../../constants/programmingLanguages'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import { FrameWorkItem, LanguageItem, Text, WrappableList } from '../ResumeInfo.styles'
import TagLink from '../TagLink/TagLink'

const ProjectsSkills = ({ showingUser }) => {
  const projectsArr = [
    { text: 'Team8s', link: '#' },
    { text: 'BankingApp', link: '#' },
    { text: 'Snake', link: '#' },
    { text: 'Shopping App', link: '#' },
    { text: 'E-learning', link: '#' },
  ]

  return (
    <FlexWrapper direction="column" height="100%" width="100%" gap="16px">
      <FlexWrapper direction="column" gap="16px">
        <Text fontSize="16px" fontWeight="400">
          About me
        </Text>
        <Text fontSize="14px" fontWeight="400">
          {showingUser?.description ? showingUser?.description : 'This showingUser is humble'}
        </Text>
      </FlexWrapper>
      <FlexWrapper gap="16px" align="center">
        <Text fontSize="16px" fontWeight="400">
          Team
        </Text>
        {showingUser?.team ? (
          <TagLink icon={<TeamMembersIcon />} to={`/team/${showingUser?.team._id}`}>
            {showingUser?.team.name}
          </TagLink>
        ) : (
          <Text fontSize="16px" fontWeight="300" color="#c1c1c4">
            No team yet.
          </Text>
        )}
      </FlexWrapper>
      <FlexWrapper direction="column" gap="16px">
        <Text fontSize="16px" fontWeight="400">
          Projects
        </Text>
        <WrappableList gap="8px">
          {projectsArr.map(({ link, text }, index) => (
            <li key={index}>
              <TagLink to={link} icon={<LinkIcon />}>
                {text}
              </TagLink>
            </li>
          ))}
        </WrappableList>
      </FlexWrapper>
      <FlexWrapper direction="column" gap="16px">
        <Text fontSize="16px" fontWeight="400">
          Frameworks
        </Text>
        <WrappableList gap="8px">
          {showingUser?.frameworks?.map((framework, index) => (
            <FrameWorkItem
              key={index}
              background={frameworkColors[framework]}
              color={frameworkTextColors[framework]}
            >
              {framework}
            </FrameWorkItem>
          ))}
        </WrappableList>
      </FlexWrapper>
      <FlexWrapper direction="column" gap="16px">
        <Text fontSize="16px" fontWeight="400">
          Languages
        </Text>
        <WrappableList gap="8px">
          {showingUser?.programmingLanguages?.map((language, index) => (
            <LanguageItem key={index}>{languageOptions[language]}</LanguageItem>
          ))}
        </WrappableList>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default ProjectsSkills
