import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Copy = ({codeRef}) => {
  const ref = useRef()

  const handleClick = () => {
  
    let range = document.createRange()
    range.selectNodeContents(codeRef.current)

    console.log(range)
    
    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  
    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  }

  return (
    <Span ref={ref} onClick={handleClick}>Copy</Span>
  )
}

export default Copy

const Span = styled.span`
  position: absolute;
  z-index: 2;
  right: 10px;
  top: 10px;
  margin: 0px;
  cursor: pointer;

  &:hover {
    color: white;
  }
` 