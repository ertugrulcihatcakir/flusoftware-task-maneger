import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './Components/Sidebar/Sidebar'
import GlobalStylesProvider from './providers/GlobalStyleProvider'
import ContextProvider from './providers/ContextProvider'
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider, auth } from '@clerk/nextjs'


const inter = Inter({ 
  subsets: ['latin'],
  weight: ["400","500","600","700","800"] 
});

export const metadata: Metadata = {
  title: 'fluSoftware Task Maneger',
  description: 'Task Maneger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
            crossOrigin="anonymous" 
            referrerPolicy="no-referrer" 
          />
        </head>
        <body className={inter.className}>
          <NextTopLoader
            height={2}
            color='turquoise'
            easing='cubic-bezier(.27,.16,.65,.95)'
          />
          <ContextProvider>
            <GlobalStylesProvider>
              {userId && <Sidebar/>}
              <div className="w-full">{children}</div>
            </GlobalStylesProvider>
          </ContextProvider>      
        </body>
      </html>
    </ClerkProvider>
  )
}