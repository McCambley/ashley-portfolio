import Image, { StaticImageData } from 'next/image';

function StaticImage({
  image,
  className,
  alt,
}: {
  image: StaticImageData;
  className?: string;
  alt: string;
}) {
  return (
    <Image
      src={image.src}
      height={image.height}
      width={image.width}
      className={className}
      alt={alt}
    />
  );
}

export default StaticImage;
