import Link from 'next/link'
import { LoginForm } from '@/components/forms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UniLink | Login',
  description: 'UniLink login page',
}

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="fixed h-32 w-auto top-[8.5rem] right-[41rem] rotate-12"
          src="/logo.png"
          alt="UniLink"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link
            href="/nl/auth/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
