import { gql } from "@apollo/client";

export const GET_ALL_CATS = gql`
  {
    fetchCats {
      id
      name
      age
      image_url
      is_liked
      description
      background_color
      owner {
        name
        phone
        email
        address
      }
    }
  }
`;

export const GET_CAT = gql`
  query FetchCat($id: Int) {
    fetchCat(id: $id) {
      id
      name
      age
      image_url
      is_liked
      description
      background_color
      owner {
        name
        phone
        email
        address
      }
    }
  }
`;

export const UPDATE_LIKE_CAT = gql`
  mutation LikeCat($id: Int) {
    likeCat(id: $id) {
      success
      error
      data {
        id
        is_liked
      }
    }
  }
`;

export const UPDATE_UNLIKE_CAT = gql`
  mutation UnlikeCat($id: Int) {
    UnlikeCat(id: $id) {
      success
      error
      data {
        id
        is_liked
      }
    }
  }
`;
