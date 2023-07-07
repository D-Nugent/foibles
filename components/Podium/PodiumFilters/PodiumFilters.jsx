import { Pressable, View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const dateRanges = ['This Week', 'This Month', 'This Year', 'All Time'];

const PodiumFilters = () => {
  const [rankIsTotal, setRankIsTotal] = useState(true);
  const [dateRangeIndex, setDateRangeIndex] = useState(0);

  const handleDateRangeToggle = () => {
    setDateRangeIndex(dateRangeIndex === dateRanges.length - 1 ? 0 : dateRangeIndex+1);
  }

  return (
    <View>
      <Pressable style={styles.podiumFilters} onPress={() => setRankIsTotal(!rankIsTotal)}>
        <View style={styles.rankFocusBar}></View>
        <Text style={styles.rankFocusText}>
          Total
        </Text>
        <Text style={styles.rankFocusText}>
          %
        </Text>
      </Pressable>
      <Pressable style={styles.dateRangeToggle} onPress={() => handleDateRangeToggle()}>
        <Text style={styles.dateRangeToggleText}>
          {dateRanges[dateRangeIndex]}
        </Text>
      </Pressable>
    </View>
  )

  const styles = StyleSheet.create({
    podiumFilters: {

    }
  })
}

export default PodiumFilters