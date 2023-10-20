// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    className="box box--small"
    style={{background: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{background: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{background: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

// Extra 1:
function Box({style, className = '', ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox1 = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)

const mediumBox1 = (
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)

const largeBox1 = (
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

const sizelessBox = <Box>sizeless box</Box>

// Extra 2:
function Box2({style, size, ...otherProps}) {
  return (
    <div
      className={size ? `box box--${size}` : `box`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox2 = (
  <Box2 size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box2>
)

const mediumBox2 = (
  <Box2 size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box2>
)

const largeBox2 = (
  <Box2 size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box2>
)

const sizelessBox2 = <Box2>sizeless box</Box2>

function App() {
  return (
    <div>
      {smallBox2}
      {mediumBox2}
      {largeBox2}
      {sizelessBox2}
    </div>
  )
}

export default App
