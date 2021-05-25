// obviously react isn't imported to this project, we can figure out how to make this an npm project later
//  for now, maybe just copy the code over to your project
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
