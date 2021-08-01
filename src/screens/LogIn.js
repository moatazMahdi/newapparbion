import React from 'react';
import 'react-native-gesture-handler';
import {Text, View,ScrollView,StyleSheet,SafeAreaView ,TextInput, KeyboardAvoidingView,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';


const LogIn = (props,{ navigation }) =>{
        const {displed}  = props;
        const opacitystyle = displed? {backgroundColor:'rgba(255,255,255,0.2)'}:{backgroundColor:'rgba(255,255,255,0.6)'}
        return(  
            <KeyboardAvoidingView >
                <View>
           
            <SafeAreaView  style = {styles.viewcontener}>
                 <ScrollView>
                <View style = {{ flexDirection:'row',marginTop:15,margin:15,backgroundColor:'#008388'}}>
                <Icon name="chevron-left" backgroundColor="#ffffff" color = "#ffffff" size={30} />
                <Text style = {styles.facebooklogin}>forget password</Text>
                </View>
                <Text style = {styles.logintext}>Log In</Text>
                <View style = {styles.emailcontener}>
                    <Text style = {styles.emailtext}>
                        EMAIL ADDRESS 
                    </Text>
                    <TextInput style = {styles.emailtextinput}>

                    </TextInput>
                </View>
                <View style = {styles.emailcontener}>
                    <View style = {{flexDirection:'row',}}>
                    <Text style = {styles.emailtext}>
                        PASSWORD
                    </Text>
                    <Text style={styles.showst}>Show</Text>
                    </View>
                    <TextInput style = {styles.emailtextinput}>

                    </TextInput>
                </View>
                 </ScrollView>
                 <View style = {styles.nextbutton}>
                     <TouchableHighlight style = {[opacitystyle,{alignContent:'center',alignItems:'center',borderRadius:50,width:50,height:50}]}>
                        <Icon 
                        name = "angle-right" 
                        color = {colors.green01}
                        size = {32}
                        style = {{marginTop:5,marginRight:-2}}

                        />
                     </TouchableHighlight>
                 </View>
            </SafeAreaView >
            </View>
             </KeyboardAvoidingView>
           
        );
    }  

const styles =StyleSheet.create({
    viewcontener:{
        height:'100%',
        backgroundColor:'#008388'
    },
    
    logintext:{
        fontSize:30,
        color:'#ffffff',
        fontWeight:'300',
        marginBottom:40,
        marginLeft:17,
        marginTop:20
        
    },
    facebooklogin:{
        marginLeft:120,
        color: '#ffffff',
        width: '77%',
        textAlign:'center',
        fontSize:15,
    },
    emailcontener:{
        margin:15,
        marginBottom:20
    },
    emailtext:{
        fontSize:15,
        color: '#ffffff',
        
    },
    emailtextinput:{
        width: '100%',
        borderBottomColor:'#ffffff',
        borderWidth:1,
        borderLeftColor:'#008388',
        borderRightColor:'#008388',
        borderTopColor:'#008388'
    },
    showst:{
        fontSize:15,
        color: '#ffffff',
        marginLeft:210,

    },
    nextbutton:{
        marginLeft:295,
        marginBottom:15
        
    }
});
export default LogIn;