export interface VideoDetailResponse {
  kind: string;
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
