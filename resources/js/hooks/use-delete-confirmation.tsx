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
  getTitle?: (item: T) => string; // Fungsi untuk ambil title dari item
  onSuccess?: () => void;
}

export function useDeleteConfirmation<T extends { id: number }>({
  routeName,
  getParams,
  getTitle,
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

  const DeleteDialog = () => {
    const displayTitle = deleteItem && getTitle ? getTitle(deleteItem) : null;
    
    return (
      <AlertDialog
        open={!!deleteItem}
        onOpenChange={(open) => {
          if (!open) setDeleteItem(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {displayTitle ? (
                <>This will permanently delete "{displayTitle}". This action cannot be undone.</>
              ) : (
                "This action cannot be undone."
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteItem && handleDelete(deleteItem)}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  return {
    deleteItem,
    setDeleteItem,
    DeleteDialog,
  };
}