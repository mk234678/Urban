// App.js
import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlay() {
  const video = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      if (video.current) {
        try {
          await video.current.playAsync(); // 👈 Force autoplay
        } catch (error) {
          console.log('Video playback error:', error);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={require('../assets/video.mp4')}
        style={styles.video}
        resizeMode="cover"
        isLooping
        isMuted={false}
        useNativeControls={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});
