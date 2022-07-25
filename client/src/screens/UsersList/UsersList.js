// * Modules
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "styled-components";
import lookup from "country-code-lookup";
import isEmpty from "lodash/isEmpty";
import Modal from "@mui/material/Modal";
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'

// * Redux
import { useSelector, useDispatch } from "react-redux";

// * Constants
import ROUTES from '../../constants/routes';

// * Components
import UserCard from "./components/UserCard/UserCard";
import TopBar from "./components/TopBar/TopBar";
import CardSkeleton from "./components/CardSkeleton/CardSkeleton";
import NotFound from "./components/NotFound/NotFound";
import Pagination from "./components/Pagination/Pagination"
import UserProfile from "./components/UserProfile/UserProfile";

// * API
import usersApi from "../../api/endpoints/users";
import authApi from "../../api/endpoints/auth";

/**
 * Global style applied for this component.
 * TODO: Move this global style to the root component after refactoring
 */
const GlobalStyle = createGlobalStyle`
  body {  
    background: #26292B !important;
    font-family: "Montserrat" !important;
  }
`

function UsersList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Get global state from redux
   */
  const {isAuth} = useSelector(
    (state) => state.userReducer
  );

  /**
   * Set of states that are used by this component
   */

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [roles, setRoles] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [open, setOpen] = useState(false);
  const [showUser, setShowUser] = useState({});

  /**
   * Handle open and close for modal window that pops up whenever user clicks on the card
   */
  const handleOpen = (user) => {
    setShowUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowUser({});
  };

  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleCountries = (event) => {
    const {
      target: { value },
    } = event;
    setCountries(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleRoles = (event) => {
    const {
      target: { value },
    } = event;
    setRoles(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  /**
   * This is programmingLanguages useState filter, don't change it without approvement !!!
   */
  const handleProgrammingLanguages = (event) => {
    const {
      target: { value },
    } = event;
    setProgrammingLanguages(
      /* On autofill we get a stringified value. */
      typeof value === "string" ? value.split(",") : value
    );
  };

  /**
   * Function used to regenerate the list of users with filters
   * TODO: Review this function for potential bugs and in case of any make specific fixes
   */
  const handleSubmitFilter = () => {
    const getUsersFiltered = async () => {
      setIsLoading(true);
      const users = await usersApi.getUsersFiltered(
        countries,
        roles,
        programmingLanguages
      );
      setUsers(users.data);
      // TODO: CHANGE BEFORE PRODUCTION !!!
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
    };
    getUsersFiltered();
  };

  /**
   * Function used in <NavBar /> and passed as a props, it handles logout button
   */
  const handleUserLogout = () => {
    dispatch(authApi.logoutUser())
  }

  /**
   * This function will work one time when user loads page first time
   * he will get list of all users that can be invited to the team
   * this function should be optimized later for scaling purposes
   * TODO: add lazy loading support!
   */
  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const users = await usersApi.getUsers();
      console.log(users)
      setUsers(users.data);
      // TODO: CHANGE BEFORE PRODUCTION !!!
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
    };

    if (localStorage.getItem("token")) {
      dispatch(authApi.checkAuth());
    }

    getUsers();
  }, []);


  /*
   * This useEffect is triggered when user presses logout button in the NavBar component
  */
  useEffect(() => {
    if (!isAuth) {
        navigate(ROUTES.login, { replace: true })
    } 
  }, [isAuth, navigate])

  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <TopBar
        countries={countries}
        roles={roles}
        programmingLanguages={programmingLanguages}
        handleCountries={handleCountries}
        handleRoles={handleRoles}
        handleProgrammingLanguages={handleProgrammingLanguages}
        handleSubmitFilter={handleSubmitFilter}
        handleUserLogout={handleUserLogout}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserProfile user={showUser} handleClose={handleClose}/>
      </Modal>
      {/* Load skeleton before showing real cards to improve performance of the app */}
      {isLoading ? (
        <GridContainer>
          <CardsContainer>
            <CardSkeleton cards={6} />
          </CardsContainer>
        </GridContainer>
      ) : (
        <div>
          {/* If nothing was found, show user a NotFound container */}
          {isEmpty(users) ? (
            <InfoContainer>
              <NotFound />
            </InfoContainer>
          ) : (
            <div>
              <GridContainer>
                <CardsContainer>
                  {users.map((element, index) => (
                    <CardContainer
                      onClick={() => handleOpen(element)}
                      key={index}
                    >
                        <UserCard
                          countryCode={lookup.byCountry(element.userCountry)}
                          key={element._id}
                          person={element}
                        />
                    </CardContainer>
                  ))}
                </CardsContainer>
              </GridContainer>
              <PaginationContainer>
                <Pagination count={10} size="large" />
              </PaginationContainer>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 340px);
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 75%;
`;

const CardContainer = styled.div`
  display: flex; /* new */
  align-items: center; /* new */
  justify-content: center; /* new */
`;

const PaginationContainer = styled.div`
  margin: 75px 0 20px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6%;
`;

export default UsersList;
