import { Platform, StyleSheet } from 'react-native';
import StyleSheetConstants from '../utils/StyleSheetConstants';

var styles = StyleSheet.create({
    navBarTitle: {
        color: StyleSheetConstants.WHITE,
        flex: StyleSheetConstants.ONE,
        fontSize: StyleSheetConstants.TWENTY,
        fontWeight: StyleSheetConstants.BOLD,
        textAlign: StyleSheetConstants.LEFT,
        justifyContent: StyleSheetConstants.CENTER,
    },
    notificationContainer: {
        flex: StyleSheetConstants.ONE,
        alignItems: StyleSheetConstants.CENTER,
        justifyContent: StyleSheetConstants.CENTER,
        backgroundColor: StyleSheetConstants.BACKGROUND_COLOR,
        paddingTop: StyleSheetConstants.TWENTY
    },
    navBarStyle: {
        flexDirection: StyleSheetConstants.ROW,
        paddingTop: Platform.OS == StyleSheetConstants.IOS ? StyleSheetConstants.TWENTY : StyleSheetConstants.TWENTY,
        paddingBottom: Platform.OS == StyleSheetConstants.IOS ? StyleSheetConstants.TWENTY : StyleSheetConstants.TWENTY,
        paddingHorizontal: StyleSheetConstants.TWENTY,
        backgroundColor: '#0A8E5B',
        width: StyleSheetConstants.ONE_HUNDRED_PERCENT
    },
    notificationTitle: {
        color: StyleSheetConstants.BLACK,
        fontWeight: StyleSheetConstants.BOLD,
        fontSize: StyleSheetConstants.TWENTY,
        paddingBottom: StyleSheetConstants.EIGHT
    },
});

export default styles;
