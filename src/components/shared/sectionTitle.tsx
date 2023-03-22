import tw from 'tailwind-styled-components';
import { SectionTitleProps, SectionTitleType } from '../../types/Titles';

function SectionTitle({ title, isMainTitle, size }: SectionTitleType) {

  return (
    <Container>
      <Title $isMainTitle={isMainTitle} $size={size}> { title } </Title>
    </Container>
  );
}

const Container = tw.div`
  container
  pt-5
  md:pt-20
  inline
  flex
  m-auto
`;

const Title = tw.h3<SectionTitleProps>`
  ${(p) => (p.$size ?? 'ftext-2xl')}
  font-bold
  ${(p) => (p.$isMainTitle ? 'font-bold flex m-auto md:my-10' : 'font-normal py-2')}
`;

export default SectionTitle;
