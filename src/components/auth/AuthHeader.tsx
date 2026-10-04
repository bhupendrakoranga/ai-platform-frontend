type AuthHeaderProps = {
  subtitle: string
  title: string
}

function AuthHeader({ subtitle, title }: AuthHeaderProps) {
  return (
    <div className="text-left">
      <h1 className="text-2xl leading-tight font-bold text-[#535356] sm:text-[28px] sm:leading-none">
        {title}
      </h1>
      <p className="mt-2 text-xs font-medium text-[#77777b] sm:mt-3 sm:text-[11px]">
        {subtitle}
      </p>
    </div>
  )
}

export default AuthHeader
