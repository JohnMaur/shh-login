import { View, Text, TextInput } from 'react-native'

const TextInputComponent = ({ placeholder, containerStyle, title }) => {
  return (
    <View className='w-full'>
      {title ? (
        <Text className='text-lg font-bold mb-3'>{title}</Text>
      ) : null}


      <View className={`${containerStyle} w-full bg-[#D9D9D9] rounded-full`}>
        <TextInput 
          placeholder={placeholder}
          placeholderTextColor="#7F7F7F"
          className='text-base font-semibold px-5'
        />
      </View>
    </View>

  )
}

export default TextInputComponent