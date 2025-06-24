import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'E-Learning Platform',
  description: 'تعلم أي شيء في أي وقت',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">E-Learn</h1>
          <div className="space-x-4">
            <a href="/auth/login" className="text-gray-700 hover:text-blue-600">Login</a>
            <a href="/auth/register" className="text-gray-700 hover:text-blue-600">Register</a>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
