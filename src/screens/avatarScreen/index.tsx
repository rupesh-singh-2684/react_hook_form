import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import { Icons } from '../../assets'
import strings from '../../utils/strings'
import { avatar } from '../../assets/data'
import BackButton from '../../components/backButton'

const AvatarScreen = () => {
    const navigation: any = useNavigation()
    const [isPressed, setIsPressed] = useState(null);
    
    const handleClick = (id: any) => {
        setIsPressed(id)
    };

    const handleContinue = async() => {
        const selectedAvatar = avatar.find(item => item.id === isPressed);
            try{
                await AsyncStorage.setItem('selectedAvatar', JSON.stringify(selectedAvatar?.image) );
                await AsyncStorage.setItem('@new_post_image', '');
                navigation.navigate('SetupProfile')

            }catch(e){
                console.log(e)
            }

    };
    const renderItem = (item: any) => {
        return (
            <TouchableOpacity style={styles.renderImageContainer} onPress={() => handleClick(item.item.id)} >
                <Image source={item.item.image} style={[
                    isPressed == item.item.id ? (
                        styles.pressedRenderImage
                    ) : (
                        styles.unPressedRenderImage
                     )
                ]}
                />
                {isPressed == item.item.id ? (
                    <Image source={Icons.selected}
                        style={styles.selectedIcon}
                    />
                ) : (
                    <View></View>
                )}
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <BackButton
                    style={styles.backContainer}
                    iconSource={Icons.backIcon}
                    iconStyle={styles.backIcon}
                />
                <View style={styles.details}>
                    <Text style={styles.heading}>{strings.avatar}</Text>
                    <Text style={styles.heading1}>{strings.avatarDetails}</Text>
                </View>
                <FlatList
                    data={avatar}
                    renderItem={renderItem}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                />
                <TouchableOpacity style={[styles.button]} onPress={handleContinue}>
                    <Text style={styles.buttonText}>{strings.continue}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AvatarScreen;