import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './TaskCardStyle';
import { Checkbox } from 'native-base';
import CalenderIcon from '../../../assets/icons/taskCardIcons/calender.svg';
import Clock from '../../../assets/icons/taskCardIcons/clock.svg';
import Repeat from '../../../assets/icons/taskCardIcons/Repeat(2).svg';
import Message from '../../../assets/icons/taskCardIcons/message.svg';
import { colors } from '../../constants/Contants';
import { useTaskCard } from './useTaskCard';

interface IconUs {
    width?: number
    height?: number
    color?: string
    completeHandler?:any
}

const TaskCard = ({ width = 18, height = 18, color = "white",completeHandler}: IconUs) => {
    const [{ data, loading, error }] = useTaskCard();
    
    if (loading) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator color={colors.secondaryColor} size="large" />
            </View>
        )
    }
    if (error) {
        return (
            <Text>{error.message}</Text>
        )
    }
    return (
        <>
            {
                data?.studentsList.map((item: { id: React.Key; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; checkbox: Boolean; time: Boolean;diamond:Boolean; homeStatus: Boolean ;home:any;chores:any;celebration:any}) => {
                    return (
                        <View style={styles.cardContainer} key={item?.id}>

                            <View style={styles.taskAndCheckboxRow}>
                                <View style={styles.bulletAndTaskRow}>
                                   {
                                       item.diamond?
                                       <View style={styles.diamond}></View>
                                       :
                                       <></>
                                   }
                                    <Text style={item.checkbox ? styles.checkedTask : styles.task}>
                                        {item?.title}
                                    </Text>
                                </View>
                                <Checkbox accessibilityLabel="checkbox"  onChange={()=>completeHandler(item)} defaultIsChecked={item?.checkbox} style={item.checkbox ? styles.checked : styles.nonChecked} value="one" my={2} />
                            </View>
                            {item.time ?
                                (
                                    <View style={styles.dateAndTimeRow}>
                                        <View style={styles.dateRow}>
                                            <CalenderIcon width={width} height={height} />
                                            <Text style={styles.smallText}>28 Sep</Text>
                                        </View>
                                        <View style={styles.timeRow}>
                                            <Clock width={width} height={height} style={styles.RowIcon} />
                                            <Text style={styles.smallText}>14.30</Text>
                                        </View>
                                        <View style={styles.timeRow}>
                                            <Message width={width} height={height} style={styles.RowIcon} />
                                            <Text style={styles.smallText}>1</Text>
                                        </View>
                                        <View style={styles.timeRow}>
                                            <Repeat width={width} height={height} style={styles.RowIcon} />

                                        </View>
                                    </View>
                                ) :
                                <></>
                            }
                            {
                                item.homeStatus ?
                                    <View style={styles.smallCardsRow}>
                                        <View style={styles.firstCard}>
                                            <Text style={styles.smallCardText}>{item.home}</Text>
                                        </View>
                                        <View style={styles.secondCard}>
                                            <Text style={styles.smallCardText}>{item.chores}</Text>
                                        </View>
                                        <View style={styles.thirdCard}>
                                            <Text style={styles.smallCardText}>{item.celebration}</Text>
                                        </View>
                                    </View>
                                    :
                                    <></>
                            }
                        </View>
                    )
                })

            }
        </>
    );
}
export default TaskCard;
