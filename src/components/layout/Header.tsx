import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../constants/navigation'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-[#dfe7e3] bg-white/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex min-h-12 items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7a8582]">
            AI Workspace
          </p>
          <h1 className="truncate text-lg font-bold text-[#18201e] sm:text-xl">Dashboard</h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden h-10 rounded-md border border-[#dfe7e3] bg-white px-3 text-sm font-semibold text-[#53605d] transition hover:bg-[#f4f7f5] sm:inline-flex sm:items-center">
            Upgrade
          </button>
          <button className="flex h-10 items-center gap-2 rounded-md border border-[#dfe7e3] bg-white px-2.5 text-sm font-semibold text-[#18201e] transition hover:bg-[#f4f7f5]">
            <span className="flex size-7 items-center justify-center rounded-md bg-[#123c35] text-xs font-bold text-white">
              BK
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'flex h-9 shrink-0 items-center rounded-md px-3 text-sm font-semibold transition',
                isActive
                  ? 'bg-[#123c35] text-white'
                  : 'bg-[#edf4f1] text-[#53605d] hover:text-[#183f38]',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
