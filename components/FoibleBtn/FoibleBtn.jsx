import { StyleSheet, View, Pressable, Text, Image } from "react-native"
import { defaultStyles, styleMixins } from "../../utils/defaultStyles"

const FoibleBtn = ({title,styleType="bold",styleOverride,icon, action}) => {
  return (
    <View style={{...styles.foibleBtn,...styleOverride}}>
        <Pressable style={styles[styleType]} onPress={action}>
            {icon && (
                <View style={styles.btnIconWrapper}>
                    <Image style={styles.btnIcon} source={icon}/>
                </View>
            )}
            <Text style={styles.text[styleType]}>
                {title}
            </Text>
        </Pressable>
    </View>
  )
}

const defaultBtnStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: defaultStyles.colour.offsetColour,
    borderRadius: 8,
    height: 40,
    ...styleMixins.boxShadow()
}

const styles = StyleSheet.create({
    foibleBtn: {
        width: '100%',
        marginBottom: 16,
    },
    bold: {
        backgroundColor: defaultStyles.colour.offsetColour,
        ...defaultBtnStyles,
    },
    calm: {
        backgroundColor: defaultStyles.colour.primaryColour,
        ...defaultBtnStyles,
    },
    text: {
        bold: {
            color: defaultStyles.colour.primaryColour,
            fontSize: defaultStyles.fontSize.textPrimary,
            height: 24
        },
        calm: {
            color: defaultStyles.colour.offsetColour,
            fontSize: defaultStyles.fontSize.textPrimary,
            height: 24
        },
    },
    btnIconWrapper:{
        position: "absolute",
        top: -1,
        left: -1,
        padding: 8,
        borderWidth: 1,
        borderColor: defaultStyles.colour.offsetColour,
        height: 40,
        width: 40,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    btnIcon: {
        height: 24,
        width: 24,
    }
})

export default FoibleBtn

// style={({pressed}) => [
//     {
//       backgroundColor: pressed ? 'red' : 'green',
//     },
//     styles.bold,
//   ]}