import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import AuthField from '../../components/auth/AuthField'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthSwitchLink from '../../components/auth/AuthSwitchLink'
import Button from '../../components/ui/Button'
import { loginSchema, type LoginFormValues } from '../../validations/auth.validation'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  })

  const onSubmit = (values: LoginFormValues) => {
    void values
  }

  return (
    <AuthLayout>
      <AuthHeader
        title="Login to your Account"
        subtitle="See what is going on with your business"
      />

      <form className="mt-20 space-y-4.5" noValidate onSubmit={handleSubmit(onSubmit)}>
        <AuthField
          id="login-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="mail@abc.com"
          registration={register('email')}
          error={errors.email?.message}
        />

        <AuthField
          id="login-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="************"
          registration={register('password')}
          error={errors.password?.message}
        />

        <div className="flex items-center justify-between pt-[2px] text-[12px]">
          <label className="inline-flex items-center gap-[8px] text-[#8a8a8e]">
            <input type="checkbox" className="size-[13px] accent-[#8e2363]" defaultChecked />
            Remember Me
          </label>
          <Link
            to="/forgot-password"
            className="font-medium text-[#8e2363] hover:text-[#6f174c]"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingLabel="Checking account..."
          size="lg"
          className="mt-2.5"
        >
          Login
        </Button>
      </form>

      <AuthSwitchLink prompt="Not Registered Yet?" to="/signup" linkLabel="Create an account" />
    </AuthLayout>
  )
}

export default LoginPage
