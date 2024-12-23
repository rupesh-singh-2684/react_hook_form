import * as React from 'react';
import * as yup from "yup";
import { Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

import { Icons } from '../../assets';
import styles from './styles';
import strings from '../../utils/strings';
import BackButton from '../../components/backButton';

const CreateProfile = () => {

  const [isPickerVisible, setPickerVisible] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState('US');
  const [callingCode, setCallingCode] = React.useState('1');
  const navigation: any = useNavigation();

  const schema = yup.object({
    Name: yup.string()
      .required('Name is required'),
    phonenumber: yup.string()
      .required('PhoneNumber is required')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
    Email: yup.string()
      .required('Email is required')
      .email('Enter a valid email address')
      .matches(/^[^@]+@[^@]+\.[^@]{2,}$/, 'Email should have only one @ and a valid domain'),
    Password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)')
  }).required();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const [isPressed, setIsPressed] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  const onSubmit = (data:any) => {
    navigation.navigate('OtpScreen');
    console.log(data);
  };

  const handlePressed = () => {
    setIsPressed(!isPressed)
  };

  const handleEyeVisible = () => {
    setIsVisible(!isVisible)
  };

  return (
    
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>
      <View style={styles.container}>
        <BackButton 
          style={styles.backContainer} 
          iconSource={Icons.backIcon}
          iconStyle={styles.backIcon}
        />
        <View style={styles.details}>
          <Text style={styles.heading}>{strings.heading}</Text>
          <Text style={styles.heading1}>{strings.details}</Text>
        </View>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>{strings.name}</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="Name"
              rules={{ required: true }}
            />
            {errors.Name && (
              <Text style={styles.errorText}>{errors.Name.message}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>{strings.phoneNumber}</Text>
            <View style={styles.phoneContainer}>
              <View style={styles.codeText}>
                <CountryPicker
                  withFlag
                  withCallingCode
                  withFilter
                  withCountryNameButton={false}
                  countryCode={countryCode}
                  visible={isPickerVisible}
                  onSelect={country => {
                    setCountryCode(country.cca2);
                    setCallingCode(country.callingCode[0]);
                    setPickerVisible(false);
                  }}
                  onClose={() => setPickerVisible(false)}
                />
                <Text style={styles.countryCode}>+{callingCode}</Text>
              </View>
              <View style={styles.phoneNumber}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  )}
                  name="phonenumber"
                  rules={{ required: true }}
                />
                {errors.phonenumber && (
                  <Text style={styles.errorText}>{errors.phonenumber.message}</Text>
                )}
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.label}>{strings.emailId}</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="Email"
              rules={{ required: true }}
            />
            {errors.Email && (
              <Text style={styles.errorText}>{errors.Email.message}</Text>
            )}
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>{strings.password}</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  secureTextEntry={!isVisible}
                />
              )}
              name="Password"
              rules={{ required: true }}
            />
            {errors.Password && (
              <Text style={styles.errorText}>{errors.Password.message}</Text>
            )}
            <View style={styles.eyeContainer}>
              <TouchableOpacity onPress={handleEyeVisible}>
                {isVisible ? (
                  <Image source={Icons.visibleIcon} style={styles.eyeIcons} />
                ) : (
                  <Image source={Icons.hiddenIcon} style={styles.eyeIcons} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.checkList}>
          <TouchableOpacity onPress={handlePressed}>
            {isPressed ? (
              <View style={styles.pressedCheclList}>
                <Image source={Icons.checkIcon} style={styles.tickIcon} />
              </View>
            ) : (
              <View style={styles.unpressedCheclList} />
            )}
          </TouchableOpacity>
          <Text style={styles.checkListTexts}>
            {strings.checkBox} <Text style={styles.ListText}>{strings.term}</Text>
          </Text>
        </View>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>{strings.continue}</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateProfile;