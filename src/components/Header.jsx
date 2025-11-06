import { useState } from 'react'

export default function Header({ search, setSearch, cartCount, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="i-heroicons-bars-3 text-2xl">☰</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛒</span>
              <span className="font-bold text-xl tracking-tight">SuperMart</span>
            </div>
          </div>

          <div className="flex-1 max-w-xl hidden sm:flex">
            <div className="relative w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products, categories, or brands..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="sm:hidden p-2 rounded-full border border-gray-200"
              onClick={onCartOpen}
              aria-label="Open cart"
            >
              🛍️
              {cartCount > 0 && (
                <span className="ml-1 text-xs font-semibold text-blue-600">{cartCount}</span>
              )}
            </button>
            <button
              onClick={onCartOpen}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              <span>View Cart</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-sm">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden pb-3">
            <div className="relative w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
