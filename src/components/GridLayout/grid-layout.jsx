import PropTypes from 'prop-types';

import './grid-layout.css';

export const GridLayout = ({ children }) => {

    return (
        <div className="grid-layout">
            {children}
        </div>
    );
};

GridLayout.propTypes = {
    children: PropTypes.node.isRequired
};