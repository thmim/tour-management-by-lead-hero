import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";


export async function getUserRole() {
  const session = await getServerSession(authOptions);

  if (!session?.user) return null;

  
  return session.user.role;
}
