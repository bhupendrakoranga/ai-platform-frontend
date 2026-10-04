import { Link } from 'react-router-dom'

type AuthSwitchLinkSpacing = 'default' | 'responsive'

type AuthSwitchLinkProps = {
  linkLabel: string
  prompt: string
  spacing?: AuthSwitchLinkSpacing
  to: string
}

const spacingClasses: Record<AuthSwitchLinkSpacing, string> = {
  default: 'mt-[100px]',
  responsive: 'mt-8 sm:mt-10 lg:mt-[clamp(40px,8vh,100px)]',
}

function AuthSwitchLink({ linkLabel, prompt, spacing = 'default', to }: AuthSwitchLinkProps) {
  return (
    <p className={`${spacingClasses[spacing]} text-center text-[15px] text-[#8d8d91]`}>
      {prompt}{' '}
      <Link to={to} className="font-medium text-[#8e2363] hover:text-[#6f174c]">
        {linkLabel}
      </Link>
    </p>
  )
}

export default AuthSwitchLink
