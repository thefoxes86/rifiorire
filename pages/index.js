import CategoryProductsLeft from "components/CategoryProductsLeft";
import CategoryProductsRight from "components/CategoryProductsRight";
import Header from "components/Header/Header.component";
import Hero from "components/Index/Hero.component";
import TitleAndText from "components/TitleAndText";
import Button from "components/Button";
import IndexProductsLittle from "components/Product/IndexProductsLittle.component";
import BackroundImage from "components/Button/BacgkroundImage";
import client from "utils/apollo/ApolloClient.js";
import { GQL_RIFIORIRECASA } from "utils/gql/GQL_RIFIORIRE";
import { Helmet } from "react-helmet";

/**
 * Main index page
 * @param {Object} products
 * Initial static data is sent as props from getStaticProps and loaded through 'utils/gql/INITIAL_PRODUCTS'
 */
const HomePage = ({ secondCategory, firstCategory, page, pagebuilder }) => {
  return (
    <>
      <Helmet>
        <title>{page.title ? page.title : ""}</title>
        <meta name="description" content="WooCommerce webshop" />
        <meta name="keywords" content="Ecommerce, WooCommerce" />
        <meta
          property="og:title"
          content={page.title ? page.title : ""}
          key="pagetitle"
        />
      </Helmet>
      <Hero />
      <TitleAndText
        title={pagebuilder.titleSection1 || ""}
        text={pagebuilder.textSections1 || ""}
        link={pagebuilder.linkSection1 || "#"}
        color="violet"
      />
      <CategoryProductsLeft
        title={pagebuilder.titleCategory1 || ""}
        link={pagebuilder.linkSection1 || "#"}
        img={pagebuilder.imageCategory1 || ""}
        products={firstCategory}
      />
      <CategoryProductsRight
        title={pagebuilder.titleCategory2 || ""}
        link={pagebuilder.linkSection2 || "#"}
        img={pagebuilder.imageCategory2 || ""}
        products={secondCategory}
      />
      <Button path="#" text="Category" withLine={true} color="black" />
      {secondCategory && <IndexProductsLittle products={secondCategory} />}
      <BackroundImage
        img="images/demo-about-image.png"
        title="Ciao, siamo Rebecca e Simone"
        text="Pensiamo che ogni gioiello debba essere…"
        link="#"
      />
      <TitleAndText
        title={pagebuilder.titleSection2 || ""}
        text={pagebuilder.textSection2 || ""}
        link={pagebuilder.linkSection2 || "#"}
        color="primary"
      />
      <BackroundImage img="images/demo-footer-img.png" />
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
      pagebuilder: data.page.pagebuilder,
      firstCategory: data.firstCategory.nodes,
      secondCategory: data.secondCategory.nodes,
      loading,
      networkStatus,
    },
    revalidate: 10,
  };
}
