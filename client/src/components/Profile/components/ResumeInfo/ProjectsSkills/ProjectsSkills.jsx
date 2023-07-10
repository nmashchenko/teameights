import { useFormikContext } from 'formik'

import EditIcon from '../../../../../assets/UserProfile/EditIcon'
import LinkIcon from '../../../../../assets/UserProfile/LinkIcon'
import TeamMembersIcon from '../../../../../assets/UserProfile/TeamMembersIcon'
import { frameworkColors, frameworkTextColors } from '../../../../../constants/frameworkColors'
import { languageOptions } from '../../../../../constants/programmingLanguages'
import CardSkeleton from '../../../../../shared/components/CardSkeleton/CardSkeleton'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import {
  EditIconContainer,
  FrameWorkItem,
  LanguageItem,
  Text,
  TextArea,
  WrappableList,
} from '../ResumeInfo.styles'
import TagLink from '../TagLink/TagLink'

const ProjectsSkills = ({ showingUser, setIsEditing, userStatus }) => {
  return (
    <FlexWrapper direction="column" height="100%" width="100%" gap="16px">
      <FlexWrapper direction="column" gap="7px">
        <FlexWrapper width="100%" justify="space-between" align="center">
          <Text fontSize="16px" fontWeight="400">
            About me
          </Text>

          {userStatus === 'same' && (
            <EditIconContainer onClick={() => setIsEditing('description')} fill={true.toString()}>
              <EditIcon />
            </EditIconContainer>
          )}
        </FlexWrapper>
        {!showingUser ? (
          <CardSkeleton width="100%" height="85px" borderRadius="5px" />
        ) : showingUser?.description ? (
          <TextArea
            fontSize="14px"
            fontWeight="400"
            value={showingUser?.description}
            disabled
            height="auto"
          />
        ) : (
          <TextArea
            fontSize="14px"
            fontWeight="400"
            disabled
            color="#8F9094"
            value={'No description added'}
          />
        )}
      </FlexWrapper>
      {!showingUser ? (
        <FlexWrapper gap="7px" align="center">
          <Text fontSize="16px" fontWeight="400">
            Team
          </Text>
          <CardSkeleton width="100%" height="27px" borderRadius="5px" />
        </FlexWrapper>
      ) : showingUser?.team ? (
        <FlexWrapper gap="7px" align="center">
          <Text fontSize="16px" fontWeight="400">
            Team
          </Text>

          <TagLink icon={<TeamMembersIcon />} to={`/team/${showingUser?.team._id}`}>
            {showingUser?.team.name}
          </TagLink>
        </FlexWrapper>
      ) : (
        <FlexWrapper direction="column" gap="7px">
          <Text fontSize="16px" fontWeight="400">
            Team
          </Text>

          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            No team yet.
          </Text>
        </FlexWrapper>
      )}
      <FlexWrapper direction="column" gap="7px">
        <FlexWrapper width="100%" justify="space-between" align="center">
          <Text fontSize="16px" fontWeight="400">
            Projects
          </Text>
          {userStatus === 'same' && (
            <EditIconContainer onClick={() => setIsEditing('projects')} fill={true.toString()}>
              <EditIcon />
            </EditIconContainer>
          )}
        </FlexWrapper>
        {!showingUser ? (
          <WrappableList gap="8px">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <CardSkeleton
                  width="120px"
                  height="27px"
                  borderRadius="5px"
                  key={index}
                  parentMaxWidth="120px"
                />
              ))}
          </WrappableList>
        ) : showingUser?.projectData?.length > 0 ? (
          <WrappableList gap="8px">
            {showingUser?.projectData?.map(({ title, link }, index) => (
              <li key={index}>
                <TagLink to={link} icon={<LinkIcon />} type="link">
                  {title.length > 15 ? title.substring(0, 10) + '...' : title}
                </TagLink>
              </li>
            ))}
          </WrappableList>
        ) : (
          <Text fontSize="14px" fontWeight="400" color="#8F9094">
            No projects yet.
          </Text>
        )}
      </FlexWrapper>
      <FlexWrapper direction="column" gap="7px">
        <FlexWrapper width="100%" justify="space-between" align="center">
          <Text fontSize="16px" fontWeight="400">
            Frameworks
          </Text>
          {userStatus === 'same' && (
            <EditIconContainer fill={true.toString()} onClick={() => setIsEditing('frameworks')}>
              <EditIcon />
            </EditIconContainer>
          )}
        </FlexWrapper>
        <WrappableList gap="8px">
          {!showingUser ? (
            <WrappableList gap="8px">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <CardSkeleton
                    width="120px"
                    height="34px"
                    borderRadius="5px"
                    key={index}
                    parentMaxWidth="120px"
                  />
                ))}
            </WrappableList>
          ) : (
            showingUser?.frameworks?.map((framework, index) => (
              <FrameWorkItem
                key={index}
                background={frameworkColors[framework]}
                color={frameworkTextColors[framework]}
              >
                {framework}
              </FrameWorkItem>
            ))
          )}
        </WrappableList>
      </FlexWrapper>
      <FlexWrapper direction="column" gap="7px">
        <FlexWrapper width="100%" justify="space-between" align="center">
          <Text fontSize="16px" fontWeight="400">
            Languages
          </Text>
          {userStatus === 'same' && (
            <EditIconContainer fill={true.toString()} onClick={() => setIsEditing('languages')}>
              <EditIcon />
            </EditIconContainer>
          )}
        </FlexWrapper>
        <WrappableList gap="8px">
          {!showingUser ? (
            <WrappableList gap="8px">
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <CardSkeleton
                    width="40px"
                    height="40px"
                    borderRadius="5px"
                    key={index}
                    parentMaxWidth="40px"
                  />
                ))}
            </WrappableList>
          ) : (
            showingUser?.programmingLanguages?.map((language, index) => (
              <LanguageItem key={index}>{languageOptions[language]}</LanguageItem>
            ))
          )}
        </WrappableList>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default ProjectsSkills
