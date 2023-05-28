import {Dimensions, View, Text, StyleSheet} from 'react-native';
import { defaultStyles } from '../../utils/defaultStyles';

const PageTitle = ({titleText}) => {
  return (
    <View style={styles.pageTitle}>
        <Text style={styles.title}>{titleText}</Text>
        <View style={styles.titleRule}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    pageTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%'
    },
    title: {
        fontSize: defaultStyles.fontSize.headingPrimary,
        color: defaultStyles.colour.offsetColour
    },
    titleRule: {
        width: Dimensions.get('window').width * .44,
        minWidth: 160,
        height: 4,
        backgroundColor: defaultStyles.colour.offsetColour,
        marginTop: defaultStyles.margin.m,
        marginBottom: defaultStyles.margin.m
    }
})

export default PageTitle