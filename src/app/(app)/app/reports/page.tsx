import { redirect } from "next/navigation"
import { auth } from "@/auth"

import type { JSX } from "react";

export default async function AppReportsPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return <div className="p-5">TODO: App Reports Page</div>
}
