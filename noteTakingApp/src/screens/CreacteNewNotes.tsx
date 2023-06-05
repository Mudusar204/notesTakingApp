import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import BackIcon from '../assets/imgs/svg/leftIcon.svg';
import Notes from '../components/addNotes/Notes';
import IdeasIcon from '../assets/imgs/svg/IdeasIcon.svg';
import GoalIcon from '../assets/imgs/svg/goalsIcon.svg';
import CartIcon from '../assets/imgs/svg/cartIcon.svg';
import GuidenceIcon from '../assets/imgs/svg/guidenceIcon.svg';
import RoutineIcon from '../assets/imgs/svg/routineIcon.svg';
import {BackHandler} from 'react-native';
const CreacteNewNotes = ({navigation}: any) => {
  useEffect(() => {
    const handleBackPress = () => {
      navigation.navigate('Home');
      return true; // Prevent the default back button behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      backHandler.remove(); // Clean up the event listener
    };
  }, [navigation]);

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.headerChild}>
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={styles.headerChild}>
            <BackIcon />
            <Text style={styles.headerText1}>Back</Text>
          </Pressable>
        </View>
        <Text style={styles.headerText}>New Notes</Text>
        <View style={{height: 16, width: 60}}></View>
      </View>
      <Text style={styles.mainHeading}>What Do You Want to {'\n'}Notes?</Text>
      <ScrollView>
        <View>
          <Notes
            onPress={() => navigation.navigate('InterestingIdeasScreen')}
            backgroundColor={'#6A3EA1'}
            heading={'Interesting Idea'}
            title={'Use free text area, feel free to write it all'}
            color={'white'}
            img={<IdeasIcon />}
          />
          {/* ///////////////////////////////////// */}
          <Notes
            onPress={() => navigation.navigate('BuyingScreen')}
            backgroundColor={'#60D889'}
            heading={'Buying Something'}
            title={'Use checklist, so you won’t miss anything'}
            color={'#1F7F40'}
            img={<CartIcon />}
          />
          {/* ////////////////////////////////////////// */}
          <Notes
            onPress={() => navigation.navigate('GoalsScreen')}
            backgroundColor={'#F8C715'}
            heading={'Goals'}
            title={'Near/future goals, notes and keep focus '}
            color={'#725A03'}
            img={<GoalIcon />}
          />
          {/* ///////////////////////////////////////// */}
          <Notes
            onPress={() => navigation.navigate('GuidanceScreen')}
            backgroundColor={'#CE3A54'}
            heading={'Guidance'}
            title={'Create guidance for routine activities'}
            color={'white'}
            img={<GuidenceIcon />}
          />
          {/* ////////////////////////////////////////////// */}
          <Notes
            onPress={() => navigation.navigate('RoutineTaskScreen')}
            backgroundColor={'#DEDC52'}
            heading={'Routine Tasks'}
            title={'Checklist with sub-checklist'}
            color={'#565510'}
            img={<RoutineIcon />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreacteNewNotes;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEEF0',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerText1: {
    color: '#6A3EA1',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    fontFamily: 'Inter-Medium',
  },
  headerChild: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  mainHeading: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    fontFamily: 'Inter-Bold',
    marginTop: 24,
  },
});
