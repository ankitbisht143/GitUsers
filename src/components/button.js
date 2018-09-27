import React, {PureComponent} from 'react';

import {Button, Text} from 'native-base';
import {PropTypes} from 'prop-types';

export default class NativeButton extends PureComponent{
  render(){
    const {title, style, buttonTextStyle, onPress} = this.props;
    return(
      <Button style={style} onPress={onPress}>
        <Text style={buttonTextStyle}>{title}</Text>
      </Button>
    )
  }
}

NativeButton.propTypes = {
  title:PropTypes.string.isRequired,
  style:PropTypes.object.isRequired,
  buttonTextStyle:PropTypes.object.isRequired,
  onPress:PropTypes.func.isRequired
}
