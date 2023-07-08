import { StyleSheet, View, Text, Pressable, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { defaultStyles } from '../../../utils/defaultStyles'


const PageToggle = ({currentPage, setCurrentPage}) => {
    const barPos = useRef(new Animated.Value(1)).current;
    const [barWidth, setBarWidth] = useState(0);

    const handlePageToggle = (page) => {
        setCurrentPage(page);
        Animated.timing(barPos, {
            toValue:  page==='Tracking'? 4 : page==='Podium' ? (barWidth+8)*1 : (barWidth+8)*2,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

  return (
    <View style={styles.pageToggle}>
        <Animated.View style={
            {
                ...styles.focusBar,
                transform: [{
                    translateX: barPos
                  }]
            }
        }
        onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
        ></Animated.View>
        <Pressable style={styles.pageBtn} onPress={() => handlePageToggle('Tracking')}>
            <Text style={styles.pageTxt(currentPage==='Tracking')}>Tracking</Text>
        </Pressable>
        <Pressable style={styles.pageBtn} onPress={() => handlePageToggle('Podium')}>
            <Text style={styles.pageTxt(currentPage==='Podium')}>Podium</Text>
        </Pressable>
        <Pressable style={styles.pageBtn} onPress={() => handlePageToggle('Profile')}>
            <Text style={styles.pageTxt(currentPage==='Profile')}>Profile</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    pageToggle:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        alignItems: 'center',
        width: '100%',
        height: 40,
        padding: defaultStyles.margin.xxs,
        borderColor: defaultStyles.colour.offsetColour,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: defaultStyles.margin.s
    },
    focusBar: {
        position: 'absolute',
        top: 3,
        width: '32%',
        height: 32,
        backgroundColor: defaultStyles.colour.offsetColour,
        borderRadius: 8,
    },
    pageBtn: {
            width: '32%',
            display: 'flex',
            alignItems: 'center',
    },
    pageTxt: (selected) => {
        return {
            height: '100%',
            width: '100%',
            color: selected ? defaultStyles.colour.primaryColour : defaultStyles.colour.offsetColour,
            textAlign: 'center',
            textAlignVertical: 'center'
        }
    }
})

export default PageToggle