import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_POSTS = gql`
    query GetPosts($skip: Int, $first: Int) {
        posts(skip: $skip, first: $first, orderBy: createdAt_DESC) {
            id
            subject
            author {
                id
            }
            content {
                html
            }
            excerpt
            tags
            title
            date
            updatedAt
            createdAt
        }
    }
`;

// export const GET_TAGS = gql`
//   query GetTags{
//     getTags
//   }
// `;
//
// export const GET_POST = gql`
//   query GetPost($_id: String!){
//     getPost(_id: $_id){
//       _id
//       text
//       title
//       subject
//       created
//       author
//       tags
//     }
//   }
// `;
//
// export const FIND_POSTS_BY_TAG = gql`
//   query FindPostsByTag($tag: String!){
//     findPostsByTag(tag: $tag){
//       _id
//       text
//       title
//       subject
//       created
//       author
//       tags
//     }
//   }
// `;
//
// export const FIND_POSTS_BY_KEYWORD = gql`
//   query FindPostsByKeyword($keyword: String!){
//     findPostsByKeyword(keyword: $keyword){
//       _id
//       text
//       title
//       subject
//       created
//       author
//       tags
//     }
//   }
// `;
