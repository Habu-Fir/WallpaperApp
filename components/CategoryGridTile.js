import { Hidden } from "native-base";
import { Pressable, Text, View, StyleSheet, Platform,Image, ImageBackground } from "react-native";


function CategoryGridTile ({title,color,url ,onPress}) {
    return (
    <View style={[styles.gridItem]}>
        <Pressable android_ripple={{color:'grey'}} 
        style ={({pressed})=>[styles.button, pressed? 
            styles.buttonPressed:null
        ]} 
        onPress={onPress}
         >
            <View  style ={[styles.innerContainer, {backgroundColor:color}]}>
            <ImageBackground source={url} style={{ width: 200, height: 150 }} >
              <Text style ={styles.title}>{title}</Text>
            </ImageBackground>
                 
                
            </View>


        </Pressable>
    </View>
    ) 
} 
export default CategoryGridTile;

const styles =StyleSheet.create({
    gridItem:{
        flex:1,
        margin:3,
        height:150,
        borderRadius: 4,
        elevation:4, 
        shadowColor:'black',
        shadowOffset: {width:0,height:2},
        backgroundColor:'white',
        shadowRadius:8,
        overflow:Platform.OS==='android'? 'hidden' :'visible'

    },
    buttonPressed:{
        opacity:0.5
    },
    button :{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'

    },
    title :{
        fontWeight:'bold',
        fontFamily:'monospace',
        color:'white',
        textAlign:'center',
        backgroundColor:'black',
        fontSize:18   
    },
    image :{
        width:40,
        height:40
    }
})