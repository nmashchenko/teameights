import styled from 'styled-components'
import { WHITE, BLACK } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #26292b;
`

export const Text = styled.h1`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '22px'};
  color: ${(props) => props.color || 'white'};
  text-align: ${(props) => props.alignment || 'start'};
  margin: ${(props) => props.marginAll || '0'};
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: start;
  align-items: center;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 512px;
  height: 166px;
  margin: 25px 25px 35px 0;
  background-color: #1a1c22;
  border-radius: 15px;
  padding: 5px 15px;
  -webkit-box-shadow: -3px -3px 36px -24px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -3px -3px 36px -24px rgba(0, 0, 0, 0.6);
  box-shadow: -3px -3px 36px -24px rgba(0, 0, 0, 0.6);
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`

export const OutputContainer = styled.div`
  display: flex;
  width: 512px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1a1c22;
  padding: 20px;
  margin: 15px 25px 35px 0;
  border-radius: 15px;
  height: 243px;
  -webkit-box-shadow: -3px -3px 36px -24px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -3px -3px 36px -24px rgba(0, 0, 0, 0.6);
  box-shadow: -3px -3px 36px -24px rgba(0, 0, 0, 0.6);
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 270px;
  justify-content: space-between;
`

export const ResultStatus = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1a1c22;
  border-radius: 8px;
  width: 160px;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
`

export const SubmitButton = styled.button`
  background-color: #1a1c22;
  border-radius: 5px;
  color: #5d9d0b;
  border: none;
  padding: 10px 0;
  font-size: 18px;
  width: 105px;
  cursor: pointer;
`
