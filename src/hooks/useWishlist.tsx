import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { isHtmlElement } from "react-router-dom/dist/dom";
import {
  getWishList,
  removeFromWishList,
  saveToWishList,
} from "../api/firebase";
import { useAuth } from "../context/AuthContext";
import { IBookItemInfo } from "../types";

export type WishListType = Pick<
  IBookItemInfo,
  "id" | "title" | "referenceIdentifier"
>;

export default function useWishlist() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const wishlistQuery = useQuery(
    ["wishlist", user?.uid],
    () => getWishList(user!.uid),
    {
      enabled: !!user?.uid,
    }
  );

  const wishlistMutation = useMutation(
    (item: WishListType) => saveToWishList({ uid: user?.uid, item }),
    {
      onSuccess: () => queryClient.invalidateQueries(["wishlist", user?.uid]),
    }
  );

  const removeWishList = useMutation(
    (item: WishListType) => removeFromWishList({ uid: user?.uid, item }),
    {
      onSuccess: () => queryClient.invalidateQueries(["wishlist", user?.uid]),
    }
  );

  return { wishlistQuery, wishlistMutation, removeWishList };
}
