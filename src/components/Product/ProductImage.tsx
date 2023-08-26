interface Props {
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
  minWidth: string;
  alt: string;
}

export const ProductImage = ({
  smallSrc,
  mediumSrc,
  largeSrc,
  minWidth,
  alt,
}: Props) => {
  return (
    <img
      srcSet={`${largeSrc} 320w, ${mediumSrc} 768w, ${smallSrc}, 1440w`}
      alt={alt}
      style={{ minWidth: minWidth }}
    />
  );
};
