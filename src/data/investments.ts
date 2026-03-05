export interface Investment {
  name: string
  slug: string
  image: string
  address?: string
  description: string[]
  link?: { label: string; url: string }
  hidden?: boolean // set to true to hide from public pages; remove to restore
}

export const investments: Investment[] = [
  {
    name: 'Lower Pyne Building',
    slug: 'lower-pyne-building',
    image: '/images/Lower_Pyne_(Princeton).jpg',
    description: [
      "Princeton's most iconic building, located at the intersection of Nassau Street and Witherspoon Street, and directly across from the main entrance to Princeton University. The building is 100% occupied across 5,668 square feet of retail and 6,436 square feet of office. Hamilton Jewelers has anchored the property for decades and the building benefits from exceptionally low turnover.",
    ],
  },
  {
    name: 'Princeton Life Sciences Building',
    slug: 'princeton-life-sciences',
    image: '/images/Princeton Life Sciences.webp',
    address: '16 Chambers St\nPrinceton, NJ 08540',
    description: [
      "16 Chambers Street was the original firehouse of Mercer Engine Company No. 3. Lead by Princevest, the property was purchased in September 2019 (then vacant) and multi-tenanted the building for the next phase of its life as a life sciences center. New tenants include a Google-backed women's healthcare clinic and The Center For Anxiety. The building is situated between Graduate Hotel (a new luxury 180-room hotel) and the PRINCO Building (offices of Princeton University's $34 billion endowment).",
    ],
  },
  {
    name: 'The Gillespie Building',
    slug: 'the-gillespie-building',
    image: '/images/The Gillespe Building.webp',
    address: '3450 Princeton Pike\nLawrenceville, NJ 08648',
    description: [
      "Lead by Princevest, 3450 Princeton Pike is a mission critical headquarters for the United States Geological Survey (USGS) and serves as home for an adult daycare community and physical therapy center. The USGS headquarters includes multiple laboratories, chemical storage, publication offices, and a board room. In addition to supporting national research functions for the USGS, 3450 Princeton Pike houses the Water Science Center, the only hub of the USGS Water Research Discipline in New Jersey. The entire building facade is dark grey slate, giving the property unique architectural appeal and an outstanding sustainability profile.",
    ],
  },
  {
    name: '195 Nassau St',
    slug: '195-nassau-st',
    image: '/images/195-Nassau-homepage.webp',
    description: [
      "Lead by Princevest, The Thompson Assemblage (195 Nassau Street, 9-11 Charlton Street, and 13 Charlton Street) is a 0.61-acre, 5-building contiguous portfolio bound by Princeton University on all three sides. The assemblage constitutes one of the largest portfolios in downtown Princeton and includes retail, office, and residential spaces. The blue victorian building served as the childhood home of Bryce Thompson IV, whose grandfather built the house in 1885; during a storied career of 63 years, Bryce Thompson IV became New Jersey's largest private landowner. Princevest is honored to carry on the legacy of the Thompson family and hopes to give the properties another successful century or two. Current plans call for the construction of 45 apartments (9 of which will be deemed affordable) across four floors situated on top of a parking podium located in the interior of the site.",
      "195 Nassau St will deliver a new residential community to downtown Princeton that comprises 45 apartments, 9 of which will be set aside exclusively for low-income residents. Surrounded by Princeton University on three sides, the site offers outstanding walkability and access to the town's largest employer.",
    ],
  },
  {
    name: 'Penns Neck Plaza',
    slug: 'penns-neck-plaza',
    image: '/images/penns+neck+plaza.webp',
    address: '3700-3710 US Rt 1\nPrinceton, NJ 08540',
    description: [
      'Penns Neck Plaza is a 6-acre development site that is anticipated to include gas / convenience, pharmacy, and/or multiple pad sites with drive-thru. The development will serve as the "Gateway to West Windsor and Princeton," with VPD in excess of 100K at one of the highest income-areas of New Jersey.',
    ],
  },
  {
    name: 'Vivvi',
    slug: 'vivvi',
    hidden: true,
    image: '/images/vivvi.webp',
    description: [
      "Vivvi provides exceptional child care and early education. With programs across the country, including on-campus, in-home, in-office, care cash and virtual tutoring. Vivvi partners with employers of all sizes to make child care more accessible and affordable. By helping companies cater to working parents and providing a comprehensive vision for today's families, Vivvi offers the most powerful tool for recruiting, retention and productivity.",
    ],
    link: { label: 'Learn more about Vivvi.', url: 'https://www.vivvi.com' },
  },
  {
    name: 'Shortcut',
    slug: 'shortcut',
    hidden: true,
    image: '/images/Shortcut.webp',
    description: [
      "Shortcut is a mobile barbershop platform that brings professional grooming services directly to customers. By reimagining the traditional barbershop experience, Shortcut offers convenient, on-demand haircuts and grooming services at homes, offices, and events across major metropolitan areas.",
    ],
    link: { label: 'Learn more about Shortcut.', url: 'https://www.getshortcut.co' },
  },
  {
    name: 'Bordentown Portfolio',
    slug: 'bordentown-portfolio',
    image: '/images/Francis_Hopkinson_House,_Bordentown,_NJ_Nov_2017.jpg',
    address: 'Bordentown, NJ',
    description: [
      'Bordentown (the "Little City with a Lot of Charm") is a vibrant, picturesque, historic community situated at the confluence of the Delaware River, Blacks Creek, and Crosswicks Creek conveniently located between Princeton, Trenton and Philadelphia. Princevest\'s Bordentown Portfolio comprises 30,000 square feet of commercial property, in addition to the largest residential development site in downtown Bordentown City. Tenants within the commercial property portfolio include Farnsworth Avenue favorites such as Tindall Road Brewery and the Francis Hopkinson House (a National Historic Landmark).',
      'Built in 1750, the Francis Hopkinson House was the home of Founding Father Francis Hopkinson: the designer of the United States Flag; a signer of the Declaration of Independence; and the inventor of a floating lamp and an improved method for gassing ascension balloons. Hopkinson lived in the House from 1774 until his death in 1791. The building is three stories and exterior architectural features include: a center entrance sheltered by segmented hood supported by Italian brackets; a steep-sloped gambrel roof pierced by three dormers with molded tops echoing the entrance hood; a main facade five bays wide; sash windows arranged symmetrically around the entrance; and the original courtyard with sidewalk access and enclosure from the home\'s interior covered porch.',
      'The House was to be burned by the British during a military action in 1778 but was spared by a Hessian officer\'s appreciation of Hopkinson\'s library. The building has been converted for commercial use, but Princevest offers tours to interested parties with advanced notice.',
    ],
  },
]
