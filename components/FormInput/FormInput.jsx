import { StyleSheet,TextInput,Text,View } from "react-native"
import { defaultStyles, styleMixins } from "../../utils/defaultStyles"

const FormInput = ({label, required=true, type="text", autoCompleteRules}) => {
  return (
    <View style={styles.formInput}>
        <Text style={styles.label}>{label}{required && '*'}</Text>
        <View style={styles.formShadow}>
            <TextInput style={styles.formField} placeholder={`Enter your ${label.toLowerCase()}`} secureTextEntry={type==='password'} autoComplete={autoCompleteRules ? autoCompleteRules : ''}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    formInput:{
        width: '100%',
        marginBottom: defaultStyles.margin.s,

    },
    label:{
        fontSize: defaultStyles.fontSize.textPrimary,
    },
    formField:{
        height: 36,
        borderWidth: 1,
        borderColor: defaultStyles.colour.offsetColour,
        padding: defaultStyles.margin.xs
    },
    formShadow: {
        marginTop: defaultStyles.margin.xs,
        ...styleMixins.boxShadow(1),
    }
})

export default FormInput