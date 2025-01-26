import { redirect } from "next/navigation"
import { auth } from "@/auth"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddWarehouseForm } from "@/components/forms/warehouses/add-warehouse-form"
import { SubSubHeader } from "@/components/nav/subsubheader"

import type { JSX } from "react";

export default async function AppWarehousesNewWarehousePage(): Promise<JSX.Element> {
  const session = await auth()
  if (!session) redirect("/signin")

  return (
    <div>
      <SubSubHeader />
      <div className="p-5">
        <Card className="max-w-5xl rounded-md bg-tertiary">
          <CardHeader className="px-5 pt-5">
            <CardTitle className="text-2xl">New Warehouse</CardTitle>
            <CardDescription className="text-base">
              Add new warehouse
            </CardDescription>
          </CardHeader>
          <CardContent className="px-5 pt-2">
            <AddWarehouseForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
