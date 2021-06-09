import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Image, ImageBackground, Pressable} from 'react-native';
import styles from './styles';

const Buttons = (props) => {

    const {content, onPress, type} = props;

    const backgroundColor = type === 'primary' ? '#222222' : 'white';

    const color = type === 'primary' ? 'white' : 'black';

    return (
    
        <View style={styles.container}>
            
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={()=> onPress()}>

            <Text style={[styles.text, {color: color}]}>{content}</Text>
            </Pressable>

        </View>
       
    );
};

export default Buttons;