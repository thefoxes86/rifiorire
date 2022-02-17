import { gql } from "@apollo/client";

const FETCH_MENU = gql`
  query MyQuery {
    menu(idType: NAME, id: "primary") {
      menuItems(where: { location: PRIMARY }) {
        nodes {
          path
          label
          parentId
        }
      }
    }
  }
`;

export default FETCH_MENU;
