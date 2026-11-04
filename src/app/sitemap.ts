import type { MetadataRoute } from 'next';
import { STATES, CITIES_MATRIX } from '@/data/geo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://foundersgrant.org';
  const buildDate = new Date('2026-11-04T00:00:00.000Z');

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/grants`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apply`,
      lastModified: buildDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impact`,
      lastModified: buildDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified: buildDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const stateRoutes: MetadataRoute.Sitemap = STATES.map((state) => ({
    url: `${baseUrl}/grants/${state.slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const cityRoutes: MetadataRoute.Sitemap = CITIES_MATRIX.map((city) => ({
    url: `${baseUrl}/grants/${city.stateSlug}/${city.slug}`,
    lastModified: buildDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...stateRoutes, ...cityRoutes];
}
