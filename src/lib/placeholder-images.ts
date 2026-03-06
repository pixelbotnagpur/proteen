import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type VideoPlaceholder = {
    id: string;
    description: string;
    videoUrl: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
export const PlaceHolderVideos: VideoPlaceholder[] = data.videos;
