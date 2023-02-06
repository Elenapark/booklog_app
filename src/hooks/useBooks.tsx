import { useQuery } from "@tanstack/react-query";
import { getRecommendedBooks } from "../api/firebase";

export default function useBooks() {
  const getBooksQuery = useQuery(["recommended"], () => getRecommendedBooks(), {
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { getBooksQuery };
}
