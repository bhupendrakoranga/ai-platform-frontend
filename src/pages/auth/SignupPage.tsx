import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import AuthField from '../../components/auth/AuthField'
import AuthHeader from '../../components/auth/AuthHeader'
import { signupSchema, type SignupFormValues } from '../../validations/auth.validation'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthSwitchLink from '../../components/auth/AuthSwitchLink'
import Button from '../../components/ui/Button'

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
  })

  const onSubmit = (values: SignupFormValues) => {
    void values
  }

  return (
    <AuthLayout>
      <AuthHeader
        title="Create your Account"
        subtitle="Start managing your business today"
      />

      <form
        className="mt-8 space-y-4 sm:mt-12 sm:space-y-[18px] lg:mt-16 xl:mt-20"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <AuthField
            id="signup-first-name"
            label="First Name"
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            registration={register('firstName')}
            error={errors.firstName?.message}
          />

          <AuthField
            id="signup-last-name"
            label="Last Name"
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            registration={register('lastName')}
            error={errors.lastName?.message}
          />
        </div>

        <AuthField
          id="signup-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          registration={register('email')}
          error={errors.email?.message}
        />

        <AuthField
          id="signup-password"
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          registration={register('password')}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingLabel="Creating workspace..."
        >
          Sign up
        </Button>
      </form>

      <AuthSwitchLink
        prompt="Already Registered?"
        to="/login"
        linkLabel="Login"
        spacing="responsive"
      />
    </AuthLayout>
  )
}

export default SignupPage
