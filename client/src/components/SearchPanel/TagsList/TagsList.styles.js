import styled from 'styled-components'

export const StyledTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 45px;
`

export const TagItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0;
  color: #c1c1c4;
  background: #2f3239;
  border-radius: 5px;
`

export const TagSubItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 2px 8px;

  path {
    transition: fill 0.2s;
  }

  &:hover {
    path {
      fill: #d42422;
    }
  }
`

export const CrossWrapper = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  path {
    fill: #c1c1c4;
  }
`