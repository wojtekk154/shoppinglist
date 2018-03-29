import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

import './index.css';

export function Header({brandName, handleDrawer}) {
    return (
        <React.Fragment>
            <AppBar
                title={brandName}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onRightIconButtonTouchTap={handleDrawer}
                onLeftIconButtonClick ={handleDrawer}
            />
        </React.Fragment>
    )
}

Header.propTypes = {
    brandName: PropTypes.string.isRequired,
    handleDrawer: PropTypes.func.isRequired
};