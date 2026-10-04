import { NavLink, useNavigate } from 'react-router-dom'
import { navigationItems, workspaceStats } from '../../constants/navigation'

function Sidebar() {
  const navigate = useNavigate()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'flex h-10 items-center rounded-md px-3 text-sm font-semibold transition',
      isActive
        ? 'bg-[#123c35] text-white'
        : 'text-[#53605d] hover:bg-[#edf4f1] hover:text-[#183f38]',
    ].join(' ')

  const handleLogout = () => {
    navigate('/login', { replace: true })
  }

  return (
    <aside className="hidden w-[264px] shrink-0 border-r border-[#dfe7e3] bg-white px-4 py-5 lg:flex lg:flex-col">
      <div className="flex h-11 items-center gap-3 px-2">
        <div className="flex size-10 items-center justify-center rounded-md bg-[#123c35] text-sm font-bold text-white">
          NX
        </div>
        <div>
          <p className="text-sm font-bold text-[#18201e]">Nexora AI</p>
          <p className="text-xs font-medium text-[#7a8582]">Workspace</p>
        </div>
      </div>

      <button className="mt-7 flex h-11 w-full items-center justify-center rounded-md bg-[#8e2363] px-4 text-sm font-bold text-white transition hover:bg-[#7a1d54]">
        New chat
      </button>

      <nav className="mt-6 space-y-1">
        {navigationItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-7 rounded-md border border-[#e1e9e5] bg-[#f8fbfa] p-3">
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7a8582]">
          Workspace
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {workspaceStats.map((stat) => (
            <div key={stat.label} className="rounded-md bg-white p-3">
              <p className="text-lg font-bold text-[#123c35]">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-[#7a8582]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto rounded-md border border-[#e1e9e5] bg-white p-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-[#e5f4ef] text-sm font-bold text-[#123c35]">
            BK
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#18201e]">Bhupendra</p>
            <p className="truncate text-xs font-medium text-[#7a8582]">Free plan</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-3 h-9 w-full rounded-md border border-[#dfe7e3] bg-white text-sm font-semibold text-[#53605d] transition hover:bg-[#f4f7f5]"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
