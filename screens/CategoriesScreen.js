import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile";
import  {CATEGORIES}   from '../data/dummy-data'






function CatigorieScreen ({navigation}) {
    function renderCategoryItem(itemData){
        function pressHandler()
         {
            navigation.navigate('Fano Overview', {
                categoryUrl:itemData.item.url
            })
          }
    return ( 
        <CategoryGridTile title={itemData.item.title}
            color = {itemData.item.color}
            url = {itemData.item.url}
            onPress ={pressHandler}/>
     );
}

return (
<FlatList
 data={CATEGORIES}
 keyExtractor ={(item)=>item.id} 
 renderItem={renderCategoryItem}
 numColumns={2}
 />
 )
}
export default CatigorieScreen