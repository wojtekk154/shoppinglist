import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

import './index.css';

export const Header = ({brandName, handleDrawer}) => (
    <React.Fragment>
        <AppBar
            title={brandName}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={handleDrawer}
        />
    </React.Fragment>
);

Header.propTypes = {
    brandName: PropTypes.string.isRequired,
    handleDrawer: PropTypes.func.isRequired
};