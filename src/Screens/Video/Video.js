import React from 'react';
import {View} from 'native-base';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Video = () => {
  return (
    <View>
      <VideoPlayer
        videoUri={
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      />
    </View>
  );
};
export default Video;
