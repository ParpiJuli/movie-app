import sadPopcorn from '../assets/sadPopcorn.jpg';
import tw from 'tailwind-styled-components';
import { useRouteError } from 'react-router-dom';
import { RouterErrorType } from '../types/Router';

export default function ErrorPage({errorMessage}: {errorMessage?: string}) {
  const error = useRouteError() as RouterErrorType;
  const message = errorMessage ?? 'Sorry, an unexpected error has occurred.';

  return (
    <ErrorContainer id="error-page">
      <Text>Oops!</Text>
      <Text>{message}</Text>
      <Image src={sadPopcorn} alt="error-image" />
      <Text>
        <i>{error.statusText || error.message}</i>
      </Text>
    </ErrorContainer>
  );
}

const ErrorContainer = tw.div`
  py-20
  !bg-light-blue
  flex
  flex-col
  m-auto
`;

const Text = tw.h1`
  text-3xl
  flex
  m-auto
`;

const Image = tw.img`
  text-3xl
  flex
  m-auto
`;
