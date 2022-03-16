// import { gql } from '@apollo/client';

// export const typeDefs = gql`
// extend type Query {
//   isLoggedIn: Boolean!
//   departments: [Object!]!
// }

// extend type Mutation {
//   addTodo(
//     name: String!   
//     phone: number!   
//   ):{


//   }

// }
// `;


// // export const createUpdateMixMatchItem = (cache, {itemData}) => {
// //   const queryResult = cache.readQuery({
// //     query: GET_ALL_PROMOS_C,
// //   });
// //   if (queryResult) {
// //     let {pItems} = queryResult;
// //     let checkArray = [];
// //     checkArray = pItems?.filter(
// //       i => itemData?.promotionId?.toString() === i?.promotionId?.toString(),
// //     );

// //     if (checkArray?.length > 0) {
// //       pItems = pItems?.map(i => {
// //         if (itemData?.promotionId?.toString() === i?.promotionId?.toString()) {
// //           return itemData;
// //         } else {
// //           return i;
// //         }
// //       });
// //     } else {
// //       pItems = [itemData, ...pItems];
// //     }

// //     const data = {
// //       pItems,
// //     };

// //     cache.writeQuery({query: GET_ALL_PROMOS_C, data});
// //     return pItems;
// //   }
// //   return [];
// // };