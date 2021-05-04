import React from 'react'


class Iris extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      isFollowing: true
    }
  }

  render(){
    return(
      <div>
        <svg>
          <radialGradient id="gradient1" gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">
            <stop offset= "38%" stop-color="#000000" stop-opacity="1" />
            <stop offset= "46%" stop-color="#073F80" stop-opacity="1" />
            <stop offset= "90%" stop-color="#8EC0DD" stop-opacity="1" />
            <stop offset="100%" stop-color="#2F3A46" stop-opacity="1" />
          </radialGradient>
          <g id="${id}_iris">
            <ellipse cx="60" cy="60" rx="30" ry="30" opacity="1" fill="url(#gradient1)" />
            <ellipse cx="50" cy="50" rx="7"  ry="7"  opacity="1" fill="#FFFFFF" fill-opacity="0.8"/>
          </g>
        </svg>
      </div>
    )
  }
}
export default Iris;