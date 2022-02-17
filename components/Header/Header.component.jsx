import Head from "next/head";
import Navbar from "./Navbar.component";
import FETCH_MENU from "../../utils/gql/GQL_MENU";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import client from "utils/apollo/ApolloClient";

/**
 * Header for the application.
 * Adds title and some meta properties
 */
const Header = ({ title }) => {
  const { data, loading, error } = useQuery(FETCH_MENU);

  console.log(data);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Header;
