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

needs a description


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

needs a description


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


### useRoundRectGlow

```
import { useEffect } from 'react'

export const useRoundRectGlow = (wrapper: any, canvas: any, offsetX: number, offsetY: number, rectWidth: number, rectHeight: number, borderRadius: number, color: string, opacity: number) => {
  useEffect(() => {
    const draw = () => {
      const { width, height } = wrapper.current.getBoundingClientRect()
      const glow = canvas.current.getContext('2d')
      canvas.current.width = width
      canvas.current.height = height
      glow.fillStyle = color
      glow.globalAlpha = opacity

      const w = rectWidth * width
      const h = rectHeight * width
      const rad = borderRadius * width
      const x = (width / 2) - (w / 2) + (offsetX * width)
      const y = (height / 2) - (h / 2) + (offsetY * width)
      const r = x + w;
      const b = y + h;

      glow.beginPath();
      glow.moveTo(x + rad, y);
      glow.lineTo(r - rad, y);
      glow.quadraticCurveTo(r, y, r, y + rad);
      glow.lineTo(r, y + h - rad);
      glow.quadraticCurveTo(r, b, r - rad, b);
      glow.lineTo(x + rad, b);
      glow.quadraticCurveTo(x, b, x, b - rad);
      glow.lineTo(x, y + rad);
      glow.quadraticCurveTo(x, y, x + rad, y);
      glow.fill();
    }

    draw()
    window.addEventListener('resize', draw)
    
    return () => window.removeEventListener('resize', draw)
  })
}
```

needs a description