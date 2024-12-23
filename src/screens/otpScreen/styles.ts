import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimension";
import { colors } from "../../themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(30),
    },
    mainContainer:{
        flex: 1, 
        backgroundColor: '#fff'
      },
      details:{
        marginVertical: vw(40)
      },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#0B152D",
    },
    subtitle: {
      fontSize: 16,
      color: "#9CA0AB",
    },
    phoneNumber: {
      color: "#7B8293",
      fontWeight: "500",
      fontSize: 16,
      top:10
    },
    otpContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: vw(20),
    },
    otpInput: {
      width: vw(50),
      height: vw(50),
      borderWidth: 1,
      borderColor: "#E7EBF3",
      borderRadius: 16,
      textAlign: "center",
      fontSize: 18,
      backgroundColor: "#fff",
    },
    resendText: {
      fontSize: 14,
      color: "#EE28A9",
      marginBottom: vw(20),
      fontWeight:'500'
    },
    backContainer:{
        borderWidth: 1,
        height: vw(48),
        width: vw(48),
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        justifyContent: 'center',
        borderColor:'transparent'
      },
      backIcon:{
        height: vh(12), 
        width: vw(6), 
        alignSelf: 'center'
      },
      button: {
        color: colors.white,
        height: vw(50),
        backgroundColor: '#000080',
        borderRadius: 16,
        marginVertical:vh(10),
        justifyContent:'center',
      },
      buttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'700'
      },
      digit:{
        marginVertical:10,
        color:'#4B5879'
      }
  });

  export default styles