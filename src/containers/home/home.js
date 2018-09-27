import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';

import FastImage from 'react-native-fast-image'
import { Container, Header, Item, Input, Icon, Button, Text, Content, Thumbnail} from 'native-base';
import Lightbox from 'react-native-lightbox';
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
            <Input onSubmitEditing={props.searchImages} placeholder="Search" onChangeText={(searchInput) => props.handleSearchInput(searchInput)} value={props.searchInput}/>
          </Item>
          <Button onPress={props.searchImages} transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
          <FlatList data={props.usersData} keyExtractor={(x,i) => i} renderItem={({item,index}) =>
            <View>
              <View style={rowFlex}>
                <FastImage style={avatar} source={{uri:item.avatar_url,priority:FastImage.priority.normal}} resizeMode={FastImage.resizeMode.contain}/>
                <View>
                  <Text style={rowText}>
                    {item.login}
                  </Text>
                  <NativeButton title={item.html_url} style={transButton} buttonTextStyle={transButtonTxtStyle} onPress={props.onPressSignup}/>
                </View>
              </View>
              <View style={lineSeperator}/>
            </View>
          }/>
        </Content>
      </Container>
    )
}

export default Home;
