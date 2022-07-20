import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import UserCard from "./components/UserCard/UserCard";
import TopBar from "./components/TopBar/TopBar";
import usersApi from '../../api/endpoints/users'
const lookup = require('country-code-lookup')

function UsersList() {
  const [isLoading, setIsLoading] = useState(false)
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
    const getUsersFiltered = async() => {
      setIsLoading(true);
      const users = await usersApi.getUsersFiltered(countries, roles, programmingLanguages);
      setUsers(users.data);
      setIsLoading(false);
    }
    getUsersFiltered()
  }

  useEffect(() => {
    const getUsers = async() => {
      setIsLoading(true);
      const users = await usersApi.getUsers();
      setUsers(users.data);
      setIsLoading(false);
    }
    getUsers()
  }, []) 

  return (
    <>
      {isLoading ? "loading"  : "users: " + JSON.stringify(users)}
      <TopBar
        countries={countries}
        roles={roles}
        programmingLanguages={programmingLanguages}
        handleCountries={handleCountries}
        handleRoles={handleRoles}
        handleProgrammingLanguages={handleProgrammingLanguages}
        handleSubmitFilter={handleSubmitFilter}
      />
      <CssBaseline />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "70px",
          flexDirection: "column",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "200px",
          }}
        >
          {users.map((element) => (
              <UserCard countryCode={lookup.byCountry(element.userCountry)} key={element._id} person={element}/>
          ))}
          {/* <UserCard countryCode="US" />
          <UserCard countryCode="UA" />
          <UserCard countryCode="GE" /> */}
        </div>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "200px",
          }}
        >
          <UserCard countryCode="FI" />
          <UserCard countryCode="BE" />
          <UserCard countryCode="FR" />
        </div> */}
      </div>
    </>
  );
}

export default UsersList;
