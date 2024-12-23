import {StyleSheet} from 'react-native';
import { vh, vw } from '../../utils/dimension';
import { colors } from '../../themes';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EDF3',
    borderRadius: 50,
  },
  bgColor: {
    flex: 1,
    backgroundColor: colors.white,
  },
  centerImage: {
    marginTop: vw(32),
    marginHorizontal: vw(24),
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageSize: {
    height: vw(148),
    width: vw(111),
  },
  commonMargin: {
    marginHorizontal: vw(33),
    marginTop: vw(24),
  },
  headingText: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 24,
  },

  lineView: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginVertical: vw(20),
  },


  containerTop: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: '#F6F9FA',
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: '#F6F9FA',
    marginBottom:vh(10),
  },
  containerTop1: {
    flexDirection: 'row',
    margin: 20,
  },
  imgSize: {
    height: vw(50),
    width: vw(44),
  },
  forwardContainer:{
    justifyContent:'center',
    marginRight:vw(20),
  },
  imgForward:{
    width:vw(6),
    height:vh(10),
  },
  containerTop2: {
    flexDirection: 'column',
    marginStart: 14,
    justifyContent:'center'
  },
  textName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000CC',
  },
  text2: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A7BBB',
    marginTop: vh(10),
  },
  headingDescription: {
    marginTop: vh(8),
    color: '#4D5876',
    fontWeight: '400',
    fontSize: 15,
  },
  marginSide: {
    marginTop:vh(36),
    marginHorizontal: vw(24),
    flex:1
  },
  iconSize: {
    height: vw(55),
    width: vw(55),
    resizeMode:'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#122636',
    marginTop: -2,
    marginStart: 4,
  },

  btnContainer: {
    backgroundColor: '#2A7BBB',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
  },
  getStartedBtn: {
    color: '#ffffff',
    paddingVertical: (17),
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default styles;