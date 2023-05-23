// * Modules
import styled from 'styled-components'

export const FiltersMenuContainer = styled.div`
  width: calc(100% - 86px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  position: fixed;
  background: #1a1c22;
  top: ${(props) => props.top || '-100%'};
  transition: ${(props) => props.transition || 'all 0.3s ease'};
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;
`

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FiltersContentTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const FilterText = styled.h4`
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  margin: 0;
`

export const FiltersAmount = styled.div`
  width: 18px;
  height: 18px;
  background: #5d9d0b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  > h4 {
    font-weight: 700;
    font-size: 12px;
    color: white;
  }
`

export const CloseContainer = styled.div`
  cursor: pointer;
`

export const TitleText = styled.h3`
  font-weight: ${(props) => props.fontWeight || '600'};
  font-size: ${(props) => props.fontSize || '17px'};
  color: ${(props) => props.color || '#FFF'};
  margin: ${(props) => props.margin || '0px'};
`

export const FilterSection = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-self: end;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`

export const CustomButton = styled.button`
  width: 93px;
  height: 35px;
  background: ${(props) => props.background || '#5F7ADB'};
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const Line = styled.hr`
  width: 100%;
  opacity: 0.25;
  border: 1px solid #2e3239;
`
