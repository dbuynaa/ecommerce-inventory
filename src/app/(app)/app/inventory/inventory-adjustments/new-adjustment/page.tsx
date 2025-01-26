import { redirect } from "next/navigation"
import { auth } from "@/auth"

import type { JSX } from "react";

export default async function AppInventoryInventoryAdjustmentsNewAdjustmentPage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div className="p-5">
      App Inventory InventoryAdjustments NewAdjustment Page
    </div>
  )
}
