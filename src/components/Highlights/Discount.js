import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:50
    }


    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=> {
            this.percentage()
        },30)
    }
    render() {
        return (
            <div className= "center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                        onReveal={()=> this.percentage()}>
                         <div className= "discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets before 20th JUNE</h3>
                            <p>You get the best discount you could imagine. What are you waiting for, come Home.</p>
                            <MyButton 
                                text="Purchase tickets"
                                bck="#ffa880"
                                color="#ffffff"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>
                    
                </div>
            </div>
        );
    }
}

export default Discount;