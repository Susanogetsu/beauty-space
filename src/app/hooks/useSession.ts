import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth/next';
import { Session } from 'next-auth';

export default async function useSession() {
    const session: Session | null = await getServerSession(authOptions);

    return session
}