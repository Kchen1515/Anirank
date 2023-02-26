import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from "@clerk/nextjs/app-beta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />

        <body>
          <div>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
