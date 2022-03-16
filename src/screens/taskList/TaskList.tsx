import React from 'react';
import { View, ScrollView } from 'react-native';
import TaskCard from '../../components/taskCard/TaskCard';
import { styles } from './TaskListStyle'
import AppLoading from 'expo-app-loading';
import Fonts from '../../constants/Fonts';
import Header from '../../components/header/Header';
// import { gql,useQuery,useMutation } from '@apollo/client';
const Tasklist = () => {
  const [{ fontsLoaded }] = Fonts();
  if (!fontsLoaded) {
    return <AppLoading />;
  };


  //   const EXCHANGE_RATES = gql`
  //   query GetExchangeRates {
  //     rates(currency: "USD") {
  //       currency
  //       rate
  //     }
  //   }
  // `;
  // const [fetDate] = useMutation(EXCHANGE_RATES);

  return (
    <View style={styles.pageContainer}>
      <Header />
      <View style={styles.bgHeaderClr} />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TaskCard />
        </ScrollView>
      </View>
    </View>
  );
}
export default Tasklist;
