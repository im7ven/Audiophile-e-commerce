import {
  SmallImage,
  LargeImage,
  ProductGalleryWrapper,
  SmallImageWrapper,
} from "../../styles/Product/styles.ProductImageGallery";

interface Props {
  image1D: string;
  image1T: string;
  image1M: string;
  image2D: string;
  image2T: string;
  image2M: string;
  image3D: string;
  image3T: string;
  image3M: string;
  alt: string;
}

export const ProductImageGallery = ({
  image1D,
  image1T,
  image1M,
  image2D,
  image2T,
  image2M,
  image3D,
  image3T,
  image3M,
  alt,
}: Props) => {
  return (
    <ProductGalleryWrapper>
      <SmallImageWrapper>
        <picture>
          <source
            type="image/webp"
            media="(min-width:768px) and (max-width: 1024px)"
            srcSet={image1T}
          />
          <source
            type="image/webp"
            media="(max-width: 768px)"
            srcSet={image1M}
          />
          <SmallImage
            width="445px"
            height="280px"
            loading="lazy"
            src={image1D}
            alt={alt}
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            media="(min-width:768px) and (max-width: 1024px)"
            srcSet={image2T}
          />
          <source
            type="image/webp"
            media="(max-width: 768px)"
            srcSet={image2M}
          />
          <SmallImage
            width="445px"
            height="280px"
            loading="lazy"
            src={image2D}
            alt={alt}
          />
        </picture>
      </SmallImageWrapper>
      <picture style={{ alignSelf: "center" }}>
        <source
          type="image/webp"
          media="(min-width:768px) and (max-width: 1024px)"
          srcSet={image3T}
        />
        <source type="image/webp" media="(max-width: 768px)" srcSet={image3M} />
        <LargeImage
          width="635px"
          height="592px"
          loading="lazy"
          src={image3D}
          alt={alt}
        />
      </picture>
    </ProductGalleryWrapper>
  );
};
