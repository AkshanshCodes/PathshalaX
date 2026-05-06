import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-sage-700 text-white hover:bg-sage-800 active:bg-sage-900 shadow-soft',
  secondary:
    'border border-sage-200 bg-white text-sage-800 hover:border-sage-300 hover:bg-sage-50',
  ghost: 'text-sage-800 hover:bg-sage-50',
}

function Button({ children, className = '', icon: Icon, to, variant = 'primary', ...props }) {
  const classes = [
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    className,
  ].join(' ')

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="size-5 shrink-0" /> : null}
      <span>{children}</span>
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  )
}

export default Button
