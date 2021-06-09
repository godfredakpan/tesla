import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    container: {
        width: '100%',
        padding: 10,
      },
      button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
        
      },
      
      text: {
        color:'white',
        textTransform: 'uppercase'
      },
    
      subTitle: {
        fontSize: 16,
        color: 'grey'
    
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    
      },

});

export default styles;