import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2" aria-label="Cruip">
      <h1 className='text-2xl font-semibold'>
        Quick<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>Notes</span> 📝
      </h1>
    </Link>
  )
}
