import React from 'react';
import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image'
import { Container, Header, Icon, Text, Row, Content} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';

import {styles} from '../../styles/styles';
import NativeButton from '../../components/button';
import * as fontFamily from '../../constants/fontFamily';

const FollowersFollowings = props => {
    const {rowFlex, avatar, lineSeperator, rowText} = styles;
    return(
      <Container>
      <Spinner visible={props.loading} textStyle={{color: '#FFF',marginTop:-60}} />
      <Content contentContainerStyle={{flex: 1}}>
        <FlatList data={props.usersData} keyExtractor={(x,i) => i} renderItem={({item,index}) =>
          <View>
              <View style={rowFlex}>
                <FastImage style={avatar} source={{uri:item.avatar_url,priority:FastImage.priority.normal}}
                  resizeMode={FastImage.resizeMode.contain}/>
                <Text style={[rowText,{marginTop:22}]}>{item.login}</Text>
              </View>
              <View style={lineSeperator}/>
          </View>
        }/>
      </Content>
      </Container>
    )
}

export default FollowersFollowings;
