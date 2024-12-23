import { StyleSheet } from "react-native";
import { colors } from "../../themes";
import { vh, vw } from "../../utils/dimension";

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1, 
      backgroundColor: '#fff'
    },
    container: {
      flex: 1,
      paddingHorizontal: vw(30),
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
    details:{
      marginVertical: vw(40)
    },
    heading:{
      fontSize: 28, 
      fontWeight: '700', 
      color: '#0B152D'
    },
    heading1:{
      fontSize: 15, 
      fontWeight: '400', 
      color: '#9CA0AB', 
      top: vh(12)
    },
    formContainer:{
      flex: 1,
      gap:10
    },
    label: {
      marginLeft: 0,
    },
    input: {
      backgroundColor: '#fff',
      borderColor: '#E7EBF3',
      height: vw(50),
      paddingHorizontal: vw(24),
      paddingVertical: vh(12),
      borderRadius: 16,
      borderWidth:1,
    },
    errorText:{
      color:colors.red
    },
    codeText:{
      borderColor: '#E7EBF3',
      height: vw(50),
      width:"24%",
      flexDirection:'row',
      marginRight:10,
      borderWidth:1,
      borderRadius: 16,
      justifyContent:'center',
      alignItems:'center'
    },
    phoneContainer:{
      flexDirection: 'row'
    },
    countryCode:{
      fontSize: 12
    },
    phoneNumber:{
      width: '70%', 
      marginHorizontal: vw(10)
    },
    passwordContainer:{
      justifyContent:'center'
    },
    eyeContainer:{
      position:'absolute' ,
      alignSelf:'flex-end',
      right:15,
      top:vw(35)
    },
    eyeIcons:{
      height:vw(18),
      width:vw(18)
    },
    checkList:{
      flexDirection:'row',
      bottom:vw(10)
    },
    pressedCheclList:{
      height:vw(18),
      width:vw(18),
      borderRadius:4,
      marginRight:10,
      backgroundColor:'#EE28A9',
      justifyContent:'center',
    },
    tickIcon:{
      height:vw(8),
      width:vw(13),
      alignSelf:'center',
    },
    unpressedCheclList:{
      borderWidth:1.5,
      height:vw(18),
      width:vw(18),
      borderRadius:4,
      marginRight:10,
      borderColor:'#9CA0AB'
    },
    checkListTexts:{
      color: '#9CA0AB',
      fontSize:16
    },
    ListText:{
      color:'#000080',
      fontWeight:'500'
    },
    button: {
      color: colors.white,
      height: vw(50),
      backgroundColor: '#000080',
      borderRadius: 16,
      marginBottom:vh(10),
      justifyContent:'center'
    },
    buttonText:{
      textAlign:'center',
      color:'#fff',
      fontSize:vw(16),
      fontWeight:'700'
    },
    button1: {
      color: colors.white,
      height: vw(50),
      backgroundColor: '#7575BA',
      borderRadius: 16,
      marginBottom:vh(10),
      justifyContent:'center'
    },
  });

  export default styles