import React, {  } from 'react';
import { View, Text } from 'react-native';
import styles from './StylesVideoPlayer';
import colors from './../../Theme/Colors';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

const PlayerSlider = ({
    currentTime,
    duration,
    onSlideCapture,
    ifFullscreen,
}) => {
    const position = getMinutesFromSeconds(currentTime);
    const videoLength = getMinutesFromSeconds(duration);

    function getMinutesFromSeconds(duration) {
        let minutes = Math.floor((duration % 3600) / 60);
        let seconds = Math.floor((duration % 3600) % 60);
        return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds
            }`;
    }

    return (
        <View>
            <Slider
                style={ifFullscreen ? styles.fullscreenslider : styles.slider}
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                minimumTrackTintColor={colors.medinColor}
                maximumTrackTintColor={colors.white}
                thumbTintColor={colors.medinColor}
                onValueChange={(value)=>onSlideCapture(value)}
            />
            <View
                style={
                    ifFullscreen ? styles.fullscreentimeWrapper : styles.timeWrapper
                }>
                <Text
                    style={ifFullscreen ? styles.fullscreentimeLeft : styles.timeLeft}>
                    {position}
                </Text>
                <Text
                    style={ifFullscreen ? styles.fullscreentimeRight : styles.timeRight}>
                    {videoLength}
                </Text>
            </View>
        </View>
    );
};
export default PlayerSlider;

PlayerSlider.defaultProps = {
    currentTime: 0,
    duration: 0,
    onSlideCapture: () => {},
    ifFullscreen: false,
};

PlayerSlider.propTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    onSlideCapture: PropTypes.func,
    ifFullscreen: PropTypes.bool,
};
