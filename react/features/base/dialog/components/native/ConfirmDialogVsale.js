import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Icon, IconHangup } from '../../../../base/icons';
import { translate } from '../../../i18n';
import styles from '../../../label/components/styles';
import { connect } from '../../../redux';
import { StyleType } from '../../../styles';
import { _abstractMapStateToProps } from '../../functions';

import { type Props as BaseProps } from './BaseDialogVsale';
import BaseSubmitDialogVsale from './BaseSubmitDialogVsale';
import { brandedDialog } from './styles';

type Props = BaseProps & {

    /**
     * The color-schemed stylesheet of the feature.
     */
    _dialogStyles: StyleType,

    /**
     * Untranslated i18n key of the content to be displayed.
     *
     * NOTE: This dialog also adds support to Object type keys that will be
     * translated using the provided params. See i18n function
     * {@code translate(string, Object)} for more details.
     */
    contentKey: string | { key: string, params: Object},

    t: Function
}

/**
 * Implements a confirm dialog component.
 */
class ConfirmDialogVsale extends BaseSubmitDialogVsale<Props, *> {
    /**
     * Returns the title key of the submit button.
     *
     * @returns {string}
     */

    _onCancel: () => void;

    /**
     * Renders the 'No' button.
     *
     * NOTE: The {@code ConfirmDialog} is the only dialog right now that
     * renders 2 buttons, mainly for clarity.
     *
     * @inheritdoc
     */
    _renderAdditionalButtons() {
        return (
            <TouchableOpacity
                onPress = { this._onCancel }
                style = { brandedDialog.terminateWaitingCallButtonVSale }>
                <View style = { brandedDialog.terminateWaitingCallButtonWrapperVSale }>
                    <Icon src = { IconHangup } />
                </View>
            </TouchableOpacity>
        );
    }

    /**
     * Implements {@code BaseSubmitDialog._renderSubmittable}.
     *
     * @inheritdoc
     */
    _renderSubmittable() {
        if (this.props.children) {
            return this.props.children;
        }

        const { _dialogStyles } = this.props;

        return (
            <View style = { brandedDialog.waitingMsgVSale }>
                <Text style = { _dialogStyles.text }>
                    Παρακαλώ περιμένετε. Σύντομα θα συνδεθεί η/ο υπάλληλος του καταστήματος.
                </Text>
                <Text style = { _dialogStyles.text }>
                    Please wait. Soon a salesperson will be joining the call with you.
                </Text>
            </View>
        );
    }

    _renderHTML: string => Object | string
}

export default translate(connect(_abstractMapStateToProps)(ConfirmDialogVsale));
