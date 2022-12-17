import React, {useEffect, useState} from 'react';
import {
    ImageContainer,
    RightScreenContainer,
    SpannedLetter,
    Text,
    TextContainer,
    AuthContainer,
    SeparateLine
} from "./Auth.styles";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import CodingImage from "../../assets/CodingImage";
import SnackBar from "../../components/SnackBar/SnackBar";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";
const AuthLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { error } = useSelector((state) => state.userReducer)
    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    useEffect(() => {
        if(error){
            setOpen(true)
        }
    }, [error])

    return (
        <>
            <CssBaseline />
            {error && <SnackBar open={open} handleClose={handleClose} error={error} />}
            <AuthContainer>
                <Button sx={{position: 'absolute', top: "2rem", left: "2rem"}} color="success" onClick={() => navigate("/")}>Back</Button>
                <Outlet />
            <SeparateLine />
            <RightScreenContainer>
                <ImageContainer>
                    <CodingImage />
                    <TextContainer>
                        <Text>
                            {location.pathname.includes('login') ? <>Are you ready to find your Team<SpannedLetter>8</SpannedLetter>s?</>
                                :
                                <>start your coding journey with Team<SpannedLetter>8</SpannedLetter>s!</>
                            }
                        </Text>
                    </TextContainer>
                </ImageContainer>
            </RightScreenContainer>
        </AuthContainer>
        </>

    );
};


export default AuthLayout;
