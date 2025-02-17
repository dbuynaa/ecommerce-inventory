import * as React from "react"
import type { JSX } from "react"
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

import { Header } from "@/components/nav/app/header"
import { Sidebar } from "@/components/nav/app/sidebar"

interface AppLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({
  children,
}: AppLayoutProps): Promise<JSX.Element> {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-full overflow-y-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
