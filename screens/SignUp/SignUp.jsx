import { View, StyleSheet } from "react-native"
import { Path, Svg } from "react-native-svg"
import PageTitle from "../../components/PageTitle/PageTitle"
import FormInput from "../../components/FormInput/FormInput"
import { defaultStyles } from "../../utils/defaultStyles"
import FoibleBtn from "../../components/FoibleBtn/FoibleBtn"
import googleIcon from '../../assets/googleIcon.png';
import OrDivider from "../../components/OrDivider/OrDivider"


const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Svg style={styles.logo}>
            <Path fill="#454545" d="m74.647 19.728-1.157-.048c-.868 0-1.43.206-1.687.616-.065.095-.145.143-.242.143-.417 0-.626-.695-.626-2.086 0-1.422.209-2.322.626-2.701.45-.38 1.206-.569 2.266-.569 1.093 0 1.832.19 2.218.569.386.347.579.948.579 1.8 0 .854-.145 1.454-.434 1.802-.29.316-.804.474-1.543.474ZM70.79 53.535l.53-20.916c0-2.623-.305-4.408-.915-5.356-.193-.316-.418-.553-.675-.71-.193-.064-.29-.19-.29-.38 0-.568.82-1.121 2.459-1.658 1.64-.538 2.828-.806 3.567-.806.772 0 1.174.19 1.206.569 0 .632-.097 2.432-.29 5.402-.16 2.939-.24 6.035-.24 9.29 0 3.254.192 15.15.578 15.94a.904.904 0 0 1 .145.474c0 .41-.611.616-1.832.616-1.222 0-2.475-.316-3.76-.948-.322-.158-.483-.663-.483-1.517ZM89.542 28.733l-1.109.284c-.578 0-.868-.521-.868-1.564 0-1.074.386-1.927 1.157-2.56.804-.663 1.816-.995 3.038-.995.674 0 1.398.206 2.169.617.771.379 1.414.868 1.928 1.469.515.568.965 1.485 1.35 2.749.418 1.232.627 2.685.627 4.36 0 3.855-1.06 6.983-3.182 9.384-2.089 2.401-5.126 3.602-9.112 3.602-1.157 0-2.297-.11-3.422-.332l-.483-.095c-.417-.126-.658-.347-.723-.663-.096-.664-.144-2.228-.144-4.692l.289-15.356c0-2.37-.064-4.186-.193-5.45l-.096-.664c-.064-.885-.257-1.643-.579-2.275-.29-.632-.578-1.042-.868-1.232l-.385-.237c-.225-.126-.338-.268-.338-.427 0-.473.804-1.026 2.41-1.658 1.608-.664 2.78-.995 3.52-.995.74 0 1.125.189 1.157.568.225 1.928.338 4.676.338 8.247l-.241 11.374c0 4.96.144 8.39.434 10.285.032.442.53.663 1.494.663.996 0 1.848-.268 2.555-.805.707-.537 1.237-1.248 1.591-2.133.643-1.611.964-3.397.964-5.356 0-.916-.128-1.911-.385-2.985-.45-2.086-1.415-3.128-2.893-3.128ZM105.144 17.974l-.289 17.394c0 5.434.176 8.689.53 9.763.096.19.145.38.145.569 0 .379-.466.568-1.399.568-.932 0-1.976-.237-3.133-.71-1.125-.443-1.688-1.027-1.688-1.754.643-4.424.965-10.332.965-17.726l-.193-7.25c-.064-.886-.257-1.644-.579-2.276-.289-.632-.578-1.042-.868-1.232l-.385-.237c-.225-.126-.338-.268-.338-.427 0-.442.691-.979 2.073-1.61 1.415-.664 2.781-.996 4.098-.996.515 0 .804.174.868.521.129.822.193 2.623.193 5.403ZM113.008 33.045l.048 1.185c0 .19.129.285.386.285 1.029-.095 1.928-.348 2.7-.759.771-.442 1.35-.932 1.735-1.469.772-1.169 1.19-2.18 1.254-3.033l.048-.569c0-1.706-.691-2.56-2.073-2.56-1.028 0-1.864.443-2.507 1.328-1.061 1.39-1.591 3.254-1.591 5.592Zm10.51 6.304c0 1.2-.257 2.259-.771 3.175-.483.885-1.045 1.548-1.688 1.99-.61.412-1.334.743-2.169.996-1.061.316-2.073.474-3.037.474-2.7 0-4.693-.995-5.979-2.986-1.285-1.99-1.928-4.518-1.928-7.583 0-3.096.788-5.845 2.362-8.246 1.607-2.402 4.002-3.602 7.184-3.602 2.892 0 4.853.995 5.881 2.985.418.759.627 1.486.627 2.18 0 .664-.032 1.201-.096 1.612-.065.38-.29.964-.675 1.754-.386.79-.9 1.5-1.543 2.132-.643.632-1.655 1.233-3.037 1.801-1.382.569-3.005.948-4.87 1.138-.257 0-.385.11-.385.332 0 .284.096.71.289 1.28.225.536.466.994.723 1.374.707.884 1.752 1.327 3.134 1.327s2.555-.443 3.519-1.327a5.49 5.49 0 0 0 1.254-1.754c.128-.253.289-.38.482-.38.225 0 .401.175.53.522.129.348.193.616.193.806Z"/>
            <Path fill="#454545" fillRule="evenodd" d="M54.161 27.216c-.835.032-1.446.063-1.831.095-.743.048-7.174.507-8.66.507l-6.758-.22c-2.773 8.324-6.511 14.944-11.215 19.86-4.703 4.916-9.68 7.374-14.928 7.374-3.218 0-5.818-.949-7.798-2.847C.99 50.087 0 47.58 0 44.465 0 39.45 3.045 34.9 9.135 30.81c6.09-4.137 13.591-6.328 22.504-6.57 3.02-9.346 6.56-15.285 10.62-17.816l-11.957-.438c-5 0-8.74.633-11.215 1.898-2.426 1.266-3.639 2.945-3.639 5.038 0 1.12.47 2.069 1.411 2.848.94.73 1.882 1.095 2.822 1.095.941 0 1.634-.024 2.08-.073.495-.098 1.09-.268 1.782-.511a33.914 33.914 0 0 1 1.56-.584c1.04-.341 2.302-.876 3.788-1.607l1.56 1.899c-3.764 3.7-7.873 5.549-12.33 5.549-1.98 0-3.614-.609-4.901-1.826-1.287-1.216-1.931-2.75-1.931-4.6 0-4.04 2.104-7.447 6.313-10.221C21.81 2.117 27.43.73 34.46.73l17.602.511c.891 0 2.005-.194 3.342-.584C56.791.22 57.707 0 58.153 0c.446 0 .792.146 1.04.438.297.243.445.56.445.95 0 1.021-.47 1.898-1.41 2.628-.942.681-2.18 1.168-3.714 1.46-2.872.633-5.422.95-7.65.95-3.02 2.043-5.966 7.933-8.838 17.668 4.902 0 23.287-.579 24.476-.433 1.671 0 2.989.143 3.953.427l.482.142c.386.158.579.332.579.521 0 .159-.113.285-.338.38a8.392 8.392 0 0 0-2.507 1.232c-.803.537-1.205.916-1.205 1.137l.29.332c1.028.569 1.815 1.47 2.362 2.702.578 1.232.9 2.322.964 3.27l.096 1.469c0 3.128-.884 5.703-2.651 7.725-1.768 2.022-4.179 3.033-7.232 3.033-1.543 0-2.876-.268-4.001-.805-1.125-.537-1.96-1.138-2.507-1.801a9.533 9.533 0 0 1-1.254-2.323 11.426 11.426 0 0 1-.578-3.601c0-1.264.209-2.528.627-3.792.45-1.264.948-2.196 1.494-2.796a7.765 7.765 0 0 1 1.928-1.47c.9-.473 1.623-.71 2.17-.71.546 0 .82.11.82.331l-.29.474c-.707.822-1.221 1.896-1.543 3.223-.289 1.327-.433 2.512-.433 3.555 0 1.01.128 2.022.385 3.033.257 1.01.547 1.77.868 2.275.322.474.691.837 1.109 1.09.61.379 1.253.569 1.928.569s1.334-.253 1.977-.759c.643-.537 1.109-1.232 1.398-2.085a14.09 14.09 0 0 0 .868-4.882c0-2.654-.691-4.708-2.073-6.16-1.35-1.454-3.359-2.181-6.027-2.181Zm-23.71.602c-1.585 5.062-3.714 9.637-6.388 13.726-1.584 2.483-3.391 4.43-5.421 5.841-2.03 1.46-3.912 2.19-5.645 2.19-1.733 0-3.144-.486-4.233-1.46-1.04-.973-1.56-2.214-1.56-3.723 0-3.846 2.327-7.448 6.981-10.806 4.704-3.359 10.126-5.281 16.265-5.768Z" clip-rule="evenodd"/>
        </Svg>
        <PageTitle titleText={"Sign Up"}/>
        <FormInput label={'Email Address'} type={"email"} autoCompleteRules={'email'}/>
        <FormInput label={'Password'} type={"password"} autoCompleteRules={'current-password'}/>
        <FormInput label={'Confirm Password'} type={"password"} autoCompleteRules={'current-password'}/>
        <FoibleBtn title={"Sign Up"}/>
        <FoibleBtn title={"Continue with Google"} icon={googleIcon} styleType="calm"/>
        <OrDivider/>
        <FoibleBtn title={"Log In"} styleType="calm" action={()=>navigation.push("Login")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: defaultStyles.colour.primaryColour,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: defaultStyles.margin.xl,
      marginTop: "10%"
    },
    logo: {
      maxHeight: 56,
      maxWidth: 124,
      marginBottom: defaultStyles.margin.l
    },
    forgottenPasword: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      fontSize: defaultStyles.fontSize.textSecondary,
      marginTop: defaultStyles.margin.xs,
      marginBottom: defaultStyles.margin.s
    },
    signUp: {
      marginTop: defaultStyles.margin.s
    }
  });

export default SignUp