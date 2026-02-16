import { MetadataRoute } from 'next';
import { NWW_CONFIG } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${NWW_CONFIG.url}/sitemap.xml`,
  };
}
