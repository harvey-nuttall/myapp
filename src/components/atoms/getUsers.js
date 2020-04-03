import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_USERS = gql`
  {
    getUsers {
      name
      id
      email
      password
      accounts {
        number
        sortcode
        balance
      }
    }
  }
`;

function GetUsers() {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getUsers.map(({ name, email }) => (
    <div>
      <p>
        {name}: {email}
      </p>
    </div>
  ));
}

export default GetUsers;
