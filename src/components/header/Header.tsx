import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Box, HStack, IconButton, Text, Icon, Center, VStack} from "native-base";
import { styles } from './HeaderStyle';
import Icon2 from '../../../assets/icons/headerIcons/Vector (1).svg';
import Union from '../../../assets/icons/headerIcons/Union (4).svg';
import Union1 from '../../../assets/icons/headerIcons/Union (3).svg';
import Add from '../../../assets/icons/headerIcons/add.svg';
import { Colors } from '../../constants/Colors';
import { useRoute } from '@react-navigation/native';
interface IconUs {
  width?: number
  height?: number
  color?: string
}

export default function Header({ width = 20, height = 20, color = "#ffffff" }: IconUs) {
  const route = useRoute();
  return (
      <View>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle='light-content' backgroundColor={Colors.headerClr} />
        </SafeAreaView>
        <Box>
          <Center>
            <Box bg={Colors.headerClr} />
            <HStack bg={Colors.headerClr} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%" >
              <HStack alignItems="center">
                <Box style={styles.box}>
                  <Text color="white"  style={styles.tasks} fontFamily='OpenSans_400Regular' fontSize="2xl" fontWeight="bold">
                  {route.name}
                  </Text>
                  <View style={styles.border} />
                </Box>
              </HStack>
              <HStack>
                <IconButton icon={<Icon as={<Icon2 width={width} height={height} fill={color} />} name="search" size="sm" color="white" />} />
                <IconButton icon={<Icon as={<Union width={width} height={height} fill={color} />} name="search" size="sm" color="white" />} />
                <IconButton icon={<Icon as={<Union1 width={width} height={height} fill={color} />} name="more-vert" size="sm" color="white" />} />
                <Box alignItems="center">
                  <VStack>
                    <View style={styles.notification}><Text style={styles.notificationNumber}>3</Text></View>
                    <IconButton icon={<Icon as={<Add width={width} height={height} fill={color} />} name="more-vert" size="sm" color="white" />} />
                  </VStack>
                  </Box>
              </HStack>
            </HStack>
          </Center>
        </Box>
      </View>
  )
}
