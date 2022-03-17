import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import TaskCard from '../../components/taskCard/TaskCard';
import { styles } from './TaskListStyle'
import Header from '../../components/header/Header';
import UseTaskList from './UseTaskList';
import { Text } from 'native-base';
import { colors } from '../../constants/Contants';
const Tasklist = () => {
  const [{ data, loading, error, check, setCheck, completeHandler }] = UseTaskList();
  return (
    <View style={styles.pageContainer}>
      <Header />
      <View style={styles.bgHeaderClr} />
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            loading ?
              <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator color={colors.secondaryColor} size="large" />
              </View>
              :
              error?
              <Text>Error{error.message}</Text>
              :
              <TaskCard check={check} setCheck={setCheck} completeHandler={completeHandler} />
          }
        </ScrollView>
      </View>
    </View>
  );
}
export default Tasklist;