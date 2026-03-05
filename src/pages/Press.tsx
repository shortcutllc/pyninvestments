const pressItems = [
  {
    image: '/images/presspage-Hamilton-rib.cutting.webp',
    alt: 'Hamilton Jewelers ribbon cutting at Lower Pyne Building',
    quote: 'Hamilton Jewelers Reveals Newly Redesigned Princeton Flagship. This remodel seeks to respect the elegance of the famous Lower Pyne building and the surrounding environs of Nassau Street\u2026',
    source: 'Instore Magazine',
    date: 'March 2023',
    url: 'https://instoremag.com/hamilton-jewelers-reveals-newly-redesigned-princeton-flagship/',
  },
  {
    image: '/images/presspage-195+Nassau+St.webp',
    alt: '195 Nassau Street',
    quote: 'Plans announced for new computer science complex, apartment building adjacent to 185 Nassau St',
    source: 'The Daily Princetonian',
    date: 'November 2022',
    url: 'https://www.dailyprincetonian.com/article/2022/11/princeton-university-construction-planning-board-geoscience-building-apartments',
  },
  {
    image: '/images/presspage-Kindbody+Press+Page.webp',
    alt: 'Kindbody at Princeton Life Sciences Building',
    quote: 'Kindbody, a fast-growing health and fertility company, today announced the opening of a new clinic in Princeton, New Jersey at 16 Chambers Street.',
    source: 'PR Newswire',
    date: 'September 2020',
    url: 'https://www.prnewswire.com/news-releases/kindbody-opens-new-clinic-in-princeton-new-jersey-301127494.html',
  },
]

export default function Press() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-pyn-charcoal mb-16">Press</h1>
        <div className="space-y-20">
          {pressItems.map((item) => (
            <div key={item.url} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full rounded object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl md:text-2xl lg:text-3xl text-pyn-charcoal leading-snug no-underline hover:underline"
                >
                  &ldquo;{item.quote}&rdquo;
                </a>
                <p className="mt-6 text-gray-500 text-sm">
                  &ndash; {item.source} | {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
