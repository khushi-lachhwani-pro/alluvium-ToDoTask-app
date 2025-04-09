import {
  Image,
  ImageStyle,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  Text
} from 'react-native';
import empty from '@assets/empty.jpg'
interface EmptyDataScreenProps {
  containerStyle?: StyleProp<ViewStyle>;
  subContainerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelText?: string; // Make labelText optional
}

export default function EmptyDataScreen({
  containerStyle,
  subContainerStyle,
  imageStyle,
  labelStyle,
  labelText = 'There is no Task to display', 
}: EmptyDataScreenProps) {
  return (
    <View
      style={[
        {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyle,
      ]}
    >
      <View style={[{ gap: 10 }, subContainerStyle]}>
        <Image style={[imageStyle]} source={empty} />
        {/* <LabelText styleProps={[labelStyle]} text={labelText} /> */}
        <Text style={[labelStyle,{textAlign:'center',fontStyle:'italic',fontWeight:'bold'}]}>{labelText}</Text>
      </View>
    </View>
  );
}
