import React, { useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SafeAreaView } from "react-native-safe-area-context";


import styles from "./styles";
import BackButton from "../../components/backButton";
import { Icons } from "../../assets";
import strings from "../../utils/strings";
import { useNavigation } from "@react-navigation/native";


const otpSchema = Yup.object().shape({
    otp1: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a digit"),
    otp2: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a digit"),
    otp3: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a digit"),
    otp4: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a digit"),
    otp5: Yup.string()
        .required("Required")
        .matches(/^[0-9]$/, "Must be a digit"),
});

const OTPVerification = () => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(otpSchema),
    });

    const otpRefs:any = useRef([]);
    otpRefs.current = [];

    const navigation: any = useNavigation();


    const onSubmit = (data: any) => {
        const otp = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}${data.otp5}`;
        navigation.navigate('SetupProfile');
        console.log(otp);
        
    };

    const handleChange = (text: any, field: any) => {
        setValue(field, text, { shouldValidate: true });
        if (text.length === 1) {
            const nextFieldIndex = parseInt(field[field.length - 1]) - 1 + 1;
            const nextField = `otp${nextFieldIndex}`;

            if (otpRefs.current[nextFieldIndex]) {
                otpRefs.current[nextFieldIndex].focus();
            }
        }
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <BackButton
                    style={styles.backContainer}
                    iconSource={Icons.backIcon}
                    iconStyle={styles.backIcon}
                />
                <View style={styles.details}>

                    <Text style={styles.title}>{strings.verifyPhone}</Text>
                    <Text style={styles.subtitle}>
                        {strings.enterCode}
                    </Text>
                    <Text style={styles.phoneNumber}>{strings.phone}</Text>
                </View>
                    <Text style={styles.digit}>{strings.digit}</Text>
                <View style={styles.otpContainer}>
                    {["otp1", "otp2", "otp3", "otp4", "otp5"].map((field, index) => (
                        <Controller
                            key={field}
                            name={field}
                            control={control}
                            render={({ field: { value, onChange } }) => (
                                <TextInput
                                    ref={(ref) => (otpRefs.current[index] = ref)}
                                    value={value}
                                    onChangeText={(text) => handleChange(text, field)}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    style={styles.otpInput}
                                />
                            )}
                        />
                    ))}
                </View>

                <TouchableOpacity>
                    <Text style={styles.resendText}>{strings.resend}</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>{strings.continue}</Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default OTPVerification;
