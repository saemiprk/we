import { useQuery } from '@tanstack/react-query'
import { getGestBook } from 'actions/gestBook'

const fetchGestBooks = (endIndex = 4) => {
    const data = getGestBook(endIndex);
    
    return data;
}

const useGestBooks = (endIndex: number) => {
  return useQuery({
    queryKey: ['gestbooks', endIndex],
    queryFn: () => fetchGestBooks(endIndex),
  })
}

export { useGestBooks, fetchGestBooks }
