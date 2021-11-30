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