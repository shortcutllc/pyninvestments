import { Link } from 'react-router-dom'
import { investments } from '../data/investments'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img
          src="/images/Lower pyne hero.jpeg"
          alt="Lower Pyne Building, Nassau Street, Princeton"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-pyn-teal/70 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12 md:pb-16">
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white max-w-2xl leading-relaxed">
              Pyn Investments is a family run investment firm focused on real estate and early staged companies.
            </p>
          </div>
        </div>
      </section>

      {/* About Pyn */}
      <section className="py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-pyn-charcoal mb-12">About Pyn</h2>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                Founded by David Newton, Pyn Investments is a family-operated investment office located in Princeton, NJ. Since acquiring the iconic Lower Pyne Building in 1983, David Newton has directed and financed transformative projects that have reshaped urban landscapes and improved community life in the greater Princeton area. Our focus is on acquiring, developing, and managing a varied portfolio of residential, retail, and commercial properties, as well as investing in early-stage companies that are shaping the future of work and living.
              </p>
            </div>
            <div className="md:col-span-2">
              <img
                src="/images/David Newton Headshot Home Page.webp"
                alt="David Newton"
                className="w-full rounded object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Investments */}
      <section className="py-20 md:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-pyn-charcoal mb-16">Current Investments</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {investments.filter((inv) => !inv.hidden).map((inv) => (
              <Link key={inv.slug} to={`/investments/${inv.slug}`} className="group no-underline">
                <img
                  src={inv.image}
                  alt={inv.name}
                  className="w-full rounded mb-4 object-cover transition-opacity group-hover:opacity-90"
                  style={{ aspectRatio: '4/3' }}
                />
                <h3 className="font-serif text-xl text-pyn-charcoal group-hover:text-pyn-teal transition-colors">{inv.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
