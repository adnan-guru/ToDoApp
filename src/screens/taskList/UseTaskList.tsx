import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { COMPLETE_TODO } from '../../mutations/Mutations';
export default function UseTaskList() {
  const [check, setCheck] = useState(false);
  const [completedTodo, { data, loading, error }] = useMutation(COMPLETE_TODO);
  const completeHandler = (item) => {
    completedTodo({
      variables: {
        id: item?.id,
        time: item?.time,
        title: item?.title,
        celebration: item?.celebration,
        chores: item?.chores,
        checkbox: item?.checkbox ? false : true,
        home: item?.home,
        homeStatus: item?.homeStatus,
        diamond: item?.diamond,
      },
      update: (cache, { item}) => {
        try {
          const cacheId = cache.identify(item?.id);
          cache.modify({
            fields: {
              messages: (existingFiled, { toRefrences }) => {
                return [...existingFiled, toRefrences(cacheId)]
              }
            }
          })

        } catch (error) {
          console.log(error.message);

        }
      }
    })


  }
  return [{ data, loading, error, check, setCheck, completeHandler }]
}




