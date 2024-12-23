import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimension";
import { colors } from "../../themes";

const styles = StyleSheet.create({
  label: {
    marginLeft: 0,
    color:'#7F879A'
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
    input: {
      backgroundColor: '#fff',
      borderColor: '#E7EBF3',
      height: vw(50),
      paddingHorizontal: vw(24),
      paddingVertical: vh(12),
      borderRadius: 16,
      borderWidth:1,
    },
    input1: {
      backgroundColor: '#fff',
      borderColor: 'none',
      borderRadius: 4,
      alignSelf:'center',
      justifyContent:'center'
    },
    pickerContainer:{
      backgroundColor: '#fff',
      borderColor: '#E7EBF3',
      height: vw(50),
      paddingHorizontal: vw(24),
      paddingVertical: vh(12),
      borderRadius: 16,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
    },
    errorText:{
      color:colors.red
    },
    formContainer:{
      flex: 1,
      gap:vh(10)
    },
    label1: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: vh(8),
    },
    selectedDate: {
      marginTop: vh(10),
      fontSize: 16,
      color: 'gray',
    },
    codeText:{
      backgroundColor: '#fff',
      borderColor: 'none',
      height: vh(40),
      padding: 2,
      borderRadius: 4,
      width:"24%",
      flexDirection:'row',
      marginRight:10,
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
    profileUploaderContainer:{
      flexDirection: 'row', 
      alignItems: 'center',
      bottom:vw(10)
    },
    profileContainer:{
      height: vw(140), 
      width: vw(140),
    },
    profileImage:{
      height: vw(120),
      width: vw(120), 
      borderRadius: 70,
    },
    profileTextContainer:{
      paddingLeft: 10
    },
    profileText:{
      fontWeight: '400', 
      fontSize: 14, 
      color: '#4B5879'
    },
    uploadText:{
      fontWeight: '500', 
      fontSize: 16, 
      color: '#EE28A9' 
    },
    dobContainer:{
      justifyContent: 'space-between', 
      flexDirection: 'row'
    },
    calenderIconContainer:{
      alignSelf: 'center', 
      flex: 1, 
    },
    calenderIcon:{
       height: vw(20), 
       width: vw(20), 
       alignSelf: 'flex-end'
    },
    dropDownIcon:{
      height: 7, 
      width: 12, 
      top: vw(22), 
      right: vw(25)
    },
    dropdown: {
      backgroundColor: '#fff',
      borderColor: '#E7EBF3',
      height: vw(50),
      paddingHorizontal: vw(24),
      paddingVertical: vh(12),
      borderRadius: 16,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
    },
    icon: {
      marginRight: 5,
      height:vw(16),
      width:vw(16)
    },
    labeldrop: {
      position: 'absolute',
      backgroundColor: 'white',
      left: vw(22),
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
    },
    inputSearchStyle: {
      height: vw(40),
      fontSize: 16,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius:8,
      borderWidth:1,
      borderColor:'#32A071'
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    checkIcon: {
      width: vw(20),
      height: vw(20),
      alignSelf:'flex-end'
    },
    renderDropdow:{
      flexDirection: 'row', 
      alignItems: 'center' 
    },
    emptyCheck:{
      marginRight: 5, 
      height: 16, 
      width: 16 ,
      borderWidth:1,
      borderColor:'grey',
      borderRadius:8
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor: '#E7EBF3',
      height: vw(50),
      paddingHorizontal: vw(24),
      paddingVertical: vh(5),
      borderRadius: 16,
      borderWidth:1,
    },
    inputError: {
      borderColor: 'red',
    },
    iconContainer: {
      flex:1,
    },
    itemContainerStyle:{
      margin: 8, 
      borderRadius: 8,
      backgroundColor:'#F9FAFA'
    },
    containerStyle:{
      borderRadius:8
    }
  });

  export default styles