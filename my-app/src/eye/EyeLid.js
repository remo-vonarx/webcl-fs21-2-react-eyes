import React from 'react'

class EyeLid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: this.props.open}
    }

    render() {
        const open = this.state.isOpen
        return(
            <svg>
                <filter id="shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset       dx="0" dy="8" />
                    <feColorMatrix  type="matrix"
                                    values="0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 .5 0"/>
                    <feBlend        in="SourceGraphic" mode="normal"/>
                </filter>
            if({open}){
                <g id="${id}_openLids">
                    <path d="M0 60 A60,60 0 0,1 120,60 A60,30 0 0,0 0,60 Z" opacity="1" fill="#FDDC99" fill-opacity="1" filter="url(#shadow)" />
                    <path d="M0 60 A60,60 0 0,0 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill="#F4CB76" fill-opacity="1" />
                </g>
            }
            else {
                <g id="${id}_closeLid">
                    <path d="M0 60 A60,60 0 0,1 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill="#FDDC99" fill-opacity="1" />
                </g>
            }
            </svg>
        )
    }
}
export default EyeLid;