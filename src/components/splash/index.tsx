import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import splash from '@assets/checklist.gif';
import styled from 'styled-components/native';
import { Routes } from '@components/routes/Routelist';

export function Splash({ navigation }: { navigation: any }) {
  const logoFlip = useRef(new Animated.Value(180)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoFlip, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    const timeout = setTimeout(() => {
      navigation.replace(Routes.TaskList); 
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const CenterContainer = styled.View`
    flex: 1;
    background: #fff;
    justify-content: center;
    align-items: center;
  `;

  const Logo = styled(Animated.Image)`
    width: 70%;
    height: 70%;
  `;

  return (
    <CenterContainer>
      <Logo
        source={splash}
        resizeMode="contain"
        style={{
          opacity: logoOpacity,
          transform: [
            {
              rotateY: logoFlip.interpolate({
                inputRange: [0, 180],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        }}
      />
    </CenterContainer>
  );
}
