import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slimdownblueprint.com';
  
  const pages = [
    '',
    '/shop',
    '/products/smoothie-slim-down',
    '/products/4-week-kickstart',
    '/products/10-week-transformation',
    '/products/bundle',
    '/reviews',
    '/about',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  return pages.map((page) => ({
    url: baseUrl + page,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: page === '' ? 1.0 : 0.8,
  }));
}