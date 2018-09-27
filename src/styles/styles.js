import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/dimensions';
import * as fontFamily from '../constants/fontFamily';

export const styles = StyleSheet.create({
  avatar:{
    marginLeft: 10,
    marginTop: 10,
    height: 50,
    width: 50,
    borderRadius: 25
  },
  rowFlex:{
    flexDirection: 'row',
  },
  rowText:{
    marginTop: 15,
    marginLeft: 8,
    width: SCREEN_WIDTH - 90,
    color: 'black',
    fontFamily: fontFamily.ARGENTCF_BOLD,
    fontSize:16
  },
  lineSeperator:{
    height: 1,
    backgroundColor: 'lightgray',
    width: SCREEN_WIDTH - 10,
    marginLeft: 10,
    marginTop:10
  },
  transButton: {
    backgroundColor: 'transparent',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    marginTop: -10,
    width: SCREEN_WIDTH - 90,
    marginLeft: -5
  },
  transButtonTxtStyle: {
    color: '#3b5998',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.ARGENTCF_BOLD,
    fontSize: 16
  },
  bigAvatar: {
    marginTop: 15,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center'
  },
  profileContainer: {
    backgroundColor:'#F2F7FA',
    paddingBottom:15
  },
  centerAlignText: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'black',
    fontFamily: fontFamily.ARGENTCF_REGULAR,
    alignSelf: 'center',
    fontSize: 22
  },
  icon: {
    fontSize: 15,
    color: 'gray',
    marginTop:10,
    marginLeft:10
  },
  leftAlignText: {
    marginTop: 10,
    marginHorizontal: 10,
    color: 'gray',
    fontFamily: fontFamily.ARGENTCF_REGULAR,
    fontSize: 20
  },
  halfWidth: {
    width: SCREEN_WIDTH/2
  },
  halfWidthText: {
    marginTop: 10,
    color: 'black',
    fontFamily: fontFamily.ARGENTCF_REGULAR,
    textAlign:'center'
  }
})
