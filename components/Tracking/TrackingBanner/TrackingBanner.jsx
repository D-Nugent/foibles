import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { defaultStyles, hexToRgbA, styleMixins } from '../../../utils/defaultStyles'
import DaySelector from './DaySelector/DaySelector'
import uuid from 'react-native-uuid'
import { Path, Svg } from 'react-native-svg'
import { svgStore } from '../../../utils/svgStore'
import exerciseBanner from '../../../assets/exerciseBanner.jpg'
import nutritionBanner from '../../../assets/nutritionBanner.jpg'
import hydrationBanner from '../../../assets/hydrationBanner.jpg'
import readingBanner from '../../../assets/readingBanner.jpg'
import sleepBanner from '../../../assets/sleepBanner.jpg'

const daysOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

const imageMap = (imageType) => {
    return {
        exercise: exerciseBanner,
        nutrition: nutritionBanner,
        hydration: hydrationBanner,
        reading: readingBanner,
        sleep: sleepBanner
    }[imageType]
}

const TrackingBanner = ({trackingType}) => {
  return (
    <View style={styles.trackingBanner}>
        <ImageBackground source={imageMap(trackingType.toLowerCase())} resizeMode='cover' style={styles.backgroundImage}>
        <View style={styles.trackingHeader}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{trackingType}</Text>
                {svgStore(trackingType.toLowerCase())}
            </View>
            <Pressable style={styles.commentBtn}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                    <Path fill="#454545" d="M3 7h6V6H3v1Zm0-1.5h6v-1H3v1ZM3 4h6V3H3v1Zm8 7L9 9H2a.963.963 0 0 1-.706-.294A.961.961 0 0 1 1 8V2c0-.275.098-.51.294-.706A.961.961 0 0 1 2 1h8c.275 0 .51.098.707.294A.961.961 0 0 1 11 2v9ZM2 2v6h7.412l.588.588V2H2Z"/>
                </Svg>
            </Pressable>
        </View>
        <View style={styles.weekWrapper}>
            {daysOfWeek.map((day) => (
                <DaySelector key={uuid.v4()} day={day}/>
            ))}
        </View>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    trackingBanner: {
        borderColor: defaultStyles.colour.offsetColour,
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        backgroundColor: '#c2c2c2',
        overflow: 'hidden'
      },
      backgroundImage:{
        flex: 1,
        justifyContent: 'center',
    },
    trackingHeader: {
        ...styleMixins.flex(),
        justifyContent: 'space-between'
    },
    titleWrapper: {
        ...styleMixins.flex(),
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        paddingVertical: defaultStyles.margin.xss,
        paddingLeft: defaultStyles.margin.s,
        paddingRight: defaultStyles.margin.xs,
        backgroundColor: hexToRgbA(defaultStyles.colour.primaryColour,.8),
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    title: {
        fontSize: defaultStyles.fontSize.textPrimary
    },
    commentBtn: {
        backgroundColor: hexToRgbA(defaultStyles.colour.primaryColour, .8),
        width: 32,
        height: 32,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        ...styleMixins.flex(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    weekWrapper: {
        width: '100%',
        ...styleMixins.flex(),
        marginVertical: 8,
        paddingHorizontal: 4,
        gap: 4
    },
})

export default TrackingBanner