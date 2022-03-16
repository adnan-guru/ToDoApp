import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './TaskCardStyle';
import { Checkbox } from 'native-base';
import CalenderIcon from '../../../assets/icons/taskCardIcons/calender.svg';
import Clock from '../../../assets/icons/taskCardIcons/clock.svg';
import Repeat from '../../../assets/icons/taskCardIcons/Repeat(2).svg';
import Message from '../../../assets/icons/taskCardIcons/message.svg';

interface IconUs {
    width?: number
    height?: number
    color?: string
}
const TaskCard = ({ width = 18, height = 18, color = "white" }: IconUs) => {

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);

    return (
        <>
            {/* 1 */}
            <View style={styles.cardContainer}>
                <View style={styles.taskAndCheckboxRow}>
                    <View style={styles.bulletAndTaskRow}>
                        <View style={styles.diamond}></View>
                        <Text  style={check1 ? styles.checkedTask : styles.task}>
                            Pick Melanie from football game
                        </Text>
                    </View>
                    <Checkbox onChange={() => setCheck1(!check1)} style={check1 ? styles.checked : styles.nonChecked} value="one" my={2} />
                </View>
            </View>
            {/* 2 */}
            <View style={styles.cardContainer}>
                <View style={styles.taskAndCheckboxRow}>
                    <View style={styles.bulletAndTaskRow}>
                        <Text  style={check2 ? styles.checkedTask : styles.task}>
                            Pick Melanie from football game
                        </Text>
                    </View>
                    <Checkbox onChange={() => setCheck2(!check2)} style={check2 ? styles.checked : styles.nonChecked} value="one" my={2} />
                </View>
                <View style={styles.smallCardsRow}>
                    <View style={styles.firstCard}>
                        <Text style={styles.smallCardText}>Home</Text>
                    </View>
                    <View style={styles.secondCard}>
                        <Text style={styles.smallCardText}>Celebration</Text>
                    </View>
                    <View style={styles.thirdCard}>
                        <Text style={styles.smallCardText}>Chores</Text>
                    </View>
                </View>
            </View>
            {/* 3 */}
            <View style={styles.cardContainer}>
                <View style={styles.taskAndCheckboxRow}>
                    <View style={styles.bulletAndTaskRow}>
                        <Text  style={check3 ? styles.checkedTask : styles.task}>
                            Mow the lawn
                        </Text>
                    </View>
                    <Checkbox onChange={() => setCheck3(!check3)} style={check3 ? styles.checked : styles.nonChecked} value="one" my={2} />
                </View>
                {/* icons */}
                <View style={styles.dateAndTimeRow}>
                    <View style={styles.dateRow}>
                        <CalenderIcon width={width} height={width} />
                        <Text style={styles.smallText}>28 Sep</Text>
                    </View>
                    <View style={styles.timeRow}>
                        <Clock width={width} height={width} style={styles.RowIcon} />
                        <Text style={styles.smallText}>14.30</Text>
                    </View>
                    <View style={styles.timeRow}>
                        <Message width={width} height={width} style={styles.RowIcon} />
                        <Text style={styles.smallText}>1</Text>
                    </View>
                    <View style={styles.timeRow}>
                        <Repeat width={width} height={width} style={styles.RowIcon} />
                    </View>
                </View>
            </View>
            {/* 4 */}
            <View style={styles.cardContainer}>
                <View style={styles.taskAndCheckboxRow}>
                    <View style={styles.bulletAndTaskRow}>
                        <View style={styles.diamond}></View>
                        <Text  style={check4 ? styles.checkedTask : styles.task}>
                            Pick Melanie from football game
                        </Text>
                    </View>
                    <Checkbox onChange={() => setCheck4(!check4)} style={check4 ? styles.checked : styles.nonChecked} value="one" my={2} />
                </View>
            </View>
            {/* 5 */}
            <View style={styles.cardContainer}>
                <View style={styles.taskAndCheckboxRow}>
                    <View style={styles.bulletAndTaskRow}>
                        <View style={styles.diamond}></View>

                        <Text style={check5 ? styles.checkedTask : styles.task}>
                            Call carpenter to fix kitchen pipe
                        </Text>
                    </View>
                    <Checkbox onChange={() => setCheck5(!check5)} style={check5 ? styles.checked : styles.nonChecked} value="one" my={2} />
                </View>
                <View style={styles.dateAndTimeRow}>
                    <View style={styles.dateRow}>
                        <CalenderIcon width={width} height={width} />
                        <Text style={styles.smallText}>28 Sep</Text>
                    </View>
                    <View style={styles.timeRow}>
                        <Clock width={width} height={width} style={styles.RowIcon} />
                        <Text style={styles.smallText}>14.30</Text>
                    </View>
                    <View style={styles.timeRow}>
                        <Message width={width} height={width} style={styles.RowIcon} />
                        <Text style={styles.smallText}>1</Text>
                    </View>
                </View>
                <View style={styles.smallCardsRow}>
                    <View style={styles.firstCard}>
                        <Text style={styles.smallCardText}>Home</Text>
                    </View>
                    <View style={styles.secondCard}>
                        <Text style={styles.smallCardText}>Celebration</Text>
                    </View>
                    <View style={styles.thirdCard}>
                        <Text style={styles.smallCardText}>Chores</Text>
                    </View>
                </View>
            </View>
        </>
    );
}
export default TaskCard;
