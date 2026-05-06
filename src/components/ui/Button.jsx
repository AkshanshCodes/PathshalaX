import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-navy text-white shadow-soft hover:bg-[#2d3440] active:bg-navy',
  secondary:
    'bg-surface text-ink shadow-sm ring-1 ring-palette-blue hover:bg-palette-blue/35 hover:ring-palette-blue',
  ghost: 'text-ink hover:bg-palette-blue/35',
}

function Button({ children, className = '', icon: Icon, to, variant = 'primary', ...props }) {
  const classes = [
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60',
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
