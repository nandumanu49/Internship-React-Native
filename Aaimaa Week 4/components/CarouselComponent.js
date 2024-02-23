import { Dimensions } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons'; 

const CarouselItem = ({ item, isActive, onNextSlide }) => {
  const video = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const shouldPlay = isActive; 

  useEffect(() => {
    if (video.current) {
      video.current.setIsMutedAsync(isMuted);
    }
  }, [isMuted]);

  useEffect(() => {
    if (video.current) {
      if (shouldPlay && isPlaying) {
        video.current.playAsync();
      } else {
        video.current.pauseAsync();
      }
    }
  }, [shouldPlay, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <View style={styles.slide}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: item.video,
        }}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false} 
        shouldPlay={shouldPlay}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <FontAwesome
        name={isMuted ? 'volume-off' : 'volume-up'}
        size={24}
        color="white"
        onPress={() => setIsMuted(prev => !prev)} 
        style={styles.volumeIcon}
      />
      <FontAwesome 
        name={isPlaying ? 'pause' : 'play'}
        size={24}
        color="white"
        onPress={togglePlayPause}
        style={styles.playPauseIcon}
      />
      <Button mode="outlined" textColor="white" onPress={item.onPress}>Watch Now</Button>
    </View>
  );
};

const CarouselComponent = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const onNextSlide = () => {
    if (carouselRef.current) {
      const nextSlide = (activeSlide + 1) % data.length;
      setActiveSlide(nextSlide);
      carouselRef.current.snapToItem(nextSlide);
    }
  };

  const renderItem = ({ item, index }) => (
    <CarouselItem
      item={item}
      isActive={index === activeSlide}
      onNextSlide={onNextSlide}
    />
  );
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{ alignContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={360}
        layout="default"
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'black',
    borderRadius: 9,
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  slideText: {
    marginBottom: 10,
    color: 'white',
  },
  paginationContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'white',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 200,
  },
  volumeIcon: {
    position: 'absolute',
    bottom: 10, 
    right: 10,
    zIndex: 1,
  },
  playPauseIcon: {
    position: 'absolute',
    bottom: 10,
    left: 10, 
    zIndex: 1,
  },
});

export default CarouselComponent;
