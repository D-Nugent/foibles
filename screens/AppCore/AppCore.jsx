import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { defaultStyles, styleMixins } from "../../utils/defaultStyles";
import React, { useState } from 'react'
import Tracking from '../Tracking/Tracking'
import FoibleBtn from "../../components/FoibleBtn/FoibleBtn";
import DateNavigation from "../../components/Tracking/DateNavigation/DateNavigation";
import UserSalute from "../../components/Tracking/UserSalute/UserSalute";
import PageToggle from "../../components/Tracking/PageToggle/PageToggle";
import Podium from '../Podium/Podium';

const PageSwitch = ({currentPage}) => {
  switch (currentPage) {
    case 'Tracking':
      return <Tracking/>
    case 'Podium':
      return <Podium/>
    case 'Profile':
      return (
        <View>
          <Text>Profile</Text>
        </View>
      )
    default:
      return <Tracking/>
  }
}

const AppCore = () => {
  const [currentPage, setCurrentPage] = useState('Tracking');

  return (
  <ScrollView style={styles.container}>
        <DateNavigation/>
        <UserSalute/>
        <PageToggle currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <PageSwitch currentPage={currentPage}/>
        <Text style={styles.motivator}>You've got this!</Text>
        <FoibleBtn title={'Sign up'} styleType='bold'styleOverride={styles.signUp} action={() => navigation.push('SignUp')}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: defaultStyles.colour.primaryColour,
      paddingHorizontal: defaultStyles.margin.m,
      paddingVertical: defaultStyles.margin.m,
      marginTop: "10%"
    },
  signUp: {
    marginTop: defaultStyles.margin.s,
  },
  motivator: {
    width: '100%',
    textAlign: 'center',
    fontSize: defaultStyles.fontSize.textPrimary
  }
});

export default AppCore