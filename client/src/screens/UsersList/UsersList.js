// * Modules
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import lookup from "country-code-lookup";
import isEmpty from "lodash/isEmpty";

// * Components
import UserCard from "./components/UserCard/UserCard";
import TopBar from "./components/TopBar/TopBar";
import CardSkeleton from "./components/CardSkeleton/CardSkeleton";
import NotFound from "./components/NotFound/NotFound";

// * API
import usersApi from "../../api/endpoints/users";

function UsersList() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [roles, setRoles] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);

  const handleCountries = (event) => {
    const {
      target: { value },
    } = event;
    setCountries(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleRoles = (event) => {
    const {
      target: { value },
    } = event;
    setRoles(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleProgrammingLanguages = (event) => {
    const {
      target: { value },
    } = event;
    setProgrammingLanguages(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const users = await usersApi.getUsers();
      setUsers(users.data);
      // TODO: CHANGE BEFORE PRODUCTION !!!
      setTimeout(function () {
        setIsLoading(false);
      }, 2000);
    };
    getUsers();
  }, []);

  return (
    <>
      <CssBaseline />
      <TopBar
        countries={countries}
        roles={roles}
        programmingLanguages={programmingLanguages}
        handleCountries={handleCountries}
        handleRoles={handleRoles}
        handleProgrammingLanguages={handleProgrammingLanguages}
        handleSubmitFilter={handleSubmitFilter}
      />
      {isLoading ? (
        <GridContainer>
          <CardsContainer>
            <CardSkeleton cards={6} />
          </CardsContainer>
        </GridContainer>
      ) : (
        <div>
          {isEmpty(users) ? (
            <InfoContainer>
              <NotFound />
            </InfoContainer>
          ) : (
            <div>
              <GridContainer>
                <CardsContainer>
                  {users.map((element) => (
                    <CardContainer>
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
  grid-template-rows: repeat(2, 370px);
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 75%;
`;

const CardContainer = styled.div`
  display: flex; /* new */
  align-items: center; /* new */
  justify-content: center; /* new */
`;

const PaginationContainer = styled.div`
  margin: 10px 0 20px 0;
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
