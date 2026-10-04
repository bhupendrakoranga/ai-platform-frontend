import type { UseFormRegisterReturn } from 'react-hook-form'

type AuthFieldProps = {
  autoComplete: string
  error?: string
  id: string
  label: string
  placeholder: string
  registration: UseFormRegisterReturn
  type: string
}

function AuthField({
  autoComplete,
  error,
  id,
  label,
  placeholder,
  registration,
  type,
}: AuthFieldProps) {
  const errorId = `${id}-error`

  return (
    <div className="space-y-2 text-left">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...registration}
        className={`h-11 w-full rounded-md border bg-white px-3 text-[15px] text-zinc-950 outline-none transition placeholder:text-zinc-400 ${
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
            : 'border-zinc-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100'
        }`}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default AuthField
