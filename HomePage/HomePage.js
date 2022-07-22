import { ActivityIndicator } from "react-native";
import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Box, Header,NativeBaseProvider, Tab, Tabs, TabHeading, Left, Body, Right, Text, Title, Button, Icon, Input, Item, StatusBar, HStack, IconButton, Center, Image, Stack, AspectRatio, Heading } from 'native-base';

class HomePage extends Component {


    state = {
        favorites: [],
        isExploreLoading: false,
        searchBar: false,
        query: ''
    }

    addToFavorites = (item, cb) => {
        const favorites = Object.assign([], this.state.favorites);
        const index = favorites.findIndex(f => f.id === item.id);

        if (index === -1) {
            favorites.push(item);

        } else {
            favorites.splice(index, 1);

        }
        this.setState({
            favorites
        });

    }


    setExploreLoader = (isExploreLoading) => {
        this.setState({
            isExploreLoading
        })
    }

    onSearchClick = () => {
        this.setState(state => ({ searchBar: !state.searchBar, query: '' }))
    }

    onQueryChange = (query) => {
        this.setState({ query })
    }
    render() {

        return    (
   <NativeBaseProvider>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack> 
      
      {/* <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
          <Image
  style={{width: '100%', height:'100%',resizeMode : 'contain'}}
  source={ require('../assets/fano1.jpg')}  
  alt="Alternate Text" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>; */}
       <Image
  style={{width: '100%', height:'100%',resizeMode : 'contain'}}
  source={ require('../assets/fano1.jpg')}  
  alt="Alternate Text" />

      </NativeBaseProvider>
        )
      }
}

export default HomePage;