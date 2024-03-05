import { SessionProvider } from '../components/SessionProvider'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth"
import './globals.css'
import Login from '@/components/Login'
import Sidebar from "@/components/Sidebar"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}> 
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
            <div className='bg-[#202123] hidden md:block max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <Sidebar />
            </div>

            <div className='bg-[#343541] flex-1'>
                {children}
            </div>
        </div>)}
        </SessionProvider>
      </body>
    </html>
  )
}
