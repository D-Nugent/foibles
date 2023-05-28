import { StyleSheet,Text, View } from "react-native"
import { defaultStyles } from "../../utils/defaultStyles"

const OrDivider = () => {
  return (
    <View style={styles.wrapper}>
        <View style={styles.rule}></View>
        <Text style={styles.text}>Or</Text>
        <View style={styles.rule}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'nowrap',
        margin: defaultStyles.margin.s
    },
    text: {
        fontSize: defaultStyles.fontSize.textPrimary
    },
    rule: {
        height: 2,
        width: '40%',
        backgroundColor: defaultStyles.colour.offsetColour,
    }
})

export default OrDivider