import { I18n } from 'react-i18next';
import React, { Component } from 'react';

import './css/Products.css';

// Import a pre-configured instance of i18next
import i18n from '../../i18n';

class MainPicture extends Component {
    render() {
        return (
        <I18n>
            {
            (t, { i18n }) => (
                <div>
                    something
                </div>
            )
            }
        </I18n>
        );
    }
}

export default MainPicture;
