import { StyleSheet,Pressable, View, Text } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles, styleMixins } from '../../../../utils/defaultStyles'

const statusOptions = ['untracked','success','failure'];

const DaySelector = ({day}) => {
    const [statusIndex,setStatusIndex] = useState(0);

    const toggleStatus = (index) => {
        setStatusIndex(index > 1 ? 0 : index+1);
    }

  return (
    <Pressable style={styles.weekDay} onPress={() => toggleStatus(statusIndex)}>
        <View style={styles.weekSelector(statusOptions[statusIndex])}></View>
        <Text style={styles.weekText}>{day}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    weekDay: {
        flex: 1,
        ...styleMixins.flex(),
        backgroundColor: defaultStyles.colour.offsetColour,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    weekSelector: (status) => {
        return {
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: defaultStyles.colour[status],
            position: 'absolute',
            top: 4,
            right: 4
        }
    },
    weekText: {
        color: defaultStyles.colour.primaryColour,
        fontSize: defaultStyles.fontSize.textDetail
    }
    
})

export default DaySelector