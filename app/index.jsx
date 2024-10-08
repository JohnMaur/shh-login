import { View, Text, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

import images from '../constant/images'
import CustomButton from '../components/CustomButton'

const index = () => {
  const signUpBtn = () => {
    try { 
      router.replace("/sign-up")
    } catch (error) {
      Alert.alert("Error", error);
    }
  }

  return (
    <SafeAreaView className='w-full h-full bg-primary'>
      <View className='p-4 py-6'>
        <Text className='text-white font-bold text-5xl'>Welcome To</Text>
        <Text className='text-white font-bold text-5xl'>Shh!</Text>
        <Text className='text-[#1E1E1E] font-bold text-2xl'>A Hub Where Whispers Echo</Text>
        <Text className='text-[#1E1E1E] font-bold text-2xl'>Loudest</Text>
      </View>

      <View className='mt-5 flex-row justify-between'>
        <View>
          <View className='bg-white h-14 w-14 rounded-tr-full'></View>
          <View className='flex-row'>
            <View className='w-16 h-28 bg-white'></View>
            <View className='w-16 h-28 bg-white rounded-r-full'></View>
          </View>
        </View>

        <View className='mt-20 items-end'>
          <View className='bg-white h-14 w-14 rounded-tl-full'></View>
          <View className='flex-row'>
            <View className='w-16 h-32 bg-white rounded-l-full'></View>
            <View className='w-20 h-32 bg-white'></View>
          </View>
        </View>
      </View>

      <View className='flex-1 px-10 mt-5 items-center'>
        <CustomButton
          title='Sign up'
          containerStyle='w-full py-4'
          textStyle='text-2xl'
          handlePress={signUpBtn}
        />
        <Text className='text-white font-bold text-base mt-1'>
          Already have an account?{" "}
          <Link 
            className='text-black'
            href='/sign-in'
          > 
            Login
          </Link>
        </Text>
      </View>

      <View className='flex-1 justify-end'>
        <Image
          source={images.image1}
          className='w-full'
          resizeMode='cover'
        />
      </View>
    </SafeAreaView>
  )
}

export default index