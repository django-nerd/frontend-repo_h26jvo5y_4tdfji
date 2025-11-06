import { useMemo, useState } from 'react'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

const inventory = [
  // Groceries
  { id: 'g1', category: 'groceries', name: 'Organic Milk 1L', price: 3.49, emoji: '🥛' },
  { id: 'g2', category: 'groceries', name: 'Brown Rice 2kg', price: 6.99, emoji: '🍚' },
  { id: 'g3', category: 'groceries', name: 'Olive Oil 1L', price: 9.99, emoji: '🫒' },
  // Produce
  { id: 'p1', category: 'produce', name: 'Bananas (1kg)', price: 1.79, emoji: '🍌', fresh: true },
  { id: 'p2', category: 'produce', name: 'Avocados (pack of 4)', price: 3.99, emoji: '🥑', fresh: true },
  { id: 'p3', category: 'produce', name: 'Strawberries (500g)', price: 2.99, emoji: '🍓', fresh: true },
  // Electronics
  { id: 'e1', category: 'electronics', name: 'Wireless Earbuds', price: 49.99, emoji: '🎧', specs: 'Bluetooth 5.3, 24h battery' },
  { id: 'e2', category: 'electronics', name: 'Smartphone 128GB', price: 599.0, emoji: '📱', specs: '6.5" OLED, 5G' },
  { id: 'e3', category: 'electronics', name: '4K Smart TV 55"', price: 699.0, emoji: '📺', specs: 'HDR10+, Dolby Vision' },
  // Clothing
  { id: 'c1', category: 'clothing', name: 'Basic T-Shirt', price: 12.99, emoji: '👕', options: ['S', 'M', 'L', 'XL'] },
  { id: 'c2', category: 'clothing', name: 'Jeans Slim Fit', price: 39.99, emoji: '👖', options: ['28', '30', '32', '34'] },
  { id: 'c3', category: 'clothing', name: 'Hoodie Unisex', price: 29.99, emoji: '🧥', options: ['S', 'M', 'L'] },
  // Toys
  { id: 't1', category: 'toys', name: 'Building Blocks Set', price: 19.99, emoji: '🧱', specs: 'Ages 4+' },
  { id: 't2', category: 'toys', name: 'RC Car', price: 34.99, emoji: '🚗', specs: '2.4Ghz, 30min play' },
  { id: 't3', category: 'toys', name: 'Plush Teddy', price: 14.99, emoji: '🧸' },
  // Household Plastics
  { id: 'hp1', category: 'plastic', name: 'Storage Box 20L', price: 8.99, emoji: '📦' },
  { id: 'hp2', category: 'plastic', name: 'Water Bottle BPA-Free', price: 6.49, emoji: '🍼' },
  { id: 'hp3', category: 'plastic', name: 'Trash Bags (50ct)', price: 5.99, emoji: '🗑️' },
  // Fashion
  { id: 'f1', category: 'fashion', name: 'Silk Scarf', price: 24.99, emoji: '🧣', options: ['Red', 'Blue', 'Green'] },
  { id: 'f2', category: 'fashion', name: 'Leather Belt', price: 34.99, emoji: '🧷', options: ['S', 'M', 'L'] },
  { id: 'f3', category: 'fashion', name: 'Sunglasses', price: 49.99, emoji: '🕶️' },
  // Shoes
  { id: 's1', category: 'shoes', name: 'Running Shoes', price: 59.99, emoji: '👟', options: ['7', '8', '9', '10', '11'] },
  { id: 's2', category: 'shoes', name: 'Formal Leather Shoes', price: 89.99, emoji: '👞', options: ['7', '8', '9', '10'] },
  { id: 's3', category: 'shoes', name: 'Sandals', price: 24.99, emoji: '🩴', options: ['6', '7', '8', '9'] },
  // Watches
  { id: 'w1', category: 'watches', name: 'Classic Analog Watch', price: 129.99, emoji: '⌚', luxury: true },
  { id: 'w2', category: 'watches', name: 'Smartwatch', price: 199.99, emoji: '⌚', specs: 'GPS, Heart-rate, NFC' },
  // Utensils
  { id: 'u1', category: 'utensils', name: 'Non-stick Pan', price: 24.99, emoji: '🍳' },
  { id: 'u2', category: 'utensils', name: 'Chef Knife', price: 29.99, emoji: '🔪' },
  // Jewelry
  { id: 'j1', category: 'jewelry', name: 'Gold Necklace 18K', price: 499.99, emoji: '📿', luxury: true },
  { id: 'j2', category: 'jewelry', name: 'Diamond Ring', price: 1299.99, emoji: '💍', luxury: true },
  // Leather Goods
  { id: 'l1', category: 'leather', name: 'Leather Wallet', price: 39.99, emoji: '👝' },
  { id: 'l2', category: 'leather', name: 'Leather Handbag', price: 159.99, emoji: '👜', luxury: true },
]

export default function App() {
  const [search, setSearch] = useState('')
  const [active, setActive] = useState('groceries')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const filtered = useMemo(() => {
    const s = search.toLowerCase()
    return inventory.filter(
      (p) =>
        (active ? p.category === active : true) &&
        (s ? p.name.toLowerCase().includes(s) || p.category.includes(s) : true)
    )
  }, [search, active])

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  function changeQty(id, qty) {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  function checkout() {
    // Simulate checkout flow
    alert('Order placed! Thank you for shopping with SuperMart.')
    setCart([])
    setCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <Header search={search} setSearch={setSearch} cartCount={cart.reduce((s, i) => s + i.qty, 0)} onCartOpen={() => setCartOpen(true)} />
      <CategoryNav active={active} onSelect={setActive} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sm:p-10 flex items-center justify-between overflow-hidden">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Everything you need, in one cart</h2>
              <p className="mt-2 text-white/90">Fresh produce, daily essentials, and premium luxury — all in one place.</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-full bg-white text-blue-700 font-semibold px-5 py-2" onClick={() => setActive('produce')}>
                  Shop Produce
                </button>
                <button className="rounded-full border border-white/60 text-white px-5 py-2" onClick={() => setActive('electronics')}>
                  Explore Electronics
                </button>
              </div>
            </div>
            <div className="hidden sm:block text-6xl">🛍️</div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold capitalize">{active}</h3>
            <p className="text-sm text-gray-500">{filtered.length} items</p>
          </div>
          <ProductGrid products={filtered} onAdd={addToCart} />
        </section>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQtyChange={changeQty}
        onRemove={removeItem}
        onCheckout={checkout}
      />
    </div>
  )
}
