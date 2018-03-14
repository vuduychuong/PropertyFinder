"use strict";

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CustomText extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }

  render = () => {
      const { textStyles, buttonStyles, content } = this.props;

      return (
        <TouchableOpacity style={buttonStyles}>
          <Text style={textStyles}>{content}</Text>
        </TouchableOpacity>
      );
    }

}
export default CustomText;
