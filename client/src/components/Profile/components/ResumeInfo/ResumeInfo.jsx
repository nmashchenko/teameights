import { useState } from 'react'

import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { ProfileSection } from '../../Profile.styles'

import EducationWork from './EducationWork/EducationWork'
import ProjectsSkills from './ProjectsSkills/ProjectsSkills'
import { ResumePartBox, ResumePartBtn } from './ResumeInfo.styles'

const ResumeInfo = ({ showingUser }) => {
  const [active, setActive] = useState('projects')

  return (
    <ProfileSection width="470px" padding="24px 32px">
      <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
        <ResumePartBox>
          <ResumePartBtn isActive={active === 'projects'} onClick={() => setActive('projects')}>
            Projects & Skills
          </ResumePartBtn>
          <ResumePartBtn isActive={active === 'education'} onClick={() => setActive('education')}>
            Education & Work
          </ResumePartBtn>
        </ResumePartBox>
        {active === 'projects' && <ProjectsSkills showingUser={showingUser} />}
        {active === 'education' && <EducationWork showingUser={showingUser} />}
      </FlexWrapper>
    </ProfileSection>
  )
}

export default ResumeInfo
