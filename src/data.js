// Sample data for the UI demo. The complete project uses live APIs + database.
export const weekly = [
  { label: 'Mon', sales: 3.8, footfall: 2.9 }, { label: 'Tue', sales: 3.2, footfall: 2.6 }, { label: 'Wed', sales: 4.1, footfall: 3.1 },
  { label: 'Thu', sales: 4.6, footfall: 3.4 }, { label: 'Fri', sales: 5.9, footfall: 4.2 }, { label: 'Sat', sales: 8.4, footfall: 6.1 },
  { label: 'Sun', sales: 9.2, footfall: 6.8 },
]

export const categories = [
  { name: 'Apparel', value: 34 }, { name: 'Groceries', value: 27 }, { name: 'Electronics', value: 19 },
  { name: 'Home', value: 12 }, { name: 'Beauty', value: 8 },
]

export const stores = [
  { id: 1, name: 'Connaught Place', city: 'New Delhi', manager: 'Ishita Bose', sales: 1840000, target: 2000000, staff: 18, rating: 4.8, open: true },
  { id: 2, name: 'Phoenix Mall', city: 'Mumbai', manager: 'Farhan Ali', sales: 2260000, target: 2100000, staff: 22, rating: 4.7, open: true },
  { id: 3, name: 'Koramangala', city: 'Bengaluru', manager: 'Lakshmi R', sales: 1410000, target: 1600000, staff: 14, rating: 4.6, open: true },
  { id: 4, name: 'Salt Lake', city: 'Kolkata', manager: 'Debasis Paul', sales: 960000, target: 1200000, staff: 11, rating: 4.4, open: false },
  { id: 5, name: 'Banjara Hills', city: 'Hyderabad', manager: 'Sravya K', sales: 1290000, target: 1300000, staff: 13, rating: 4.6, open: true },
  { id: 6, name: 'MI Road', city: 'Jaipur', manager: 'Gaurav Saini', sales: 780000, target: 900000, staff: 9, rating: 4.5, open: true },
]

export const customers = [
  { id: 1, name: 'Ritika Malhotra', phone: '+91 98XXXX 2210', tier: 'Platinum', points: 18420, spend: 284000, visits: 46, last: '2 days ago' },
  { id: 2, name: 'Aditya Kulkarni', phone: '+91 97XXXX 8812', tier: 'Gold', points: 9210, spend: 142500, visits: 28, last: 'Today' },
  { id: 3, name: 'Zoya Siddiqui', phone: '+91 99XXXX 4471', tier: 'Gold', points: 7630, spend: 118000, visits: 22, last: '1 week ago' },
  { id: 4, name: 'Harsh Vardhan', phone: '+91 90XXXX 1029', tier: 'Silver', points: 3120, spend: 52400, visits: 12, last: '3 days ago' },
  { id: 5, name: 'Nandini Reddy', phone: '+91 96XXXX 5543', tier: 'Silver', points: 2480, spend: 41200, visits: 9, last: 'Yesterday' },
  { id: 6, name: 'Rohan Mehra', phone: '+91 88XXXX 9020', tier: 'Bronze', points: 640, spend: 9800, visits: 3, last: '2 weeks ago' },
]
