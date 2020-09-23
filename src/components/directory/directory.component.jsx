import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/7aac39a2a0eb4cb4915ba887014c43b8_9366/Superlite_Hat_Black_CJ0445_01_standard.jpg',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://www.zhik.com/pub/media/catalog/product/cache/341e1a77b5a7fed8b5f216a250b8844c/z/-/z-cru-mens-jacket-flamered-front.jpg',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/368783/01/sv01/fnd/PNA/fmt/png/RS-Fast-Sneakers',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://www.cdc.gov/ncbddd/hemophilia/features/images/women-posing-skyline-700px.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.insider.com/54fdc12decad042920ceb0c8?width=800&format=jpeg',
                    size: 'large',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default Directory;



