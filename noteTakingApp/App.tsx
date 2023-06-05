import React, {useEffect} from 'react';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import OnBoarding from './src/screens/OnBoarding';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';
import NewPassword from './src/screens/NewPassword';
import Home from './src/screens/Home';
import Finished from './src/screens/Finished';
import Search from './src/screens/Search';
import Settings from './src/screens/Settings';
import Example from './src/screens/Example';
import EditProfile from './src/screens/EditProfile';
import ChangePassword from './src/screens/ChangePassword';
import SearchIcon from './src/assets/imgs/svg/Icon1';
import SettingsIcon from './src/assets/imgs/svg/Icon2';
import FinishedIcon from './src/assets/imgs/svg/Icon3';
import HomeIcon from './src/assets/imgs/svg/Icon4';
import {Text} from 'react-native-svg';
import Plus from './src/assets/imgs/svg/plusIcon.svg';
import FinishedIconActive from './src/assets/imgs/svg/finishedIcon.svg';
import CreacteNewNotes from './src/screens/CreacteNewNotes';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import {useFocusEffect} from '@react-navigation/native';
import BuyingScreen from './src/screens/BuyingScreen';
import GoalsScreen from './src/screens/GoalsScreen';
import InterestingIdeasScreen from './src/screens/InterestingIdeasScreen';
import RoutineTaskScreen from './src/screens/RoutineTaskScreen';
import GuidanceScreen from './src/screens/GuidanceScreen';
const Empty = ({navigation}: any) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.navigate('HomeScreens');
    }, []),
  );

  return null;
};
function Taps() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          // zIndex: -2,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 0,
          shadowOpacity: 0.1,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#6A3EA1',
          tabBarInactiveTintColor: '#827D89',
          tabBarIcon: ({color, size, focused}) => {
            return <HomeIcon color={focused ? '#6A3EA1' : '#827D89'} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#6A3EA1',
          tabBarInactiveTintColor: '#827D89',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? (
              <FinishedIconActive />
            ) : (
              <FinishedIcon color={'#827D89'} />
            );
          },
        }}
        name="Finished"
        component={Finished}
      />
      <Tab.Screen
        name="Add"
        component={Empty}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return <Plus />;
          },
          tabBarIconStyle: {
            backgroundColor: '#6A3EA1',
            padding: 35,
            borderRadius: 50,

            justifyContent: 'center',
            marginBottom: 15,
            borderWidth: 5,
            borderColor: 'white',
          },
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#6A3EA1',
          tabBarInactiveTintColor: '#827D89',
          tabBarIcon: ({color, size, focused}) => {
            return <SearchIcon color={focused ? '#6A3EA1' : '#827D89'} />;
          },
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: '#6A3EA1',
          tabBarInactiveTintColor: '#827D89',
          tabBarIcon: ({color, size, focused}) => {
            return <SettingsIcon color={focused ? '#6A3EA1' : '#827D89'} />;
          },
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
function HomeScreens() {
  return (
    <Stack.Navigator
      initialRouteName="CreacteNewNotes"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="CreacteNewNotes"
        component={CreacteNewNotes}></Stack.Screen>
      <Stack.Screen name="BuyingScreen" component={BuyingScreen}></Stack.Screen>
      <Stack.Screen name="GoalsScreen" component={GoalsScreen}></Stack.Screen>
      <Stack.Screen
        name="InterestingIdeasScreen"
        component={InterestingIdeasScreen}></Stack.Screen>
      <Stack.Screen
        name="RoutineTaskScreen"
        component={RoutineTaskScreen}></Stack.Screen>
      <Stack.Screen name="GuidanceScreen" component={GuidanceScreen} />
    </Stack.Navigator>
  );
}
function SettingScreen() {
  return (
    <Stack.Navigator
      initialRouteName="EditProfile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Taps" component={Taps} />
          <Stack.Screen name="Onboarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
          <Stack.Screen name="HomeScreens" component={HomeScreens} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
