import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

export default class RoundedButton extends Component{
    render(){
        const {
            loading,
            disabled,
            text,
            textColor,
            background,
            icon,
            handleOnPress,
            textSize,
            textWeight,
            iconPosition,
            textAlign,
            borderColor,
          } = this.props;
            const backgroundColor = background || 'transparent';
            const color = textColor || colors.black;
            const fontSize = textSize || 16;
            const fontWeight = textWeight || '600';
            const alignPosition = textAlign || 'center';
            const iconLocation = iconPosition || 'left';
            const border = borderColor || colors.white;
            const opacityStyle = disabled || loading ? 0.5 : 1;
            const textOpacity = loading ? 0 : 1;
            const rippleColor = backgroundColor === 'transparent' ? color : 'rgba(0,0,0,0.4)';
        return(
            <TouchableHighlight
            style = {{background}, styles.wrapper}
            onPress = {handleOnPress}
            >
                {icon}
                <Text style = {[{color}, styles.buttonText]}>{text}</Text>
            </TouchableHighlight>
        );
    }
}
RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  textWeight: PropTypes.string,
  textAlign: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  icon: PropTypes.object,
  iconPosition: PropTypes.string,
  handleOnPress: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};


const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      padding:20,
      borderRadius:40,
      borderWidth:1,
      borderColor:colors.black,
      backgroundColor:colors.black},
    
    buttonText: {
        width: '100%',
        textAlign:'center',
        fontSize:16,
        marginTop: -10,
    },
    loaderContainer: {
      width: 90,
      height: 90,
      borderRadius: 15,
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: -45,
      marginTop: -45,
    },
    loaderImage: {
      width: 40,
      height: 40,
      borderRadius: 15,
      position: 'absolute',
      left: '50%',
      marginLeft: -20,
      top: '50%',
      marginTop: -20,
    },
  });