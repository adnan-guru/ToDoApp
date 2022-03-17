import { gql } from '@apollo/client';

export const typeDefs = gql`
extend type Query {
  isLoggedIn: Boolean!
  departments: [Object!]!
}

extend type Mutation {
  addTodo(
    name: String!   
    phone: number!   
  ):{


  }

}
`;
