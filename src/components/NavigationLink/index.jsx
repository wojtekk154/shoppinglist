import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.css';

const NavigationLink = ({path, name, type}) => (
    <Link to={path} className={`link-href btn-${type}`}>
        {name}
    </Link>
);

NavigationLink.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

NavigationLink.defaultProps = {
    type: 'primary'
};

export {NavigationLink};