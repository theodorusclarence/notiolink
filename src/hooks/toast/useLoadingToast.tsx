import { useToasterStore } from 'react-hot-toast';

/**
 * Hook to get information whether something is loading
 * @returns true if there is a loading toast
 * @example const isLoading = useLoadingToast();
 */
export default function useLoadingToast(): boolean {
  const { toasts } = useToasterStore();
  const isLoading = toasts.some((toast) => toast.type === 'loading');
  return isLoading;
}
