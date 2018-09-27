import React from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image'
import { Container, Header, Item, Input, Icon, Button, Text, Content, Thumbnail} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

import {styles} from '../../styles/styles';
import NativeButton from '../../components/button';

const Home = props => {
  const {avatar, rowFlex, lineSeperator, transButton, transButtonTxtStyle, rowText} = styles;
    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search"/>
            <Input onSubmitEditing={props.searchUser} placeholder="Search"
              onChangeText={(searchInput) => props.handleSearchInput(searchInput)}/>
          </Item>
          <Button onPress={props.searchUser} transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Spinner visible={props.loading} textStyle={{color: '#FFF',marginTop:-60}} />
        <Content contentContainerStyle={{flex: 1}}>
          <FlatList data={props.usersData} keyExtractor={(x,i) => i} renderItem={({item,index}) =>
            <View>
              <TouchableOpacity onPress={() => props.onPressUserProfile(item.login)}>
                <View style={rowFlex}>
                  <FastImage style={avatar} source={{uri:item.avatar_url,priority:FastImage.priority.normal}}
                    resizeMode={FastImage.resizeMode.contain}/>
                  <Text style={[rowText,{marginTop:22}]}>{item.login}</Text>
                </View>
                <View style={lineSeperator}/>
              </TouchableOpacity>
            </View>
          }/>
        </Content>
      </Container>
    )
}

export default Home;
