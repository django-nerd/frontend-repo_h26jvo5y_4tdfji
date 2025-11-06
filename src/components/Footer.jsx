export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">About SuperMart</h4>
          <p>
            Your neighborhood one-stop shop for fresh groceries, everyday essentials, and premium goods.
            Experience fast delivery and great prices across 12+ categories.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Customer Care</h4>
          <ul className="space-y-2">
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Get Updates</h4>
          <div className="flex gap-2">
            <input className="flex-1 border border-gray-200 rounded-full px-4 py-2" placeholder="Email address" />
            <button className="rounded-full bg-blue-600 text-white px-4 py-2">Subscribe</button>
          </div>
          <p className="mt-2 text-xs">We send only useful updates. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">© {new Date().getFullYear()} SuperMart. All rights reserved.</div>
    </footer>
  )
}
