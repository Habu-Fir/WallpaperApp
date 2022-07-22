 import WallPaperManager from 'react-native-manage-wallpaper';
import  { View, Text, StyleSheet,Image,Dimensions,Button,ImageBackground, Pressable ,NativeModule } from 'react-native';

import {} from '../data/dummy-data'


function FanoOverviewScreen({route}){
   const catUrlId = route.params.categoryUrl
  // function WallpaperHandler(){
    console.log(cat)
  //   WallPaperManager.setWallpaper({uri: {catUrlId}}, (res)=> console.log(res));
  //  }
   
    return(
        <>
  <View style ={styles.container}> 
        <ImageBackground source={catUrlId} style={{ width:'102%' , height: '102%' }}  >
               <Pressable style={styles.button} onPress= {()=>{WallPaperManager.setWallpaper({uri: '../'}, (res)=> console.log(res));}}>
      <Text style={styles.text}>Set as Wallpaper</Text>
    </Pressable>
       
        </ImageBackground>

    </View>
    </>
    );
  
};


export default FanoOverviewScreen;

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      margin:70,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      position: 'absolute',
     right:    0,
     bottom:   0,
      backgroundColor: '#rgba(255,255,255,.6)',
    },
    text: {
      fontSize: 20,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  });
  