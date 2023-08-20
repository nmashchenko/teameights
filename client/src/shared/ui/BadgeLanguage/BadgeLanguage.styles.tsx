import { styled } from 'styled-components';

interface AndMoreProps {
  readonly makeWhite: boolean;
}

interface LanguageContainer {
  readonly width: string;
}

export const ProgrammingLanguagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 57%;
  margin-bottom: 10px;
`;

export const LanguageContainer = styled.div<LanguageContainer>`
  position: relative;
  background: #2f3239;
  border-radius: 5px;
  width: ${(props) => props.width || '40px'};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AndMore = styled.span<AndMoreProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  color: ${(props) => (props.makeWhite ? '#000' : '#FFF')};
`;
