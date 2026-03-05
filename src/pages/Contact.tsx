export default function Contact() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-pyn-charcoal mb-16">Contact</h1>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-pyn-charcoal mb-6">Get in Touch</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                <span className="block text-sm text-gray-400 uppercase tracking-wide mb-1">Address</span>
                92 Nassau St<br />
                Princeton, NJ 08540
              </p>
              <p>
                <span className="block text-sm text-gray-400 uppercase tracking-wide mb-1">Phone</span>
                <a href="tel:6095750340" className="text-pyn-charcoal no-underline hover:text-pyn-teal">(609) 575-0340</a>
              </p>
              <p>
                <span className="block text-sm text-gray-400 uppercase tracking-wide mb-1">Email</span>
                <a href="mailto:contact@pyninvestments.com" className="text-pyn-charcoal no-underline hover:text-pyn-teal">contact@pyninvestments.com</a>
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-pyn-charcoal mb-6">Send a Message</h2>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = 'mailto:contact@pyninvestments.com'
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-pyn-charcoal focus:outline-none focus:border-pyn-teal transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-pyn-charcoal focus:outline-none focus:border-pyn-teal transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-500 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-pyn-charcoal focus:outline-none focus:border-pyn-teal transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-pyn-peach text-pyn-charcoal text-sm font-medium tracking-wide uppercase rounded hover:bg-pyn-peach-dark transition-colors cursor-pointer border-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
