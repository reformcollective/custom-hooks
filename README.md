# Hooks

### useEllipseGlow

```
import { useEffect } from 'react'

export const useEllipseGlow = (wrapper: any, canvas: any, posX: number, posY: number, radX: number, radY: number, rotation: number, color: string) => {
  useEffect(() => {
    const draw = () => {
      const { width, height } = wrapper.current.getBoundingClientRect()
      const glow = canvas.current.getContext('2d')
      canvas.current.width = width
      canvas.current.height = height
      glow.fillStyle = color
      glow.beginPath()
      glow.ellipse(
        width * posX,
        width * posY,
        width * radX,
        width * radY,
        rotation,
        0,
        2 * Math.PI
      )
      glow.fill()
    }

    draw()
    window.addEventListener('resize', () => draw())
    return () => window.removeEventListener('resize', () => draw())
  })
}
```

### useMedia

```
import { desktop, tablet, mobile } from 'styles/media'

export const useMedia = (fw: any, d: any, t: any, m: any) => {

  if (window.innerWidth > desktop) {
    return fw
  } else if (window.innerWidth > tablet) {
    return d
  } else if (window.innerWidth > mobile) {
    return t
  } else {
    return m
  }
}
```

### usePrevious

```
import { useRef, useEffect } from 'react'

export const usePrevious = (value: any) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
```

used to capture the previous value of a variable.  Handy for comparison with the new value within a useEffect.
