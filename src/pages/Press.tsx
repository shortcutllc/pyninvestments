const pressItems = [
  {
    image: '/images/presspage-Hamilton-rib.cutting.webp',
    alt: 'Hamilton Jewelers ribbon cutting at Lower Pyne Building',
  },
  {
    image: '/images/presspage-195+Nassau+St.webp',
    alt: '195 Nassau Street',
  },
  {
    image: '/images/presspage-Kindbody+Press+Page.webp',
    alt: 'Kindbody at Princeton Life Sciences Building',
  },
]

export default function Press() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-pyn-charcoal mb-16">Press</h1>
        <div className="max-w-4xl">
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Selected press coverage featuring Pyn Investments and our portfolio of properties and companies.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {pressItems.map((item) => (
              <div key={item.alt}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full rounded object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
