import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

import CustomButton from "../../components/CustomButton"
import TextInputComponent from '../../components/TextInputComponent'
import icons from "../../constant/icons"
import images from '../../constant/images'

const SignIn = () => {
  return (
    <View className='w-full h-full bg-primary'>
      <View className='items-center mt-20'>
        <Text className='text-white text-4xl font-bold'>Sign up Shh!</Text>

        <View className='w-full px-10 mt-5'>
          <CustomButton
            title='Log in with Google'
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
          <Text className='font-bold text-lg'>Or login with Email</Text>
          <Image
            source={images.line}
            className='w-20 border border-solid ml-2'
            resizeMode='cover'
          />
        </View>

        <View className='w-full px-6 mt-7'>
          <TextInputComponent
            placeholder='Enter your username or email'
            containerStyle='py-4 mb-5'
            title='Username or Email'
          />
          <TextInputComponent
            placeholder='Enter password'
            containerStyle='py-4'
            title='Password'
          />

          <View className='items-end mt-2 mr-3'>
            <TouchableOpacity>
              <Text className='text-lg'>Forgot?</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View className='relative'>
        <View className='absolute top-28 left-8 items-center z-10'>
          <Text className='text-white font-semibold text-lg'>Don't have an account?</Text>
          <Link
            className='font-semibold text-lg'
            href='/sign-up'
          >
            Sign up
          </Link>
        </View>

        <View className='absolute left-20 top-[-34]'>
          <Image
            source={images.image3}
            className='h-[450px]'
            resizeMode='contain'
          />
        </View>
      </View>
    </View>
  )
}

export default SignIn