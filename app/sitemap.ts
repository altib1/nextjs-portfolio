import type { MetadataRoute } from 'next';

interface SitemapItem {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const languages: string[] = ['en', 'al', 'fr'];

const generateLocalizedUrls = (path: string): SitemapItem[] => {
  return languages.map(lang => ({
    url: `https://altiballa.fr/${lang}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
};

export default function sitemap(): SitemapItem[] {
  return [
    {
      url: 'https://altiballa.fr/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...generateLocalizedUrls('privacy-policy'),
    ...generateLocalizedUrls('terms-and-conditions'),
    ...generateLocalizedUrls('legal-mentions'),
    ...generateLocalizedUrls('about'),
    ...generateLocalizedUrls('projects'),
    {
      url: 'https://altiballa.fr/cvalti.pdf',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
