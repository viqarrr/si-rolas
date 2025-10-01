import { useState } from "react";
import { router } from "@inertiajs/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface UseDeleteConfirmationOptions<T> {
  routeName: string;
  getParams: (item: T) => Record<string, any>;
  onSuccess?: () => void;
}

export function useDeleteConfirmation<T extends { id: number; title?: string }>({
  routeName,
  getParams,
  onSuccess,
}: UseDeleteConfirmationOptions<T>) {
  const [deleteItem, setDeleteItem] = useState<T | null>(null);

  const handleDelete = (item: T) => {
    router.delete(route(routeName, getParams(item)), {
      onSuccess: () => {
        setDeleteItem(null);
        onSuccess?.();
      },
    });
  };

  const DeleteDialog = () => (
    <AlertDialog open={!!deleteItem} onOpenChange={() => setDeleteItem(null)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete "{deleteItem?.title}". This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteItem && handleDelete(deleteItem)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return {
    deleteItem,
    setDeleteItem,
    DeleteDialog,
  };
}
