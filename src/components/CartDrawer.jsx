import { useMemo } from 'react'

function formatCurrency(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
}

export default function CartDrawer({ open, items, onClose, onQtyChange, onRemove, onCheckout }) {
  const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items])
  const shipping = subtotal > 100 ? 0 : 7.5
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  return (
    <div className={`fixed inset-0 z-30 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* drawer */}
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b">
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close cart">
            ✖️
          </button>
        </div>
        <div className="p-5 h-[calc(100%-8rem)] overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex gap-3">
                <div className="w-16 h-16 rounded bg-gray-100 flex items-center justify-center text-2xl">{it.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{it.name}</p>
                      <p className="text-sm text-gray-500">{formatCurrency(it.price)}</p>
                    </div>
                    <button className="text-sm text-rose-600 hover:underline" onClick={() => onRemove(it.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      className="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100"
                      onClick={() => onQtyChange(it.id, Math.max(1, it.qty - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{it.qty}</span>
                    <button
                      className="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100"
                      onClick={() => onQtyChange(it.id, it.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-5 border-t space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">{formatCurrency(tax)}</span>
          </div>
          <div className="flex items-center justify-between font-semibold border-t pt-2">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full mt-2 rounded-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
