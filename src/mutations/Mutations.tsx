import { gql } from "@apollo/client";

export const COMPLETE_TODO = gql`
    mutation UpdateStudent($id:String!,$checkbox:Boolean!,$title:String!,$chores:String!,$home:String!,$celebration:String!,$homeStatus:Boolean!,$time:Boolean!,$diamond:Boolean!){
        updateStudent(id:$id,checkbox:$checkbox,title:$title,chores:$chores,home:$home,celebration:$celebration,homeStatus:$homeStatus,time:$time,diamond:$diamond){
          id  
          checkbox
            title
            chores
            home
            celebration
            homeStatus
            time
            diamond
          }
        }
  `;