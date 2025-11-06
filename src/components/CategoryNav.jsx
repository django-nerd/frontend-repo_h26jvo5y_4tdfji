const categories = [
  { key: 'groceries', label: 'Groceries' },
  { key: 'produce', label: 'Produce' },
  { key: 'electronics', label: 'Electronics' },
  { key: 'clothing', label: 'Clothing' },
  { key: 'toys', label: 'Toys' },
  { key: 'plastic', label: 'Household Plastics' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'shoes', label: 'Shoes' },
  { key: 'watches', label: 'Watches' },
  { key: 'utensils', label: 'Utensils' },
  { key: 'jewelry', label: 'Jewelry' },
  { key: 'leather', label: 'Leather Goods' },
]

export default function CategoryNav({ active, onSelect }) {
  return (
    <nav className="border-b border-gray-100 bg-white/60 backdrop-blur sticky top-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => onSelect(c.key)}
              className={`shrink-0 px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                active === c.key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
