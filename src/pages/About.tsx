export default function About() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl text-pyn-charcoal mb-16">About</h1>
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <img
              src="/images/About page hero Lower+Pyne+Historical+Image.webp"
              alt="Historic Lower Pyne Building"
              className="w-full rounded object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded by David Newton, Pyn Investments is deeply rooted in a family legacy that began long before its establishment in Princeton, NJ. The pivotal acquisition of the iconic Lower Pyne Building in 1983 marked the beginning of the firm's transformative impact on the greater Princeton area. This family-operated investment office, drawing on a rich heritage of real estate development, focuses on developing and managing a diverse portfolio of residential, retail, and commercial properties.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The story of Pyn Investments is intertwined with the journey of David Newton and his father, Gerald Newton, from London to Princeton. Gerald, who founded and ran the renowned real estate company Country Newtown in England, instilled in David a profound appreciation for real estate development. Growing up in this environment, David developed a deep affection for the architectural and community values that would later define his work in Princeton.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              After completing his MBA at Wharton, David chose to remain in the United States, driven by a vision to replicate his family's legacy in a new context. The preservation and revitalization of Lower Pyne, a project that honored the historical and architectural significance of Princeton, reflected this vision. Under David's leadership, Pyn Investments has become synonymous with community-focused development, revitalizing key properties throughout Mercer County and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
