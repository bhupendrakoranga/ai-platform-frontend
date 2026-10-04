import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import AuthField from '../../components/auth/AuthField'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthLayout from '../../components/auth/AuthLayout'
import AuthSwitchLink from '../../components/auth/AuthSwitchLink'
import Button from '../../components/ui/Button'
import {
  resetPasswordSchema,
  type ResetPasswordFormValues,
} from '../../validations/auth.validation'

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onBlur',
  })

  const onSubmit = (values: ResetPasswordFormValues) => {
    void values
  }

  return (
    <AuthLayout>
      <AuthHeader
        title="Reset Password"
        subtitle="Create a new password for your account"
      />

      <form className="mt-20 space-y-4.5" noValidate onSubmit={handleSubmit(onSubmit)}>
        <AuthField
          id="reset-password"
          label="New Password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a new password"
          registration={register('password')}
          error={errors.password?.message}
        />

        <AuthField
          id="reset-confirm-password"
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm new password"
          registration={register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          loadingLabel="Resetting password..."
          size="lg"
          className="mt-2.5"
        >
          Reset Password
        </Button>
      </form>

      <AuthSwitchLink prompt="Remember password?" to="/login" linkLabel="Login" />
    </AuthLayout>
  )
}

export default ResetPasswordPage
