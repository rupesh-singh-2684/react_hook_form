import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ style, iconSource, iconStyle }:any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={style || {}}
      onPress={() => navigation.goBack()}
    >
      <Image 
        source={iconSource} 
        style={[iconStyle, {}]}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
