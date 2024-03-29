import Link from 'next/link'
import SignInForm from '@/components/ui/SIgnInForm'

export const metadata = {
  title: 'Sign In - QuickNotes',
  description: 'Sign in to your QuickNotes account and start managing your notes effortlessly.',
  keywords: ['sign in', 'QuickNotes', 'notes app', 'authentication'],
  author: 'Mutasim',
}

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Ready to get started? <br /> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>Sign in</span> below</h1>
          </div>
          <div className="max-w-sm mx-auto">
            <SignInForm />
            <div className="flex items-center my-6">
              <div className="border-t border-gray-300 grow" aria-hidden="true"></div>
              <div className="border-t border-gray-300 grow" aria-hidden="true"></div>
            </div>
            <div className="text-gray-600 text-center mt-6">
              Don't you have an account? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
