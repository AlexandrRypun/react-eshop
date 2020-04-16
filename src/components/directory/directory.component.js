import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...rest}, i) => {
                const large = (i - 3) % 5 === 0 || (i - 4) % 5 === 0;
                return (
                    <MenuItem key={id} size={large ? 'large' : ''} {...rest} />
                );
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
