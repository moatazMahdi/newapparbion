import React from 'react';
import 'react-native-gesture-handler';
import {Text, View,Image,StyleSheet,TouchableOpacity,Pressable, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';


const LoggedOut = ({ navigation }) =>{
    
        return(  
        <NavigationContainer>
            <View style = {styles.viewcontener}>
                <Image source = {require('../img/bing-logo.png')} style = {styles.logo}/>
                <Text style = {styles.welcometext}>
                    Welcome To my App
                </Text>
                <RoundedButton
                    text = "Countiune with Facebook"
                    textColor = {colors.gray01}
                    background = {colors.white}
                    icon = { <Icon name="facebook" backgroundColor="#008388" color = "#008388" size={30} />}
                
                />
                  
                {/* <TouchableOpacity  onPress={() =>{alert('Facebook Login')}}>
                   <View style = {styles.iconbutton}>
                    <Icon name="facebook" backgroundColor="#008388" color = "#008388" size={30} />
                    <Text style = {styles.facebooklogin}>Login with Facebook</Text>
                    </View> 
                </TouchableOpacity>
              
                
                <TouchableOpacity 
                  //onPress={() => navigation.navigate('Desing')}
                  onPress={() =>{alert('You tapped the button!')}}
                 >
                    <View style = {styles.iconbutton2}>
                    <Text style = {styles.accountlogin2}>Create Account</Text>
                    </View>
                </TouchableOpacity>
                
                <Text style = {styles.moreoption}>More Option</Text>
                <Text style = {styles.moreoption}>By tapping Continue,Create Account or More options</Text> */}
            </View>
            </NavigationContainer>
        );
    }  

const styles =StyleSheet.create({
    viewcontener:{
        height:'100%',
        backgroundColor:'#008388'
    },
    logo:{
        width:50,
        height:50,
        marginTop:70, 
        marginBottom:40,
    },
    welcometext:{
        fontSize:30,
        color:'#ffffff',
        fontWeight:'300',
        marginBottom:40,
        marginLeft:15
        
    },
    iconbutton:{
        alignItems:'center',
        width:'90%',
        height:60,
        borderRadius:40,
        backgroundColor:'#ffffff',
        margin:15,
        borderWidth:1,
        borderColor:'#ffffff',
        flexDirection:'row',
        padding:15
    },
    facebooklogin:{
        marginLeft:15,
        color: '#008388',
        width: '77%',
        textAlign:'center',
        fontSize:20,
    },
    iconbutton2:{
        alignItems:'center',
        width:'90%',
        height:60,
        borderRadius:40,
        margin:15,
        marginBottom:40,
        borderWidth:1,
        borderColor:'#ffffff',
        flexDirection:'row',
        padding:15
    },
    accountlogin2:{
        marginLeft:15,
        color: '#ffffff',
        width: '80%',
        textAlign:'center',
        fontSize:20,
    },
    moreoption:{
        fontSize:20,
        color:'#ffffff',
        fontWeight:'300',
        marginBottom:10,
        marginLeft:15
    },
});
export default LoggedOut;