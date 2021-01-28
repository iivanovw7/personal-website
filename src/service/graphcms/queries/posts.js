import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_POSTS = gql`
    query GetPosts($skip: Int, $first: Int) {
        posts(skip: $skip, first: $first, orderBy: createdAt_DESC) {
            author {
                id
                name
            }
            createdAt
            date
            excerpt
            id
            subject
            tags
            title
            updatedAt
        }
    }
`;

export const GET_POST = gql`
    query GetPost($postId: ID!) {
        post(where: { id: $postId }) {
            author {
                id
                name
            }
            content {
                html
            }
            createdAt
            date
            excerpt
            id
            subject
            tags
            title
            updatedAt
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
