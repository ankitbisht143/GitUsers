import React from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image'
import { Container, Header, Icon, Text, Row, Content} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';

import {styles} from '../../styles/styles';
import NativeButton from '../../components/button';
import * as fontFamily from '../../constants/fontFamily';

const Repositories = props => {
    const {transButton, transButtonTxtStyle, leftAlignSmallText, lineSeperator} = styles;
    return(
      <Container>
      <Content contentContainerStyle={{flex: 1}}>
        <FlatList data={props.repositories} keyExtractor={(x,i) => i} renderItem={({item,index}) =>
          <View style={{marginTop:5}}>
            <TouchableOpacity onPress={() => props.onPressUserProfile(item.login)}>
              <Text style={[leftAlignSmallText,{color:'#3b5998', fontSize:16, fontFamily:fontFamily.ARGENTCF_BOLD}]}>
                {item.name}
              </Text>
              <Text style={[leftAlignSmallText,{marginTop:5}]}>Updated on {moment(item.updated_at,'YYYYMMDD').fromNow()}</Text>
              <View style={[lineSeperator,{marginTop:15}]}/>
            </TouchableOpacity>
          </View>
        }/>
      </Content>
      </Container>
    )
}

export default Repositories;
