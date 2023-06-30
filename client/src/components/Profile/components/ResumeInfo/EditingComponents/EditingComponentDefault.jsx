import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import EducationWork from '../EducationWork/EducationWork'
import ProjectsSkills from '../ProjectsSkills/ProjectsSkills'
import { ResumePartBox, ResumePartBtn } from '../ResumeInfo.styles'

function EditingComponentDefault({ active, setActive, showingUser, setIsEditing, userStatus }) {
  return (
    <FlexWrapper direction="column" gap="24px" height="100%" width="100%">
      <ResumePartBox>
        <ResumePartBtn isActive={active === 'projects'} onClick={() => setActive('projects')}>
          Projects & Skills
        </ResumePartBtn>
        <ResumePartBtn isActive={active === 'education'} onClick={() => setActive('education')}>
          Education & Work
        </ResumePartBtn>
      </ResumePartBox>
      {active === 'projects' && (
        <ProjectsSkills
          showingUser={showingUser}
          setIsEditing={setIsEditing}
          userStatus={userStatus}
        />
      )}
      {active === 'education' && <EducationWork showingUser={showingUser} />}
    </FlexWrapper>
  )
}

export default EditingComponentDefault
