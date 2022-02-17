import { withRouter } from "next/router";
import { useState } from "react";
import Header from "components/Header/Header.component";
import IndexProducts from "components/Product/IndexProducts.component";

import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

import client from "utils/apollo/ApolloClient";

import { GET_PRODUCTS_FROM_CATEGORY } from "utils/gql/GQL_QUERIES";
import TitleAndText from "components/TitleAndText";
import Link from "next/link";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
/**
 * Display a single product with dynamic pretty urls
 */
const Produkt = ({ categoryName, products }) => {
  const [value, setValue] = useState();
  console.log(products);

  let error = false;

  const handleOnchange = (val) => {
    setValue(val);
  };

  return (
    <>
      <Header title={`- ${categoryName ? categoryName : ""}`} />
      {products ? (
        <>
          <TitleAndText title={categoryName} color="black" text="" />
          <div className="container mx-auto my-10 w-100 flex flex-col items-start justify-center">
            <Link href="/categorie">
              <a>
                <h3 className="color-primary text-lg font-thin">
                  tutte le categorie
                </h3>
              </a>
            </Link>
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
          <IndexProducts products={products} col={4} />
        </>
      ) : (
        <div className="mt-8 text-2xl text-center">Laster produkt ...</div>
      )}
      {/* Display error message if error occured */}
      {error && (
        <div className="mt-8 text-2xl text-center">
          Feil under lasting av produkt ...
        </div>
      )}
    </>
  );
};

export default withRouter(Produkt);

export async function getServerSideProps(context) {
  let {
    query: { id },
  } = context;

  const res = await client.query({
    query: GET_PRODUCTS_FROM_CATEGORY,
    variables: { id },
  });

  return {
    props: {
      categoryName: res.data.productCategory.name,
      products: res.data.productCategory.products.nodes,
    },
  };
}
