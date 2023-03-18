import { MovieType } from '../types/Movies';

export interface QueryResponseType {
  isLoading?: boolean,
  isError?: boolean,
  data?: MovieType,
  error?: any
}

export interface QueryError {
  message: string;
  description: string;
  statusCode: string | number;
}
