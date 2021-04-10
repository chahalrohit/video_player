import { Dimensions } from 'react-native';
import Snackbar from 'react-native-snackbar';

export const deviceHeight = Dimensions.get("screen").height;
export const deviceWidth = Dimensions.get("screen").width;
export const deviceHeightWindow = Dimensions.get("window").height;
export const deviceWidthWindow = Dimensions.get("window").width;

// function for email validation
export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
};
//

export default function showAlert(message) {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        // action:{
        //     text:'Ok',
        //     textColor:"#009933",
        // }
    })
}

