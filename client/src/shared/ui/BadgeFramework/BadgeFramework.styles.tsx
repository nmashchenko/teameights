import styled from 'styled-components';

interface FrameworkProps {
  readonly width: string;
  readonly marginRight: string;
  readonly marginBottom: string;
  readonly flexGrow: string;
  readonly background: string;
  readonly color: string;
}

interface BadgeFrameworksContainerProps {
  readonly justifyContent: string;
}

export const Framework = styled.div<FrameworkProps>`
  width: ${(props) => props.width || '91px'};
  height: 32px;
  margin-right: ${(props) => props.marginRight || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  flex-grow: ${(props) => props.flexGrow || '1'};
  background: ${(props) => props.background || '#E0FF00'};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > h3 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.color || 'white'};
  }
`;

export const BadgeFrameworksContainer = styled.div<BadgeFrameworksContainerProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: center;
  margin-top: 20px;
`;
