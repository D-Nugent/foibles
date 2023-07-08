import { ScrollView, StyleSheet, Text, View } from "react-native";
import { defaultStyles, styleMixins } from "../../utils/defaultStyles";
import TrackingBanner from "../../components/Tracking/TrackingBanner/TrackingBanner";

const Tracking = ({navigation}) => {
  return (
    <View>
      <View style={styles.trackingWrapper}>
          <TrackingBanner trackingType={'Exercise'}/>
          <TrackingBanner trackingType={'Nutrition'}/>
          <TrackingBanner trackingType={'Hydration'}/>
          <TrackingBanner trackingType={'Reading'}/>
          <TrackingBanner trackingType={'Sleep'}/>
      </View>
      <View style={styles.trackingKey}>
          <View style={styles.keyItem}>
              <View style={styles.keyIndicator('untracked')}></View>
              <Text style={styles.keyText}>Untracked</Text>
          </View>
          <View style={styles.keyItem}>
              <View style={styles.keyIndicator('failure')}></View>
              <Text style={styles.keyText}>Failure</Text>
          </View>
          <View style={styles.keyItem}>
              <View style={styles.keyIndicator('success')}></View>
              <Text style={styles.keyText}>Success</Text>
          </View>
      </View>
    </View>
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
    trackingWrapper: {
        ...styleMixins.flex('column'),
        gap: defaultStyles.margin.s
    },
    trackingKey: {
        ...styleMixins.flex(),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginVertical: defaultStyles.margin.s
    },
    keyIndicator: (status) => {
        return {
            width: 8,
            height: 8,
            borderRadius: 8,
            borderWidth: .2,
            borderColor: defaultStyles.colour.offsetColour,
            backgroundColor: defaultStyles.colour[status],
            ...styleMixins.boxShadow(2)
        }
    },
    keyItem: {
        ...styleMixins.flex(),
        alignItems: 'center',
        gap: defaultStyles.margin.xs
    },
    keyText: {
        fontSize: defaultStyles.fontSize.textDetail
    }
  });
  

export default Tracking