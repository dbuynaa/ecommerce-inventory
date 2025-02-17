import * as React from "react"

import type { JSX } from "react";

interface AppSalesLayoutProps {
  children: React.ReactNode
}

export default function AppSalesLayout({
  children,
}: AppSalesLayoutProps): JSX.Element {
  return <div className="p-5">{children}</div>
}
