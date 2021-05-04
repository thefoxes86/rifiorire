import Head from "next/head";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar.component";

/**
 * Header for the application.
 * Adds title and some meta properties
 */
const Header = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? title : ""}</title>
        <meta name="description" content="WooCommerce webshop" />
        <meta name="keywords" content="Ecommerce, WooCommerce" />
        <meta
          property="og:title"
          content={title ? title : ""}
          key="pagetitle"
        />
      </Helmet>
      <Navbar />
    </>
  );
};

export default Header;
