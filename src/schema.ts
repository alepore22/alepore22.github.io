// Structured data (schema.org) that tells search engines who Angelo is and what each page shows.
import { site } from './site';

export const origin = 'https://angelolepore.it';
export const personId = `${origin}/#person`;
export const websiteId = `${origin}/#website`;

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  alternateName: [site.nickname, 'Lepo'],
  jobTitle: site.role,
  url: `${origin}/`,
  image: `${origin}/og.png`,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'IT' },
  worksFor: { '@type': 'Organization', name: site.company },
  knowsAbout: ['UI design', 'UX design', 'Illustrazione', 'Graphic design', 'App iOS'],
  sameAs: [site.links.linkedin, site.links.behance],
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${origin}/`,
  name: site.name,
  inLanguage: 'it-IT',
  publisher: { '@id': personId },
};
