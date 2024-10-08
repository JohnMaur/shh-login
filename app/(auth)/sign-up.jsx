import { View, Text, Image } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react'

import CustomButton from "../../components/CustomButton"
import TextInputComponent from '../../components/TextInputComponent'
import icons from "../../constant/icons"
import images from '../../constant/images'
import { Link } from 'expo-router';

const SignUp = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View className='w-full h-full bg-primary'>
      <View className='items-center mt-14'>
        <Text className='text-white text-4xl font-bold'>Sign up Shh!</Text>

        <View className='w-full px-10 mt-5'>
          <CustomButton
            title='Sign up with Google'
            textStyle='text-lg'
            containerStyle='w-full py-5'
            customIcon={icons.googleIcon}
          />
        </View>

        <View className='flex-row items-center mt-5'>
          <Image
            source={images.line}
            className='w-20 border border-solid mr-2'
            resizeMode='cover'
          />
          <Text className='font-bold text-lg'>Or continue with Email</Text>
          <Image
            source={images.line}
            className='w-20 border border-solid ml-2'
            resizeMode='cover'
          />
        </View>

        <View className='w-full px-6 mt-7'>
          <TextInputComponent
            placeholder='Enter your name'
            containerStyle='py-3 mb-5'
          />
          <TextInputComponent
            placeholder='Enter your username'
            containerStyle='py-3 mb-5'
          />
          <TextInputComponent
            placeholder='Enter your email'
            containerStyle='py-3 mb-5'
          />
          <TextInputComponent
            placeholder='Enter your password'
            containerStyle='py-3 mb-5'
          />
        </View>

        <View className='flex-row px-10 items-center'>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : '#FFFFFF'}
            className='bg-white h-6 w-6'
          />
          <Text className='text-white font-semibold text-sm ml-2'>I agree with the Terms of service and Privacy policy</Text>
        </View>
      </View>

      <View className='relative'>
        <View className='justify-end mt-5'>
          <Image
            source={images.image2}
            className='w-auto h-[24rem]'
            resizeMode='cover'
          />
        </View>

        <View className='absolute right-5 top-8'>
          <View className='items-center'>
            <CustomButton
              title='Create Account'
              containerStyle='py-4 px-8'
              textStyle='text-lg'
            />
            <Text className='text-white font-semibold text-lg mt-2'>Already have an account?</Text>
            <Link
              className='font-semibold text-lg'
              href='/sign-in'
            >
              Login
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignUp