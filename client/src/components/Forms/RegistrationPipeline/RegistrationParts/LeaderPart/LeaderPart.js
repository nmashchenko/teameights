// * Modules
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import ProgressBar from "../../ProgressBar/ProgressBar";
import {options} from './Leader.options';
import registrationAuthApi from "../../../../../api/endpoints/registration-auth";
import NavLogo from "../../NavLogo/NavLogo";
import yupValidation from "../../YupValidations/YupValidations";
import Alert from '../../Alert/Alert'

// * Router
import {useNavigate } from 'react-router-dom'
import ROUTES from "../../../../../constants/routes";

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  SelectField,
  InfoContainer,
} from './LeaderPart.styles'


function LeaderPart() {
    const navigate = useNavigate();
  
    // * useStates
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState([]);
    const [value, setValue] = useState("");
  
    // * Redux
    const dispatch = useDispatch();
    const { setUserLeader } = registrationAuth.actions;
  
    const { progress, userData } = useSelector(
      (state) => state.registrationReducer
    );
  
    // * Functions
    const handleSubmit = async () => {
      try {
        value
          ? await yupValidation.answerSchema.validate(value)
          : await yupValidation.answerSchema.validate({ value });
          value.value === 'true' ? dispatch(setUserLeader(true)) :  dispatch(setUserLeader(false))
          dispatch(registrationAuthApi.finishRegistration(userData));
          navigate(ROUTES.temporary, { replace: true })
      } catch (err) {
        setErrors(err.errors);
        setOpen(true);
      }
    };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };
  
    const changeHandler = (value) => {
      setValue(value);
    };
  
    useEffect(() => {}, [errors]);
  

  return(
    <>
      <NavLogo />
      {errors.length > 0 && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert onClose={handleClose} severity="error">
            {errors[0]}
          </Alert>
        </Snackbar>
      )}
      <Container>
        <ProgressBar done={progress} />
          <CardContainer>
            <InfoContainer>
              <TopText>Do you want to be a leader of the team?</TopText>
              <TopText fontSize='14px' fontWeight='500' margin='20px 0 10px 0'>Please note that leaders will be marked with special emoji 👑 and will be required to control their teams.</TopText>
              <TopText fontSize='14px' fontWeight='700' margin='0 0 10px 0'>Team leaders typically have more than 1 year of experience.</TopText>
            </InfoContainer>
            <MiddleTextContainer>
              <SelectField
                options={options}
                value={value}
                onChange={changeHandler}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#E0FF00",
                    primary: "black",
                  },
                })}
              />
            </MiddleTextContainer>
            <ContinueButton onClick={handleSubmit}>Finish</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default LeaderPart;