import React from "react";
import axios from '../../services/axios';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        };
    }

    async componentDidMount() {
        await axios.get('users/5', { data: { tt: 5} });
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...rest }) => (
                        <CollectionPreview key={id} {...rest} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
