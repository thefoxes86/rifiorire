import { ApolloClient, InMemoryCache } from "@apollo/client";
import WOO_CONFIG from "utils/config/nextConfig";

const clientRender = new ApolloClient({
  uri: WOO_CONFIG.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default clientRender;
