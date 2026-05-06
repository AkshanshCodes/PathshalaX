function Card({ children, className = '' }) {
  return (
    <article className={`card-surface rounded-lg p-5 sm:p-6 ${className}`}>
      {children}
    </article>
  )
}

export default Card
