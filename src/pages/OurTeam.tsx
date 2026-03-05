const team = [
  {
    name: 'David Newton',
    image: '/images/David Newton Headshot Home Page.webp',
    bio: 'Founder and principal of Pyn Investments. David has directed and financed transformative real estate projects in the greater Princeton area since acquiring the Lower Pyne Building in 1983. A Wharton MBA graduate, David brings decades of experience in property development and community-focused investment.',
  },
  {
    name: 'Ben Newton',
    hidden: true, // remove to restore
    image: '/images/Ben+Headshot.webp',
    bio: 'Ben Newton brings fresh perspective and energy to Pyn Investments, working alongside his father to manage the firm\'s portfolio of properties and early-stage company investments. Ben focuses on identifying new opportunities and managing day-to-day operations across the portfolio.',
  },
  {
    name: 'Will Newton',
    hidden: true, // remove to restore
    image: '/images/Will+Headshot+High+Res.webp',
    bio: 'Will Newton contributes to Pyn Investments with a focus on technology and data-driven analysis, helping the firm leverage modern tools for portfolio management and investment evaluation.',
  },
]

export default function OurTeam() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-pyn-charcoal mb-16">Our Team</h1>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {team.filter((m) => !m.hidden).map((member) => (
            <div key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full rounded mb-6 object-cover"
                style={{ aspectRatio: '3/4' }}
              />
              <h2 className="font-serif text-2xl text-pyn-charcoal mb-3">{member.name}</h2>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
