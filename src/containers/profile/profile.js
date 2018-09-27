import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image'
import { Container, Header, Icon, Text, Row} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

import {styles} from '../../styles/styles';
import NativeButton from '../../components/button';
import * as fontFamily from '../../constants/fontFamily';

const Profile = props => {
    const {bigAvatar, profileContainer, centerAlignText, icon, transButton, transButtonTxtStyle, rowText, rowFlex,
            leftAlignText, halfWidth, halfWidthText} = styles;
    return(
      <Container>
        <ScrollView>
          <View style={profileContainer}>
            <FastImage style={bigAvatar} source={{uri:props.user.avatar_url,priority:FastImage.priority.normal}}
              resizeMode={FastImage.resizeMode.contain}/>
            <Text style={centerAlignText}>{props.user.name}</Text>
            <Text style={[centerAlignText,{marginTop:5,color:'gray',fontSize:16}]}>{props.user.login}</Text>
            <View style={rowFlex}>
              <TouchableOpacity style={halfWidth} onPress={() => props.onPressRepositories(props.user.login)}>
                <Text style={halfWidthText}>Public Repositories</Text>
                <Text style={[halfWidthText,{marginTop:5}]}>{props.user.public_repos}</Text>
              </TouchableOpacity>
              <View style={halfWidth}>
                <Text style={halfWidthText}>Public Gists</Text>
                <Text style={[halfWidthText,{marginTop:5}]}>{props.user.public_gists}</Text>
              </View>
            </View>
            <View style={rowFlex}>
              <View style={halfWidth}>
                <Text style={halfWidthText}>Followers</Text>
                <Text style={[halfWidthText,{marginTop:5}]}>{props.user.followers}</Text>
              </View>
              <View style={halfWidth}>
                <Text style={halfWidthText}>Followings</Text>
                <Text style={[halfWidthText,{marginTop:5}]}>{props.user.following}</Text>
              </View>
            </View>
          </View>
          <Text style={leftAlignText}>{props.user.bio}</Text>

          <View style={[rowFlex,{display:props.user.location?"flex":"none"}]}>
            <Icon type="FontAwesome" name="map-marker" color="gray" style={icon}/>
            <Text style={[rowText,{marginTop:7, fontFamily:fontFamily.ARGENTCF_REGULAR}]}>{props.user.location}</Text>
          </View>
          <View style={[rowFlex,{display:props.user.blog?"flex":"none"}]}>
            <Icon type="FontAwesome" name="globe" color="gray" style={icon}/>
            <NativeButton title={props.user.blog} style={[transButton,{marginTop:-6,marginLeft:-8}]}
              buttonTextStyle={transButtonTxtStyle} onPress={() => props.onPressUserBlog(props.user.blog)}/>
          </View>
          <View style={[rowFlex,{marginTop:-8,display:props.user.html_url?"flex":"none"}]}>
            <Icon type="FontAwesome" name="github" color="gray" style={icon}/>
            <NativeButton title={props.user.html_url} style={[transButton,{marginTop:-6,marginLeft:-8}]}
              buttonTextStyle={transButtonTxtStyle} onPress={() => props.onPressGitUrl(props.user.html_url)}/>
          </View>
        </ScrollView>
      </Container>
    )
}

export default Profile;
