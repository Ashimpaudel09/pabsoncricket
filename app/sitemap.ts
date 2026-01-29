import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pabsoncricketleague.com';

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/results`, lastModified: new Date() },
    { url: `${baseUrl}/matches`, lastModified: new Date() },
  ];
}
