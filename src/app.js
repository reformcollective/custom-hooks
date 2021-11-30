import React, { useRef } from 'react'
import styled from 'styled-components'
import Copy from './components/Copy'

const App = () => {

  const codeRef = useRef(null)

  const code = `
    import { useRef, useEffect } from 'react'
            
    export const usePrevious = (value: any) => {
      const ref = useRef(value);

      useEffect(() => {
        ref.current = value;
      });

      return ref.current;
    };
  `

  return (
    <>
    <Title>usePrevious</Title>
    <Wrapper>
      <Copy codeRef={codeRef}/>
      <CodeBlock ref={codeRef}>
        {code}
      </CodeBlock>
    </Wrapper>
    <P>used for this and this and this blah blah blah</P>
    </>
  )
}

export default App

const Wrapper = styled.div`
  position: relative;

`

const CodeBlock = styled.pre`
  background-color: #808B96;
  border-radius: 5px;
  padding: 10px;
`

const Title = styled.h1`

`

const P = styled.p`
  
`