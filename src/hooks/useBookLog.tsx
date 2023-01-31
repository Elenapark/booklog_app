import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBooklog, saveBooklog } from "../api/firebase";
import { useAuth } from "../context/AuthContext";
import { ContentState, RawDraftContentState } from "draft-js";
import { ISearchBookItemInfo } from "../types";

export interface ISaveBookLogProps {
  info: ISearchBookItemInfo;
  content: ContentState;
}

export default function useBookLog() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  //1. get booklog from firebase

  const booklogQuery = useQuery(
    ["booklog", user?.uid],
    () => getBooklog(user!.uid),
    {
      enabled: !!user?.uid,
    }
  );

  //2. save booklog to firebase
  const booklogMutation = useMutation(
    (item: ISaveBookLogProps) => saveBooklog({ uid: user?.uid, item }),
    {
      onSuccess: () => queryClient.invalidateQueries(["booklog", user?.uid]),
    }
  );

  return {
    booklogQuery,
    booklogMutation,
  };
}
