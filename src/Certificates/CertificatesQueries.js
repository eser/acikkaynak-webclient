import { gql } from '@apollo/client'

export const FETCH_ALL_CATEGORIES_AND_CERTIFICATES = gql`
  {
   certificateCategoriesAll {
    edges {
      node {
        id
        name
        slug
        description
        certificates {
          edges {
            node {
              name
              description
              slug
              type
            }
          }
        }
      }
    }
  }
}
`