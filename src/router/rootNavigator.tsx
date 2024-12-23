import React from 'react';
import CreateProfile from '../screens/createProfile';
import SetupProfile from '../screens/setupProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarScreen from '../screens/avatarScreen';
import OTPVerification from '../screens/otpScreen';


const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="OtpScreen"
        component={OTPVerification}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="SetupProfile"
        component={SetupProfile}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="AvatarScreen"
        component={AvatarScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
