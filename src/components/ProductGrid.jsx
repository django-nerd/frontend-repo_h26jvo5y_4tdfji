function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
}

function Badge({ children, color = 'blue' }) {
  const map = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    amber: 'bg-amber-50 text-amber-700',
    purple: 'bg-purple-50 text-purple-700',
    rose: 'bg-rose-50 text-rose-700',
    gray: 'bg-gray-100 text-gray-700',
  }
  return <span className={`text-xs font-medium px-2 py-1 rounded ${map[color]}`}>{children}</span>
}

export default function ProductGrid({ products, onAdd }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <div key={p.id} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
            <span>{p.emoji}</span>
          </div>
          <div className="p-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-gray-800 line-clamp-2">{p.name}</h3>
              {p.fresh && <Badge color="green">Fresh</Badge>}
              {p.luxury && <Badge color="purple">Luxury</Badge>}
            </div>
            {p.specs && (
              <p className="mt-1 text-xs text-gray-500 line-clamp-2">{p.specs}</p>
            )}
            {p.options && p.options.length > 0 && (
              <p className="mt-1 text-xs text-gray-500">Options: {p.options.join(', ')}</p>
            )}
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold text-gray-900">{formatCurrency(p.price)}</span>
              <button
                onClick={() => onAdd(p)}
                className="rounded-full bg-blue-600 text-white px-3 py-1 text-sm hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
