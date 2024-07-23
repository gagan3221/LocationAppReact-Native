
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color : 'black'
    },
    itemContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    itemDescription: {
      fontSize: 16,
      color: '#555',
    },
    backButton: {
      padding: 16,
      backgroundColor: '#26f',
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    backButtonText: {
      color: 'white',
      fontSize: 18,
    },
    switchContainer:{
        position : "absolute" ,
         top : 160, 
         alignSelf : "flex-end" ,
          end : 10
    },

    map: {
      width : "100%",
      height : "100%"
    },
    searchBox :{
        position : "absolute",
        width:"90%",
        top:0,
        borderRadius : 8,
        borderWidth :1 ,
        borderColor : '#aaa',
        backgroundColor : 'white',
        padding : 8,
        alignSelf : 'center',
        marginTop : 20
    },
    searchBoxField:{
        borderColor : "#777",
        borderWidth : 1,
        borderRadius : 4 ,
        paddingHorizontal :8,
        paddingVertical : 4,
        fontSize : 18,
        marginBottom : 13,
        marginTop:13
    },
    buttonContainer:{
        alignItems : "center",
        justifyContent : "center",
        padding : 8,
        backgroundColor : "#26f",
        borderRadius :8
    },
    buttonLabel:{
        color : "white",
        fontSize : 18 ,
        fontWeight : "semibold"

    },
    doneButton:{
        alignItems : "center",
        justifyContent : "center",
        padding : 16,
        backgroundColor : "#26f",
        borderRadius :8 ,
        position : "absolute",
        bottom : 20 ,
        alignSelf : "center",
        width : "93%"
    },
    searchPlaceText:{fontSize:18 ,
        fontFamily:'Inter',
         color : '#172B4D' ,
          fontWeight : '700' ,
          }
  });
  
  
  
  
  
  
  
  