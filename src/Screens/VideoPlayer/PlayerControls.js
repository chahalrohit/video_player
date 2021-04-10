import React, { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';
import { Icon } from 'native-base';
import controls from './VideoControlIcons/playerIcons';
import PlayerSlider from './PlayerSlider';
import styles from './StylesVideoPlayer';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import colors from './../../Theme/Colors';

const PlayerControls = ({
    playing,
    playPause,
    mute,
    onMute,
    fullscreen,
    duration,
    currentTime,
    skipBackwards,
    skipForwards,
    onSlideCapture,
    ifFullscreen,
    visibleControls
}) => {
    const [showingControls, hidingControls] = useState(visibleControls);
    // const navigation = useNavigation();

    // show controls when loading is finish
    // when visibleControls change useEffect call again and check condition 
    useEffect(() => {
        if (duration > 0) {
            hidingControls(!showingControls)
        }
    }, [visibleControls])

    useEffect(() => {
        // at first render and on every change of showingControls useEffect call
        const timer = () =>
            setTimeout(() => {
                if (showingControls) {
                    hidingControls(false);
                }
            }, 4000);
        // settimeout return a id for clear settimeout
        // store setTimeout id
        const timerID = timer();
        // unmount timer so hide/show work properly
        return () => {
            clearTimeout(timerID);
        };
    }, [showingControls]);

    return (
        // gave pressable height and width otherwise controls show/hide not work
        <Pressable
            onPress={() => hidingControls(!showingControls)}
            style={styles.touch}>
            {showingControls && (
                <View style={ifFullscreen ? styles.fullscreenContainer : styles.container}>
                    <View style={styles.topControlView}>
                        <Pressable
                            // onPress={() => {
                            //     ifFullscreen
                            //         ? fullscreen()
                            //         : navigation.goBack()
                            // }}
                            style={
                                ifFullscreen ? styles.fullScreenbackArrow : styles.backArrow
                            }
                        >
                            <Icon
                                type="Ionicons"
                                name="arrow-back"
                                style={{ color: colors.white }}
                            />
                        </Pressable>
                    </View>

                    <View
                        style={
                            ifFullscreen
                                ? styles.fullscreenMiddleControlView
                                : styles.middleControlView
                        }>
                        <View style={{ marginRight: '20%' }}>
                            <Pressable onPress={() => skipBackwards()}>
                                <Image source={controls.previous} style={styles.previous} />
                            </Pressable>
                        </View>

                        <Pressable onPress={() => playPause()}>
                            <Image
                                source={playing ? controls.play : controls.pause}
                                style={styles.playPause}
                            />
                        </Pressable>

                        <View style={{ marginLeft: '18%' }}>
                            <Pressable onPress={() => skipForwards()}>
                                <Image source={controls.next} style={styles.next} />
                            </Pressable>
                        </View>
                    </View>

                    <View
                        style={
                            ifFullscreen
                                ? styles.fullscreenbottomControlView
                                : styles.bottomControlView
                        }>
                        <PlayerSlider
                            currentTime={currentTime}
                            duration={duration}
                            ifFullscreen={ifFullscreen}
                            onSlideCapture={((value) => onSlideCapture(value))}
                        />

                        <View style={{ marginTop: '15%', marginLeft: '-1.5%' }}>
                            <Pressable onPress={() => onMute()}>
                                <Icon
                                    type="Ionicons"
                                    name={mute ? 'volume-mute-outline' : 'volume-high-outline'}
                                    style={styles.volume}
                                />
                            </Pressable>
                        </View>

                        <View style={{ marginTop: '15%' }}>
                            <Pressable onPress={() => fullscreen()}>
                                <Image source={controls.fullscreen} style={styles.fullscreen} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}
        </Pressable>
    );
};
export default PlayerControls;

PlayerControls.defaultProps = {
    playing: true,
    mute: false,
    playPause: () => { },
    onMute: () => { },
    fullscreen: () => { },
    ifFullscreen: false,
    duration: 0,
    currentTime: 0,
    onValueChange: () => { },
    skipBackwards: () => { },
    skipForwards: () => { },
    onSlideCapture: () => { },
    controlAfterLoad: () => { },
    visibleControls: false
};

PlayerControls.propTypes = {
    playing: PropTypes.bool,
    mute: PropTypes.bool,
    playPause: PropTypes.func,
    onMute: PropTypes.func,
    fullscreen: PropTypes.func,
    ifFullscreen: PropTypes.bool,
    duration: PropTypes.number,
    currentTime: PropTypes.number,
    onValueChange: PropTypes.func,
    skipBackwards: PropTypes.func,
    skipForwards: PropTypes.func,
    onSlideCapture: PropTypes.func,
    controlAfterLoad: PropTypes.func,
    visibleControls: PropTypes.bool
};
