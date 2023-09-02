import {
  PageHeading,
  PageHeadingContainer,
} from "../../styles/Shared/styles.CategoryPageHeading";

interface Props {
  heading: string;
}

export const CategoryPageHeading = ({ heading }: Props) => {
  return (
    <PageHeadingContainer>
      <PageHeading>{heading}</PageHeading>
    </PageHeadingContainer>
  );
};
