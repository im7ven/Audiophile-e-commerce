import styled from "styled-components";
import { homeZx7D, homeZx7M, homeZx7T } from "../../images";
import { h2 } from "../styles.typography";
import { block } from "../styles.utilities";

export const Zx7Container = styled.div`
  ${block}
  background-image: url(${homeZx7M});
  background-size: 100% 105%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: 32rem;
  margin-bottom: 2.4rem;

  @media screen and (min-width: 768px) {
    background-image: url(${homeZx7T});
    background-size: 100% 100%;
    margin-bottom: 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${homeZx7D});
    margin-bottom: 4.8rem;
  }
`;

export const Zx7DetailWrapper = styled.div`
  margin: 0 2.4rem;

  @media screen and (min-width: 768px) {
    margin: 0 6.35rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 9.65rem;
  }
`;

export const Zx7FeatureHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 3.85rem;
  color: #000;
  margin: 0 0 3.2rem;
`;
