import CategoryProductsLeft from "components/CategoryProductsLeft";
import CategoryProductsRight from "components/CategoryProductsRight";
import Header from "components/Header/Header.component";
import Hero from "components/Index/Hero.component";
import TitleAndText from "components/TitleAndText";

import client from "utils/apollo/ApolloClient.js";

import { GQL_RIFIORIRECASA } from "utils/gql/GQL_RIFIORIRE";

/**
 * Main index page
 * @param {Object} products
 * Initial static data is sent as props from getStaticProps and loaded through 'utils/gql/INITIAL_PRODUCTS'
 */
const HomePage = ({ secondCategory, firstCategory, page }) => {
  return (
    <>
      <Header title={page.title} />
      <Hero />
      <TitleAndText
        title="happy mother's day"
        text="In occasione della festa della mamma, personalizza collane,
            bracciali e orecchini creando un regalo unico e speciale. Un
            gioiello ricco di sentimenti, così che possa sempre portare con sé
            il tuo amore."
        link="#"
      />

      <CategoryProductsLeft
        title="summer spring 2022"
        link="#"
        img=""
        products={firstCategory}
      />

      <CategoryProductsRight
        title="summer spring 2022"
        link="#"
        img=""
        products={secondCategory}
      />
      {/* <PageTitle title="Produkter" />
      {products && <IndexProducts products={products} />} */}
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const { data, loading, networkStatus } = await client.query({
    query: GQL_RIFIORIRECASA,
  });

  return {
    props: {
      page: data.page,
      firstCategory: data.firstCategory.nodes,
      secondCategory: data.secondCategory.nodes,
      loading,
      networkStatus,
    },
    revalidate: 10,
  };
}
