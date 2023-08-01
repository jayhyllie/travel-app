import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';


export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 flex justify-end">
      
      {/* background image */}
      <Image 
        source={require('../assets/images/welcome.png')}
        className="h-full w-full absolute"
      />

      {/* content & gradient */}
      <View className="p-5 pb-10 mt-8">
        <LinearGradient
            colors={['transparent', 'rgba(3,105,161,0.8)']}
            style={{width: wp(100), height: hp(60)}}
            className="absolute bottom-0"
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
        />
        <View className="mt-3">
            <Text style={{fontSize: wp(10)}} className="text-white font-bold">Traveling made easy!</Text>
            <Text style={{fontSize: wp(4)}} className="font-normal text-gray-400">
                Experience the world's best adventure around the world with us
            </Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")} className="p-3 px-12 rounded-full m-auto" style={{backgroundColor: theme.bg(1)}}>
            <Text className="text-white text-xl font-bold" style={{ fontSize: wp(5.5)}}>Let's go!</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}