import { redirect } from "next/navigation"
import { auth } from "@/auth"

import type { JSX } from "react";

export default async function AppSalesInvoicesPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div>App Sales Invoices Page</div>
}
