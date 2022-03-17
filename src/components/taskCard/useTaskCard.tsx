import { useQuery } from '@apollo/client';
import { FETCH_DATA } from '../../queries/FetchQuery';
export function useTaskCard() {
  const { data, loading, error } = useQuery(FETCH_DATA);
  return [{ data, loading, error }]

}
