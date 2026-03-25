import { useState, useEffect, useRef } from 'react'

function ScrollReveal({ children, className = '', style = {}, threshold = 0.2 }) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: threshold
            }
        )
        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold])
    const animationStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        ...style
    }
    return (
        <div ref={ref} className={className} style={animationStyle}>
            {children}
        </div>
    )
}

export default ScrollReveal