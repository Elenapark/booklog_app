import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IWishlistProps, saveToWishList } from "../api/firebase";
import { useAuth } from "../context/AuthContext";

export default function useWishlist() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const wishlistMutation = useMutation(
    (item: IWishlistProps) => saveToWishList(user!.uid, item),
    {
      onSuccess: () => queryClient.invalidateQueries(["wishlist", user!.uid]),
    }
  );

  return { wishlistMutation };
}
