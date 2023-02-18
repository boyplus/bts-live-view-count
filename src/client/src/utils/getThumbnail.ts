import { Thumbnails } from '@/api/generated';

export const getThumbnail = (thumbnails: Thumbnails) => {
  if (thumbnails.standard) return thumbnails.standard.url;
  if (thumbnails.high) return thumbnails.high.url;
  if (thumbnails.maxres) return thumbnails.maxres.url;
  if (thumbnails.medium) return thumbnails.medium.url;
  if (thumbnails.default) return thumbnails.default.url;
  return '';
};
