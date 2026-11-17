import {
  BadgePercent, BarChart3, Boxes, Crown, LayoutDashboard, Receipt, Settings, ShoppingBag, Store, Truck, Users,
} from 'lucide-react'

export const app = {
  name: 'RetailPro',
  tagline: 'Retail Management Suite',
  logo: ShoppingBag,
  user: { name: 'Nikhil Arora', role: 'Retail Chain Owner' },
  searchPlaceholder: 'Search stores, products, customers…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Business',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Stores', to: '/stores', icon: Store },
      { label: 'Customers & Loyalty', to: '/customers', icon: Crown },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'POS Billing', icon: Receipt },
      { label: 'Inventory', icon: Boxes },
      { label: 'Purchases & Vendors', icon: Truck },
      { label: 'Offers & Coupons', icon: BadgePercent },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Staff & Shifts', icon: Users },
      { label: 'Reports & GST', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
