import React from "react";
import { withRouter } from 'react-router-dom';

import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, id, history, match }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${id}`)}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, i) => i < 4).map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);
