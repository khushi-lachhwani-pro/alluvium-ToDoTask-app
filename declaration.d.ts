declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';
declare module '*.gif';
declare module '*.avif';


declare module '*.png' {
    import {ImageSourcePropType} from 'react-native';
  
    const value: ImageSourcePropType;
    export default value;
  }
  
  declare module '*.jpg' {
    import {ImageSourcePropType} from 'react-native';
  
    const value: ImageSourcePropType;
    export default value;
  }