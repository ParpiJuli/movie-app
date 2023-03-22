import tw from 'tailwind-styled-components';
import { TitleAndDetailType, TitleDescriptionProps } from '../../types/Titles';

function TitleAndDetail({
  title,
  detail,
  titleSize,
  titleClass= '',
  detailClass='',
  isMainTitle=false
}: TitleAndDetailType) {

  return (
    <Container>
      <Title $class={titleClass} $size={titleSize} $isMainTitle={isMainTitle}>
        { title }
      </Title>
      <Detail $class={detailClass} $size={titleSize} $isMainTitle={isMainTitle}>{ detail }</Detail>
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  md:flex-row
  m-auto
  md:m-0
`;

const Title = tw.h3<TitleDescriptionProps>`
  ${(p) => (p.$size ?? 'text-lg md:text-xl')}
  ${(p) => p.$class}
  ${(p) => (p.$isMainTitle ? 'font-bold' : 'font-normal py-2 underline underline-offset-2')}
  pr-2
`;

const Detail = tw.p<TitleDescriptionProps>`
  ${(p) => (p.$size ?? 'text-lx md:text-xl')}
  ${(p) => (p.$isMainTitle ? '' : 'font-normal py-2')}
  ${(p) => p.$class}
  text-gray
`;
export default TitleAndDetail;
