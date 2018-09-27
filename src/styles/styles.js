import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../constants/dimensions';
import * as fontFamily from '../constants/fontFamily';

export const styles = StyleSheet.create({
  avatar:{
    marginLeft: 10,
    marginTop: 10,
    height: 60,
    width: 60,
    borderRadius: 30
  },
  rowFlex:{
    flexDirection: 'row'
  },
  rowText:{
    marginTop: 15,
    marginLeft: 8,
    width: SCREEN_WIDTH - 90,
    color: 'black',
    fontFamily: fontFamily.ARGENTCF_BOLD
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
    width: SCREEN_WIDTH - 90
  },
  transButtonTxtStyle: {
    color: '#3b5998',
    textDecorationLine: 'underline',
    fontFamily: fontFamily.ARGENTCF_BOLD,
    fontSize: 14
  }
})
