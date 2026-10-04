import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import AuthField from '../../components/auth/AuthField'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthSwitchLink from '../../components/auth/AuthSwitchLink'
import Button from '../../components/ui/Button'
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from '../../validations/auth.validation'

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(forgotPasswordSchema),
    mode: 'onBlur',
  })

  const onSubmit = (values: ForgotPasswordFormValues) => {
    void values
  }

  return (
    <AuthLayout>
      <AuthHeader
        title="Forgot Password?"
        subtitle="Enter your email and we will help you reset your password"
      />

      <form className="mt-20 space-y-4.5" noValidate onSubmit={handleSubmit(onSubmit)}>
        <AuthField
          id="forgot-password-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="mail@abc.com"
          registration={register('email')}
          error={errors.email?.message}
        />

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingLabel="Sending reset link..."
          size="lg"
          className="mt-2.5"
        >
          Send Reset Link
        </Button>
      </form>

      <AuthSwitchLink prompt="Remember password?" to="/login" linkLabel="Login" />
    </AuthLayout>
  )
}

export default ForgotPasswordPage
