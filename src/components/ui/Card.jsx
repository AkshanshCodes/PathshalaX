function Card({ children, className = '' }) {
  return (
    <article
      className={`card-surface rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgb(34_40_49_/_0.11)] sm:p-6 ${className}`}
    >
      {children}
    </article>
  )
}

export default Card
