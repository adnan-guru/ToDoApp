import { gql } from "@apollo/client";
export const FETCH_DATA = gql`
query getData{
  studentsList{
    id
    time
    title
    celebration
    chores
    checkbox
    home
    homeStatus
    diamond
    
  }
}
`;