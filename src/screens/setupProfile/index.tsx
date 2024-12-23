import * as React from 'react';
import * as yup from "yup";
import { Text, View, TextInput, Image, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';

import { Icons, Images } from '../../assets';
import styles from './styles';
import strings from '../../utils/strings';
import ProfileChoice from '../../components/modal';
import BackButton from '../../components/backButton';
import { vh } from '../../utils/dimension';

const SetupProfile = (routes: any) => {

  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Others', value: '3' },
    { label: 'Prefer not to say', value: '4' },
  ];

  const [isFocus, setIsFocus] = React.useState(false);
  const navigation: any = useNavigation()
  const selectedAvatar = routes?.params;
  const [imageUri, setImageUri] = React.useState('');
  const [isProfileChoiceVisible, setIsProfileChoiceVisible] = React.useState(false)
  const [isAvatar, setIsAvatar] = React.useState('')
  const [values, setValues] = React.useState('')


  const closeProfileChoice = () => {
    setIsProfileChoiceVisible(false);
  };
  const profilePicker = () => {
    setIsProfileChoiceVisible(prevState => !prevState)
  }

  const handleAsync = async () => {
    const uri: any = await AsyncStorage.getItem('@new_post_image');
    const avatar: any = await AsyncStorage.getItem('selectedAvatar');
    const profile = JSON.stringify(avatar)
    const userProfile = JSON.parse(profile)
    setIsAvatar(userProfile)
    setImageUri(uri);
  }

  React.useEffect(() => {
    handleAsync()
  })

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, async (response: any) => {
      if (response.assets && response.assets[0]) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        await saveImageUri(uri);
      }
      setIsProfileChoiceVisible(false)
    });
  };

  const handleTakePhoto = () => {
    launchCamera({ mediaType: 'photo', quality: 1 }, async (response: any) => {
      if (response.assets && response.assets[0]) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        await saveImageUri(uri);
      }
      setIsProfileChoiceVisible(false)
    });
  }

  const handleAvatar = () => {
    navigation.navigate('AvatarScreen')
    setIsProfileChoiceVisible(false)
  }

  const saveImageUri = async (uri: string) => {
    try {
      await AsyncStorage.setItem('@new_post_image', uri);
      await AsyncStorage.setItem('@selectedAvatar', '');
    } catch (error) {
      console.error('Failed to save image URI:', error);
    }
  };

  const schema = yup.object({
    Name: yup.string()
      .required('Name is required')
      .min(3, 'Username must be at least 3 characters long')
      .max(20, 'Username must not exceed 20 characters')
      .matches(/_/, 'Username must contain at least one underscore')
      .matches(/^[a-zA-Z0-9_]+$/, 'Username must only contain letters, numbers, and underscores'),
    dob: yup.string()
      .required('Dob is required'),
    gender: yup.string()
      .required('Gender is required'),
    Referral: yup.string()
  })
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>
      <ScrollView style={styles.container}>
        <BackButton
          style={styles.backContainer}
          iconSource={Icons.backIcon}
          iconStyle={styles.backIcon}
        />
        <View style={styles.details}>
          <Text style={styles.heading}>{strings.setup}</Text>
          <Text style={styles.heading1}>{strings.details}</Text>
        </View>
        <View style={styles.profileUploaderContainer}>
          <View>
            <Image source={imageUri ? { uri: imageUri } : isAvatar ? isAvatar : Images.profileImage} style={styles.profileImage} />
          </View>
          <View style={styles.profileTextContainer}>
            <View>
              <Text style={styles.profileText}>{strings.profile}</Text>
            </View>
            <TouchableOpacity style={{ top: vh(5) }} onPress={profilePicker}>
              <Text style={styles.uploadText}>{strings.upload}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>{strings.userName}</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (

                <View style={styles.inputContainer}>
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    style={{ width: '100%' }}
                  />
                  <View style={styles.iconContainer}>
                    {errors.Name?.message ? (
                      <Image source={Icons.wrong} style={[styles.checkIcon]} />
                    ) : (
                      <Image source={Icons.correct} style={[styles.checkIcon]} />
                    )}
                  </View>
                </View>
              )}
              name="Name"
              rules={{ required: true }}
            />
            {errors.Name && (
              <Text style={styles.errorText}>{errors.Name.message}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>{strings.dob}</Text>
            <Controller
              control={control}
              name="dob"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => {
                const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
                const showDatePicker = () => setDatePickerVisibility(true);
                const hideDatePicker = () => setDatePickerVisibility(false);
                const handleConfirm = (date: any) => {
                  onChange(date);
                  hideDatePicker();
                };
                return (
                  <View
                    style={[styles.input, styles.dobContainer]}>
                    {value ? (
                      <Text style={styles.input1}>{value.toDateString()}</Text>
                    ) : (
                      <></>
                    )}
                    <TouchableOpacity
                      onPress={showDatePicker}
                      style={styles.calenderIconContainer}>
                      <Image source={Icons.calender} style={styles.calenderIcon} />
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                      display="inline"
                    />
                  </View>
                );
              }}
            />
            {errors.dob && (
              <Text style={styles.errorText}>{errors.dob.message}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>{strings.gender}</Text>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  value={values}
                  itemContainerStyle={styles.itemContainerStyle}
                  containerStyle={styles.containerStyle}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    onChange(item.value);
                    setIsFocus(false);
                    setValues(item.value)
                  }}
                  renderItem={(item) => {
                    console.log(values)
                    return (

                      <View style={[styles.item, { borderColor: values === item.value ? '#32A071' : 'transparent' }]}>
                        <Text style={styles.textItem}>{item.label}</Text>
                        <View style={styles.renderDropdow}>
                          {
                            item.value === value ? (
                              <Image source={Icons.correct} style={styles.icon} />
                            ) : (
                              <View style={styles.emptyCheck} />
                            )
                          }
                        </View>
                      </View>
                    )
                  }}
                />
              )}
              name="gender"
              rules={{ required: true }}
            />
          </View>
          <View>
            <Text style={styles.label}>{strings.refferal}</Text>
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
              name="Referral"
              rules={{ required: true }}
            />
            {errors.Referral && (
              <Text style={styles.errorText}>{errors.Referral.message}</Text>
            )}
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>{strings.continue}</Text>
        </View>
        {isProfileChoiceVisible && (
          <ProfileChoice
            visible={isProfileChoiceVisible}
            onClose={closeProfileChoice}
            navigation={navigation}
            onPressGallery={openGallery}
            onPressCamera={handleTakePhoto}
            onPressAvatar={handleAvatar}
          />
        )}
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SetupProfile;