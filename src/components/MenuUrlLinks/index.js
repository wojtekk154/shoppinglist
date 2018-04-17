import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';

import Divider from 'material-ui/Divider';
import {List} from 'material-ui/List';

export const MenuUrlLinks = ({linkList, handleDrawer}) => (
    <React.Fragment>
        <Divider inset={true}/>
        <List>
            {linkList.map(v => (
                <MenuItem key={v.path} onClick={handleDrawer}>
                    <Link to={v.path}>{v.name}</Link>
                </MenuItem>))
            }
        </List>
    </React.Fragment>
);

MenuUrlLinks.propTypes = {
    linkList: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    handleDrawer: PropTypes.func.isRequired
};