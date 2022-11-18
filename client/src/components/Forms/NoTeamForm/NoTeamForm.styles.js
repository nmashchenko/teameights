import styled from 'styled-components'
import { WHITE, BLACK, GREEN } from '../../../constants/colors'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${BLACK.background};
`

export const ToolbarContainer = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    height: 78px;
    position: fixed;
    z-index: 100;
    background: ${BLACK.background};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const NavContainer = styled.div`
    position: fixed;
    left: 0 ;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px; 
    margin-top: 10px;

    gap: 50px;
    justify-content: space-start;

    .mousechange:hover {
        cursor: pointer;
    }
`

export const Text2 = styled.h3`
    font-family: 'NoirPro-Regular';
    font-size: 16px;
    color: #FFFFFF;

`

export const LogoText = styled.div`
    display: flex;
    font-weight: 700;
    font-size: 30px;
    color: ${WHITE.main};
    cursor: pointer;
    text-align: center;
    align-self: center;
    margin-top: 10px;
    position: fixed;

`

export const NavContainer2 = styled.div`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 50px;
    margin-top: 10px;

    .mousechange:hover {
        cursor: pointer;
      }
    
`

export const Text3 = styled.h3`

    font-family: 'NoirPro-Regular';
    font-size: 16px;
    text-align: center;
    color: ${GREEN.text};

`

export const NavContainer3 = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 50px;
    margin-left: 50px;
    gap: 5px;

`

export const Container2 = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 570px;
    height: 370px;

    background: #1A1C22;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 215px 355px 215px 355px;
`


export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
`

export const Text = styled.h3`
    font-weight: ${(props) => props.fontWeight || '500'};
    font-size: ${(props) => props.fontSize || '24px'};
    font-family: 'NoirPro-Regular';
    margin: ${(props) => props.margin || '0 0 0 0'};
    color: ${WHITE.main};
    text-align: left;
`

export const ButtonGeneral = styled.button`
    font-weight: 600;
    font-size: 16px;
    border: none;
    width: 133px;
    height: 45px;
    background: ${GREEN.button};
    color: ${WHITE.main};
    text-align: center;
    border-radius: 10px;
    margin-right: 70px;
    margin-left: 10px;
    

    &:hover {
        border: none;
        cursor: pointer;
        transition: 0.15s;
    }

`

export const ButtonGeneral2 = styled.button`
    font-weight: 600;
    font-size: 16px;
    border: none;
    width: 133px;
    height: 45px;
    background: ${GREEN.button};
    color: ${WHITE.main};
    text-align: center;
    border-radius: 10px;
    margin-top: 50px;

    &:hover {
        border: none;
        cursor: pointer;
        transition: 0.15s;
    }
`

