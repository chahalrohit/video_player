import { StyleSheet } from 'react-native';
import fonts from '../../Theme/Fonts';
import colors from '../../Theme/Colors';
import { deviceHeight, deviceWidth,deviceHeightWindow,deviceWidthWindow } from '../../Theme/Utils';

export default StyleSheet.create({
    container:{
        marginTop:'5%',
        backgroundColor: colors.transparentLight,
        height: deviceHeight / 3.58,
        width: deviceWidth,
    },
    modalBackground: {
        height: deviceHeight / 3.75,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.modalBackgroundColor
    },
    activityIndicatorWrapper: {
        borderRadius: 10,
    },
    fullscreenContainer:{
        marginTop:'0%',
        backgroundColor: colors.transparentLight,
    },
    video: {
        height: deviceHeight/3.3,
        width: deviceWidth,
        backgroundColor:colors.white
    },
    fullscreenVideo:{
        height:'100%',
        width:'100%',
    },
    touch: {
        width: '100%',
        height: '100%',
    },
    controlOverlay: {
        position: 'absolute',
        top: 0,
        bottom:0,
        left: 0,
        right: 0,
        // if enable background rgba color a shade always on video 
        // backgroundColor: colors.transparentLight,
    },
    topControlView: {
        height:'33%',
        width:'100%',
    },
    middleControlView: {
        height:'34%',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"center",
        marginTop:'2%'
    },
    fullscreenMiddleControlView:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: "center",
        marginTop:'5%'
    },
    bottomControlView: {
        height:'33%',
        width:'100%',
        flexDirection: 'row',
        alignItems:"center",
        marginTop:'-5%'
    },
    fullscreenbottomControlView:{
        flexDirection:'row',
    },
    backArrow:{
        color:colors.white,
        marginLeft:'5%',
        marginTop:'7%',
        width:'10%',
    },
    fullScreenbackArrow:{
        color:colors.white,
        fontSize:deviceWidth/12,
        marginLeft:'3%',
        marginTop:'3%',
        width: '5%',
    },
    previous: {
        height: deviceWidth / 10,
        width: deviceWidth / 10,
    },
    playPause: {
        height: deviceWidth / 7,
        width: deviceWidth / 7,
    },
    next: {
        height: deviceWidth / 10,
        width: deviceWidth / 10,
    },
    volume: {
        fontSize:deviceWidth/14,
        color:colors.white
    },
    fullscreen: {
        height: deviceWidth / 12,
        width: deviceWidth / 12,
    },
    slider: {
        width: deviceHeight/2.6,
        marginTop:'16%'
    },
    timeWrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:'5%',
        marginTop:'-11%'
    },
    timeLeft:{
        color:colors.white,
    },
    timeRight:{
        color:colors.white,
    },
    fullscreenslider: {
        width: deviceHeight/1.15,
        marginTop: '17.5%'
    },
    fullscreentimeWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: '3%',
        marginTop: '-6%'
    },
    fullscreentimeLeft: {
        color: colors.white,
    },
    fullscreentimeRight: {
        color: colors.white,
    },
});
