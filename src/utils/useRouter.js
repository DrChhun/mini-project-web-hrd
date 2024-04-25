'use client'
import { useSearchParams } from 'next/navigation';


export const useRouter = () => {
    const router = useSearchParams();
    return router;
};