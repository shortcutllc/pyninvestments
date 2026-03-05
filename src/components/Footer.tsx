import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <section className="relative py-24 bg-pyn-teal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/let\\'s work together.jpg')" }}
        />
        <div className="relative text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white italic mb-8">
            Let's Work Together
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-pyn-peach text-pyn-charcoal text-sm font-medium tracking-wide uppercase rounded no-underline hover:bg-pyn-peach-dark transition-colors"
          >
            Contact Us
          </Link>
          <p className="text-white/50 text-xs mt-8">
            Collection of the Historical Society of Princeton
          </p>
        </div>
      </section>

      {/* Footer info */}
      <div className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="font-serif text-2xl text-pyn-charcoal mb-4">Pyn Investments</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              92 Nassau St
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Princeton, NJ 08540
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              <a href="tel:6095750340" className="no-underline text-gray-600 hover:text-pyn-charcoal">(609) 575-0340</a>
            </p>
            <p>
              <a href="mailto:contact@pyninvestments.com" className="no-underline text-gray-600 hover:text-pyn-charcoal">contact@pyninvestments.com</a>
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400">
          <img src="/images/pyn logo.png" alt="Lower Pyne Building" className="h-10 opacity-60" />
          <span>&copy; 1983</span>
        </div>
      </div>
    </footer>
  )
}
