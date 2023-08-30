import { styled } from "styled-components";
import { block, caramelBg } from "../styles.utilities";
import { circles } from "../../images";
import { bodyText, h1 } from "../styles.typography";

export const Zx9FeatureWrapper = styled.div`
  ${block}
  ${caramelBg}
  border-radius: 8px;
  padding: 6.2rem 2.4rem 5.5rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-image: url(${circles});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -13rem;
  margin-bottom: 2.4rem;

  @media screen and (min-width: 768px) {
    background-position: center -27rem;
    background-size: 130%;
    margin-bottom: 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: start;
    padding: 0;
    height: 56rem;
    background-size: auto auto;
    background-position: -14rem -4rem;
    margin-bottom: 4.8rem;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 17.2rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 19.7rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 37.4rem;
    align-self: flex-end;
    margin-left: 14.2rem;
    transform: translateY(1.6rem);
  }
`;

export const Zx9FeatureInfo = styled.div`
  max-width: 28rem;
  text-align: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 35rem;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const Zx9FeatureHeading = styled.h2`
  ${h1}
  color: #fff;
  letter-spacing: 0.4rem;
  margin: 4.5rem auto 2.4rem;

  @media screen and (min-width: 768px) {
    margin: 7.2rem auto 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 13.3rem auto 0;
  }
`;

export const Zx9FeatureDescription = styled.p`
  ${bodyText};
  color: #ffffffbf;
  margin: 2.4rem auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  })
`;
