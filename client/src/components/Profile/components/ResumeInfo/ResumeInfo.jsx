import { useState } from 'react'

import LinkIcon from '../../../../assets/UserProfile/LinkIcon'
import TeamMembersIcon from '../../../../assets/UserProfile/TeamMembersIcon'
import { frameworkColors, frameworkTextColors } from '../../../../constants/frameworkColors'
import { languageOptions } from '../../../../constants/programmingLanguages'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { ProfileSection } from '../../Profile.styles'

import TagLink from './TagLink/TagLink'
import {
  FrameWorkItem,
  LanguageItem,
  ResumePartBox,
  ResumePartBtn,
  Text,
  WrappableList,
} from './ResumeInfo.styles'

const ResumeInfo = ({ user }) => {
  const projectsArr = [
    { text: 'Team8s', link: '#' },
    { text: 'BankingApp', link: '#' },
    { text: 'Snake', link: '#' },
    { text: 'Shopping App', link: '#' },
    { text: 'E-learning', link: '#' },
  ]

  const [active, setActive] = useState('projects')

  return (
    <ProfileSection width="470px" padding="36px 24px 24px">
      <FlexWrapper direction="column" gap="24px" height="100%">
        <ResumePartBox>
          <ResumePartBtn isActive={active === 'projects'} onClick={() => setActive('projects')}>
            Projects & Skills
          </ResumePartBtn>
          <ResumePartBtn isActive={active === 'education'} onClick={() => setActive('education')}>
            Education & Work
          </ResumePartBtn>
        </ResumePartBox>
        <FlexWrapper direction="column" height="100%" justify="space-between">
          <FlexWrapper direction="column" gap="8px">
            <Text fontSize="16px" fontWeight="400">
              About me
            </Text>
            <Text fontSize="14px" fontWeight="400">
              {user?.description ? user?.description : 'This user is humble'}
            </Text>
          </FlexWrapper>
          <FlexWrapper gap="16px" align="center">
            <Text fontSize="16px" fontWeight="400">
              Team
            </Text>
            {user?.team ? (
              <TagLink icon={<TeamMembersIcon />} to={`/team/${user?.team._id}`}>
                {user?.team.name}
              </TagLink>
            ) : (
              <Text fontSize="16px" fontWeight="300" color="#c1c1c4">
                No team yet.
              </Text>
            )}
          </FlexWrapper>
          <FlexWrapper direction="column" gap="8px">
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
          <FlexWrapper direction="column" gap="8px">
            <Text fontSize="16px" fontWeight="400">
              Frameworks
            </Text>
            <WrappableList gap="8px">
              {user?.frameworks?.map((framework, index) => (
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
          <FlexWrapper direction="column" gap="8px">
            <Text fontSize="16px" fontWeight="400">
              Languages
            </Text>
            <WrappableList gap="8px">
              {user?.programmingLanguages?.map((language, index) => (
                <LanguageItem key={index}>{languageOptions[language]}</LanguageItem>
              ))}
            </WrappableList>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </ProfileSection>
  )
}

export default ResumeInfo
