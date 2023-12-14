import { type AppSidebarNavItem } from "@/types"

export const sidebarItems = [
  {
    title: "Home",
    href: "/app/home/dashboard",
    icon: "home",
    subitems: [
      {
        title: "Dashboard",
        href: "/app/home/dashboard",
      },
      {
        title: "Getting Started",
        href: "/app/home/getting-started",
      },
      {
        title: "Recent Updates",
        href: "/app/home/updates",
      },
      {
        title: "Announcements",
        href: "/app/home/announcements",
      },
    ],
  },
  {
    title: "Inventory",
    href: "/app/inventory",
    icon: "inventory",
    subitems: [
      {
        title: "Items",
        href: "/app/inventory/items",
        hrefPlus: "/app/inventory/items/new-item",
      },
      {
        title: "Item Groups",
        href: "/app/inventory/item-groups",
        hrefPlus: "/app/inventory/item-groups/new-group",
      },
      {
        title: "Inventory Adjustments",
        href: "/app/inventory/inventory-adjustments",
        hrefPlus: "/app/inventory/inventory-adjustments/new-adjustment",
      },
    ],
  },
  {
    title: "Sales",
    href: "/app/sales",
    icon: "shoppingCart",
    subitems: [
      {
        title: "Customers",
        href: "/app/sales/customers",
        hrefPlus: "/app/sales/customers/new-customer",
      },
      {
        title: "Sales Orders",
        href: "/app/sales/sales-orders",
        hrefPlus: "/app/sales/sales-orders/new-order",
      },
      {
        title: "Packages",
        href: "/app/sales/packages",
        hrefPlus: "/app/sales/packages/new-package",
      },
      {
        title: "Shipments",
        href: "/app/sales/shipments",
        hrefPlus: "/app/sales/shipments/new-shipment",
      },
      {
        title: "Invoices",
        href: "/app/sales/invoices",
        hrefPlus: "/app/sales/invoices/new-invoice",
      },
      {
        title: "Sales Receipts",
        href: "/app/sales/sales-receipts",
        hrefPlus: "/app/sales/sales-receipts/new-receipt",
      },
      {
        title: "Payments Received",
        href: "/app/sales/payments-received",
        hrefPlus: "/app/sales/payments-received/record-payment",
      },
      {
        title: "Sales Returns",
        href: "/app/sales/sales-returns",
      },
      {
        title: "Credit Notes",
        href: "/app/sales/credit-notes",
        hrefPlus: "/app/sales/credit-notes/new-note",
      },
    ],
  },
  {
    title: "Purchases",
    href: "/app/purchases",
    icon: "shoppingBasket",
    subitems: [
      {
        title: "Vendors",
        href: "/app/purchases/vendors",
        hrefPlus: "/app/purchases/vendors/new-vendor",
      },
      {
        title: "Expenses",
        href: "/app/purchases/expenses",
        hrefPlus: "/app/purchases/expenses/new-expense",
      },
      {
        title: "Purchase Orders",
        href: "/app/purchases/purchase-orders",
        hrefPlus: "/app/purchases/purchase-orders/new-order",
      },
      {
        title: "Purchase Receives",
        href: "/app/purchases/purchase-receives",
        hrefPlus: "/app/purchases/purchase-receives/new-receive",
      },
      {
        title: "Bills",
        href: "/app/purchases/bills",
        hrefPlus: "/app/purchases/bills/new-bill",
      },
      {
        title: "Payments Made",
        href: "/app/purchases/payments-made",
        hrefPlus: "/app/purchases/payments-made/record-payment",
      },
      {
        title: "Vendor Credits",
        href: "/app/purchases/vendor-credits",
        hrefPlus: "/app/purchases/vendor-credits/new-credit",
      },
    ],
  },
  {
    title: "Integrations",
    href: "/app/integrations",
    icon: "integrations",
  },
  {
    title: "Reports",
    href: "/app/reports",
    icon: "barChart",
  },
  {
    title: "Documents",
    href: "/app/documents",
    icon: "documents",
  },
] satisfies AppSidebarNavItem[]
