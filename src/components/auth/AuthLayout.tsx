import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-white text-[#555559]">
      <div className="grid min-h-screen w-full bg-white lg:grid-cols-[57.8%_42.2%]">
        <section className="relative hidden min-h-screen overflow-hidden bg-[#fde7c8] lg:block">
          <img
            src="/images/login-orbit-planet.svg"
            alt=""
            className="absolute top-0 left-0 z-20 h-[22%] w-auto -translate-x-[1%] -translate-y-[1%] object-contain"
          />
          <img
            src="/images/login-corner-gradient.svg"
            alt=""
            className="absolute right-[-5.4%] bottom-0 z-20 h-[11.9%] w-auto object-contain"
          />

          <img
            src="/images/login-illustration.svg"
            alt=""
            className="absolute top-[5.7%] left-1/2 z-10 h-[73.8%] w-auto -translate-x-1/2 object-contain"
          />

          <div className="absolute right-0 bottom-[7.7%] left-0 z-30 text-center">
            <h2 className="text-[26px] leading-none font-bold text-[#86165d]">
              Turn your ideas into reality.
            </h2>
            <p className="mt-3 text-[16px] font-medium text-[#86165d]">
              Start for free and get attractive offers from the community
            </p>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center bg-white px-4 py-6 sm:px-6 sm:py-10 lg:items-start lg:justify-start lg:px-0 lg:py-0">
          <div className="w-full max-w-[380px] sm:max-w-[400px] lg:mt-[clamp(48px,15.8vh,150px)] lg:ml-[20.8%] lg:w-[57%] lg:max-w-none">
            <img
              src="/images/login-logo.svg"
              alt=""
              className="mx-auto mb-6 size-[52px] sm:mb-8 sm:size-[58px]"
            />
            {children}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AuthLayout
