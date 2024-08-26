import { useQuery } from '@tanstack/react-query'
import { getGestBook } from 'actions/gestBook'

export const useGestBooks = (startIndex: number, endIndex: number) => {
  return useQuery({
    queryKey: ['gestbooks', startIndex, endIndex],
    queryFn: () => getGestBook({startIndex, endIndex}),
  })
}
