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
      height: vh(48),
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
      marginVertical: vh(40)
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
    button: {
      color: colors.white,
      height: vh(50),
      backgroundColor: '#000080',
      borderRadius: 16,
      marginBottom:vh(10),
      justifyContent:'center'
    },
    buttonText:{
      textAlign:'center',
      color:'#fff',
      fontSize:16,
      fontWeight:'700'
    },
    renderImageContainer:{
      paddingVertical: 7,
      flex: 1 
    },
    pressedRenderImage:{
      height: vw(104),
      width: vw(104),
      borderRadius: 55,
      borderWidth: 2,
      borderColor: '#EE28E9',
    },
    unPressedRenderImage:{
      height: vw(104),
      width: vw(104),
      borderRadius: 55
    },
    selectedIcon:{
      alignSelf: 'center',
      height: vw(25),
      width: vw(25),
      position: 'absolute'
    },
  });

  export default styles