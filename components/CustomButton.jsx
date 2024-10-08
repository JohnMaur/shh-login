import { View, Text, TouchableOpacity, Image } from 'react-native'

const CustomButton = ({ containerStyle, title, textStyle, customIcon, handlePress }) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
      className={`${containerStyle} bg-black items-center rounded-3xl`}
      activeOpacity={0.4}
    >
      <View className="flex-row items-center space-x-2">
        {customIcon ? (
          <Image 
            source={customIcon}
            className='w-5 h-5'
            resizeMode='contain'
          />
        ) : null}
        <Text className={`${textStyle} text-white font-bold`}>{title}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default CustomButton