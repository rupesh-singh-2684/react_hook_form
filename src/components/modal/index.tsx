import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import styles from './styles';
import { Images } from '../../assets';
import strings from '../../utils/strings';

const ProfileChoice = ({ visible, onClose, onPressGallery, onPressCamera, onPressAvatar }:any) => {
  const refRBSheet:any = useRef();

  useEffect(() => {
    if (visible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [visible]);

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnPressMask
      useNativeDriver={false}
      customStyles={{
        wrapper: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        container: {
          flex: 1,
          borderRadius: 20,
        },
      }}
      onClose={onClose}
    >
      <View style={styles.bgColor}>
        <View style={styles.marginSide}>
          <View>
            <Text style={styles.headingText}>{strings.profileModal}</Text>
          </View>
          <View style={styles.lineView} />

          <ScrollView>
            <View>
            <TouchableOpacity onPress={onPressGallery}>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={Images.Image1RB} style={styles.imgSize} />

                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>{strings.uploadGallery}</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Images.forArrow} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCamera}>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={Images.Image2RB} style={styles.imgSize} />

                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>{strings.camera}</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Images.forArrow} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressAvatar}>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={Images.Image3RB} style={styles.imgSize} />

                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>{strings.selectAvatar}</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Images.forArrow} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </RBSheet>
  );
};

export default ProfileChoice;