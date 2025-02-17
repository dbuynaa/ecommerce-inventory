import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CustomTooltip } from "@/components/custom-tooltip"
import { Icons } from "@/components/icons"
import { ItemsDropdown } from "@/components/inventory/dropdowns/items-dropdown"
import { ItemsSelect } from "@/components/inventory/selects/items-select"
import { ViewToggle } from "@/components/inventory/view-toggle"
import { InstantHelperMenu } from "@/components/nav/app/menus/instant-helper-menu"

import type { JSX } from "react";

export function ItemsSubheader(): JSX.Element {
  return (
    <div className="flex h-20 w-full items-center justify-between border-b bg-tertiary px-5">
      <ItemsSelect />

      <div className="flex items-center gap-2">
        <CustomTooltip text="Add New Item">
          <Link
            href="/app/inventory/items/new-item"
            className={cn(buttonVariants(), "gap-1")}
            aria-label="Add new item"
          >
            <Icons.plus aria-hidden="true" className="size-4" />
            <span>New</span>
          </Link>
        </CustomTooltip>

        <ViewToggle />
        <ItemsDropdown />
        <InstantHelperMenu />
      </div>
    </div>
  )
}
