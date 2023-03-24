import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ffffffff',
    },
    banner: {
      width: '100%',
      height: '15.8%',
      resizeMode: 'stretch',
      marginBottom: '10px',
      borderRadius: 5
    },
    inputContainer: {
      width: '80%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 5,
      padding: 5,
      marginBottom: 10,
    },
    textbox: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#888',
      borderRadius: 5,
      padding: 5,
      marginBottom: 10,
      height: 100,
    },
    definitiva: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    button: {
        backgroundColor: '#005c99',
        color: '#fff',
        paddingVertical: 10,
        margin: 5,
        borderRadius: 10,
        width: 60,
        alignItems: 'center',
    },
    textTouchable: {
        color:'#000', 
        fontWeight:'bold', 
        textAlign:'center' 
    },
    titularText:{
        fontSize:'40px',
        color:'#000', 
        fontWeight:'bold', 
        textAlign:'center' 
    },
    subtituleText:{
        fontSize:'15px',
        color:'#000', 
        fontWeight:'bold', 
        textAlign:'center'
    }
  });
  
  export default styles;