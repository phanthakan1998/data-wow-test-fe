"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteConcert } from "@/services/concert.service";
import { IErrorAlert } from "@/interfaces/components";

export function useConcertDetail() {
  const [indexTab, setIndexTab] = useState(0);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [alert, setAlert] = useState<IErrorAlert | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSuccessCreate = () => {
    setIndexTab(0);
    setAlert({
      type: "success",
      message: "Create successfully",
    });
    setIsOpenAlert(true);
    router.refresh();
  };

  const onDeleteConcert = async (id: string) => {
    setLoading(true);
    try {
      await deleteConcert(id);

      setAlert({
        type: "success",
        message: "Delete successfully",
      });
      setIsOpenAlert(true);
      router.refresh();
    } catch {
      setAlert({
        type: "error",
        message: "Delete failed",
      });
      setIsOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    indexTab,
    setIndexTab,
    isOpenAlert,
    setIsOpenAlert,
    alert,
    onSuccessCreate,
    onDeleteConcert,
    loading,
  };
}
