import { useEffect, useRef } from 'react'

const Cursor = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current

      if (!container) return

      const { left, top, width, height } = container.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const offsetX = (e.clientX - centerX) / 20 // Reducir el efecto
      const offsetY = (e.clientY - centerY) / 20

      container.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div></div>
}

export default Cursor
