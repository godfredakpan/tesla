import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Image, ImageBackground, Pressable, FlatList, Dimensions} from 'react-native';
// import styles from './styles';
import cars from './cars';
import CarItem from '../../components/CarItem';
import styles from '../CarItem/styles';


const CarList = (props) => {

    return (
    
      <View style={styles.carContainer}>
         <FlatList data={cars} renderItem={({item}) => <CarItem car={item}/>} 
         snapToAlignment={'start'}
         showsVerticalScrollIndicator={false}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height}
         />
      </View>
        
       
    );
};

export default CarList;