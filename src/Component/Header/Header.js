import React from 'react'
import './index.css'

export default class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            clicked: false,
        }
    }

    render(){
        console.log(this.state.clicked);
        return (
            <div className='block' id='mainCover'>
                <header>
                    <div id='logo'></div>
                    <div className='inspiration white-theme title-spacing'>Make Your Dreams Come True</div>
                    <div className='menu-container'>menu will go here</div>
                </header>
            </div>
        )
    }
}