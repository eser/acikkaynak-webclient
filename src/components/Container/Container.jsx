import './Container.css'

function Container ({ children, className, type, ...props }) {
  return (
    <div className={`container${type === 'fluid' ? '-fluid' : ''} ${className || ''}`} {...props}>{children}</div>
  )
}

export { Container as default }