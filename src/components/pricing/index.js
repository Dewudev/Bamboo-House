import React, { Component } from 'react';

import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [50, 100, 200],
        positions: ['Root', 'Branch', 'Star'],
        desc: [
            'Ground family, Playlisting, Free Drinks, Photo Booth.',
            'Up a level, Playlisting, Free Drinks, Photo Booth, Free Jollof',
            'Top Level, Sky view, DJ sets, Free Drinks, Networking, Photo Booth, Free Jollof, Playlisting, Custom Lbosar tee shirt' 
        ],
        linkto:['http://sales/root', 'http://sales/branch', 'http://sales/star'],
        delay: [700,0,700]
    }

    showBoxes = () => (
         this.state.prices.map((box, i) =>(
             <Zoom delay={this.state.delay[i]} key={i}>
                 <div className="pricing_item">
                     <div className="pricing_inner_wrapper">
                         <div className="pricing_title">
                             <span>${this.state.prices[i]}</span>
                             <span>{this.state.positions[i]}</span>
                         </div>
                         <div className="pricing_description">
                             {this.state.desc[i]}
                         </div>
                         <div className="pricing_buttons">
                             <MyButton
                                 text="Purchase"
                                 bck="#ffa800"
                                 color="#ffffff"
                                 link={this.state.linkto[i]}
                             />
                         </div>
                     </div>
                 </div>
             </Zoom>

         ))
    )

    render() {
        return (
            <div className='bck_black'>
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;