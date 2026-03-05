import { useParams, Link } from 'react-router-dom'
import { investments } from '../data/investments'

export default function InvestmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const index = investments.findIndex((inv) => inv.slug === slug)
  const investment = investments[index]

  if (!investment) {
    return (
      <section className="py-20 px-6 lg:px-12 text-center">
        <h1 className="font-serif text-4xl text-pyn-charcoal mb-4">Not Found</h1>
        <Link to="/" className="text-pyn-teal underline">Back to Work</Link>
      </section>
    )
  }

  const prev = index > 0 ? investments[index - 1] : null
  const next = index < investments.length - 1 ? investments[index + 1] : null

  return (
    <>
      {/* Title + Description */}
      <section className="py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl text-pyn-charcoal mb-6">{investment.name}</h1>
            {investment.address && (
              <p className="text-gray-500 text-lg whitespace-pre-line">{investment.address}</p>
            )}
          </div>
          <div className="md:col-span-3 space-y-6">
            {investment.description.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg">{p}</p>
            ))}
            {investment.link && (
              <p>
                <a
                  href={investment.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pyn-charcoal underline hover:text-pyn-teal"
                >
                  {investment.link.label}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <img
        src={investment.image}
        alt={investment.name}
        className="w-full max-h-[70vh] object-cover"
      />

      {/* Prev / Next navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex justify-between items-center">
        {prev ? (
          <Link
            to={`/investments/${prev.slug}`}
            className="font-serif text-xl md:text-2xl text-pyn-charcoal no-underline hover:text-pyn-teal transition-colors"
          >
            <span className="mr-3">&lsaquo;</span>
            {prev.name}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/investments/${next.slug}`}
            className="font-serif text-xl md:text-2xl text-pyn-charcoal no-underline hover:text-pyn-teal transition-colors text-right"
          >
            {next.name}
            <span className="ml-3">&rsaquo;</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </>
  )
}
