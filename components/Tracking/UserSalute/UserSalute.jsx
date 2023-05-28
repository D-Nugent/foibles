import { StyleSheet, View, Text } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { defaultStyles } from '../../../utils/defaultStyles';

const UserSalute = () => {
  return (
    <View style={styles.userSalute}>
      <Text style={styles.salute}>Hey, David!</Text>
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <Path fill="#454545" d="m8.716 24-.477-3.84c-.259-.1-.503-.22-.732-.36a9.54 9.54 0 0 1-.671-.45l-3.552 1.5L0 15.15l3.075-2.34c-.02-.14-.03-.275-.03-.406v-.808c0-.13.01-.266.03-.406L0 8.85l3.284-5.7 3.552 1.5c.219-.16.448-.31.686-.45a6 6 0 0 1 .717-.36L8.716 0h6.568l.477 3.84c.259.1.503.22.732.36.23.14.453.29.671.45l3.552-1.5L24 8.85l-3.075 2.34c.02.14.03.275.03.406v.808c0 .13-.02.266-.06.406l3.075 2.34-3.283 5.7-3.523-1.5c-.219.16-.448.31-.686.45a6 6 0 0 1-.717.36L15.284 24H8.716Zm3.344-7.8c1.154 0 2.139-.41 2.955-1.23.816-.82 1.224-1.81 1.224-2.97 0-1.16-.408-2.15-1.224-2.97-.816-.82-1.801-1.23-2.955-1.23-1.174 0-2.165.41-2.971 1.23-.806.82-1.21 1.81-1.208 2.97 0 1.16.402 2.15 1.208 2.97.806.82 1.796 1.23 2.97 1.23Z"/>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
    userSalute: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: defaultStyles.margin.s
    },
    salute: {
        fontSize: defaultStyles.fontSize.headingPrimary
    }
})

export default UserSalute