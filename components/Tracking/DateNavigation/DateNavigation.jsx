import { useEffect, useState } from "react"
import { Button, Pressable, StyleSheet,Text, View } from "react-native"
import { defaultStyles } from "../../../utils/defaultStyles";
import { Path, Svg } from "react-native-svg";

const DateNavigation = () => {
    const [dateSelected,setDateSelected] = useState();

    useEffect(() => {
        setDateSelected(new Date().toLocaleString('en-US'))
    }, [])
    

  return (
    <View style={styles.dateNavigationWrapper}>
        <View style={styles.dateNavigation}>
            <Pressable style={styles.navigation}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none" viewBox="0 0 10 16">
                <Path fill="#E8E8E8" d="M10 1.88 8.097 0 0 8l8.097 8L10 14.12 3.82 8 10 1.88Z"/>
            </Svg>
            </Pressable>
            <Text>{dateSelected}</Text>
            <Pressable style={styles.navigation}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none" viewBox="0 0 10 16">
                <Path fill="#E8E8E8" d="M0 1.88 1.903 0 10 8l-8.097 8L0 14.12 6.18 8 0 1.88Z"/>
            </Svg>
            </Pressable>
        </View>
        <View style={styles.navigationRule}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    dateNavigation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
    },
    dateNavigationWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        marginBottom: defaultStyles.margin.m
    },
    navigation: {
        backgroundColor: defaultStyles.colour.offsetColour,
        width: 40,
        height: 40,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationText: {
        color: defaultStyles.colour.primaryColour
    },
    navigationRule: {
        height: 4,
        width: '44%',
        backgroundColor: defaultStyles.colour.offsetColour,
        borderRadius: 4
    }
})
export default DateNavigation