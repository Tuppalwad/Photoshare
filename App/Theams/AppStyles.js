import { StyleSheet } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const AppStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.whitish,
      width: '100%'
    },
    inputControl: {
      flex: 0.9,
      fontSize: Fonts.size.normal,
      margin: Metrics.baseMargin,
      borderBottomColor: Colors.fire,
      borderBottomWidth: 0.5
    },
    inputError: {
      color: Colors.fire,
      marginLeft: Metrics.doubleBaseMargin
    },
    buttonWrapper: {
      flex: 0.7,
      margin: Metrics.baseMargin
    },
    miniForm: {
      flex: 0.3,
      flexDirection: 'row'
    },
    contactIcon: {
      flex: 0.1,
      marginTop: 1.5 * Metrics.baseMargin,
      marginRight: Metrics.baseMargin
    },
    separator: {
      height: Metrics.horizontalLineHeight,
      backgroundColor: Colors.hairline,
      opacity: 0.5,
    },
    rowAccount: {
      flex: 1,
      flexDirection: 'row',
      padding: Metrics.baseMargin
    },
    amount: {
      color: Colors.black,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlignVertical: 'center',
      textAlign: 'right',
      marginRight: Metrics.doubleBaseMargin
    },
    amoutkhatbook: {
      flex: 0.3,
      color: Colors.black,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlignVertical: 'center',
      textAlign: 'right',
      marginRight: Metrics.doubleBaseMargin
    },
    amountCancel: {
      color: Colors.hairline,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlignVertical: 'center',
      textAlign: 'right',
      marginRight: Metrics.doubleBaseMargin,
      textDecorationLine: 'line-through',
      textDecorationStyle: "solid",
      textDecorationColor: Colors.primary
    }, 
    amountCancelKhatabook: {
      flex:1,
      color: Colors.hairline,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlignVertical: 'center',
      textAlign: 'right',
      marginRight: Metrics.doubleBaseMargin,
      textDecorationLine: 'line-through',
      textDecorationStyle: "solid",
      textDecorationColor: Colors.primary
    },
    account: {
      flex: 0.7,
      // marginLeft: Metrics.doubleBaseMargin,
      color: Colors.black,
      fontSize: Fonts.size.medium,
      fontWeight: 'bold'
    },
    accountCancel: {
      flex: 0.7,
      // marginLeft: Metrics.doubleBaseMargin,
      color: Colors.hairline,
      fontSize: Fonts.size.medium,
      fontWeight: 'bold',
      textDecorationLine: 'line-through',
      textDecorationStyle: "solid",
      textDecorationColor: Colors.primary
    },
    accListWrapper: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: Metrics.baseMargin
    },
    balance: {
      backgroundColor: Colors.peach,
      padding: Metrics.baseMargin,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subrow: {
      flex: 0.74,
      flexDirection: 'column',
    },
    detail: {
      // marginLeft: Metrics.baseMargin / 2,
      color: Colors.black,
      fontSize: Fonts.size.medium,
      justifyContent: 'flex-start',
      
    },
    detailCancel: {
      // marginLeft: Metrics.baseMargin / 2,
      color: Colors.hairline,
      fontSize: Fonts.size.medium,
      textDecorationLine: 'line-through',
      textDecorationStyle: "solid",
      textDecorationColor: Colors.primary
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      padding: Metrics.baseMargin / 2
    },
    txnAmount: {
      color: Colors.charcoal,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlign: 'right',
      textAlignVertical: 'center'
    },
    txnAmountCancel: {
      color: Colors.hairline,
      fontSize: Fonts.size.small,
      fontStyle: 'italic',
      textAlign: 'right',
      textAlignVertical: 'center',
      textDecorationLine: 'line-through',
      textDecorationStyle: "solid",
      textDecorationColor: Colors.primary
    },
    attach: {
      width: Metrics.images.placeholder,
      height: Metrics.images.placeholder,
      marginLeft: Metrics.smallMargin,
      borderWidth: Metrics.horizontalLineHeight,
      borderColor: Colors.border,
      resizeMode: 'stretch'
    },
    dateRow: {
      fontSize: Fonts.size.small,
      color: Colors.charcoal,
      textAlign: 'right',
      marginRight: Metrics.baseMargin
    },
    dateRowCancel: {
      fontSize: Fonts.size.small,
      color: Colors.hairline,
      textAlign: 'right',
      marginRight: Metrics.baseMargin,
      textDecorationLine: 'line-through',
      textDecorationStyle: "solid",
      textDecorationColor: Colors.primary
    }
});

export default AppStyle;
