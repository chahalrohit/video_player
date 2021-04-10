import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, Modal, ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import Video, { onBuffer, videoError } from 'react-native-video';
import PlayerControls from './PlayerControls';
import Orientation from 'react-native-orientation';
import PropTypes from 'prop-types';
import colors from './../../Theme/Colors';
import styles from './StylesVideoPlayer';

const VideoPlayer = ({ videoUri, posterPath }) => {
    // all state with useState hook
    const [isPaused, setPaused] = useState(false);
    const [isFullScreen, setFullScreen] = useState(false);
    const [isMute, setMute] = useState(false);
    const [isDuration, setDuration] = useState(0);
    const [isCurrentTime, setCurrentTime] = useState(0);
    const [isRepeat, setRepeat] = useState(false);
    const [modalLoading, setModalLoading] = useState(true);
    const [isVisibleControls, setVisibleControls] = useState(false)
    //

    const videoRef = useRef();

    useEffect(() => {
        if (isFullScreen) {
            Orientation.lockToLandscape();
            StatusBar.setHidden(true);
        } else {
            Orientation.lockToPortrait();
            StatusBar.setHidden(false);
        }
        Orientation.addOrientationListener(handleOrientation);
        return () => Orientation.removeOrientationListener(handleOrientation);
    }, [isFullScreen]);

    function handleOrientation(Orientation) {
        Orientation === 'LANDSCAPE-LEFT' || Orientation === 'LANDSCAPE-RIGHT'
            ? setFullScreen(true)
            : setFullScreen(false);
    }

    function handleFullScreen() {
        setFullScreen(!isFullScreen);
    }

    const handlePlayPause = () => {
        setPaused(!isPaused);
    };

    const muteVolume = () => {
        setMute(!isMute);
    };

    // fetch video duration
    const onLoad = (data) => {
        setDuration(data.duration);
        setModalLoading(false);
        setVisibleControls(true)
    };

    //fetch video play time
    const onProgress = (data) => {
        setCurrentTime(data.currentTime);
    };

    const onEnd = () => {
        setPaused(!isPaused);
        videoRef.current.seek(0);
    };

    const skipBackward = () => {
        videoRef.current.seek(isCurrentTime - 10);
    };

    const skipForward = () => {
        videoRef.current.seek(isCurrentTime + 10);
    };

    const sliderControl = (value) => {
        videoRef.current.seek(value)
        setCurrentTime(value)
    }

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalLoading}
                onRequestClose={() => console.log('Closed video modal')}>
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={modalLoading}
                            color={colors.medinColor}
                            size="large"
                        />
                    </View>
                </View>
            </Modal>
            <Video
                ref={videoRef}
                source={{ uri: videoUri }}
                style={isFullScreen ? styles.fullscreenVideo : styles.video}
                onBuffer={onBuffer}
                onError={videoError}
                resizeMode={isFullScreen ? 'contain' : 'cover'}
                muted={isMute}
                paused={isPaused}
                fullscreen={isFullScreen}
                // fetch video duration when video load
                onLoad={onLoad}
                // fetch the video duration
                onProgress={(data) => onProgress(data)}
                onEnd={() => onEnd()}
                repeat={isRepeat}
                // poster must be a url
                poster={posterPath}
                posterResizeMode={'cover'}
            />
            <View style={styles.controlOverlay}>
                <PlayerControls
                    playing={isPaused}
                    playPause={handlePlayPause}
                    mute={isMute}
                    onMute={muteVolume}
                    fullscreen={() => handleFullScreen()}
                    duration={isDuration}
                    currentTime={isCurrentTime}
                    skipBackwards={skipBackward}
                    skipForwards={skipForward}
                    onSlideCapture={(value) => sliderControl(value)}
                    ifFullscreen={isFullScreen}
                    // controlAfterLoad={() => controlAfterLoad()}
                    visibleControls={!modalLoading}
                />
            </View>
        </View>
    );
};
export default VideoPlayer;

VideoPlayer.defaultProps = {
    videoUri: null,
    posterPath: null,
};

VideoPlayer.propTypes = {
    videoUri: PropTypes.string,
    posterPath: PropTypes.string,
};
//
