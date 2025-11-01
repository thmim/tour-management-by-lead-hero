import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth"; 
import jwt from "jsonwebtoken";

export async function GET(req) {
  // Get logged-in user session
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // JWT secret key (Chatbase secret)
  const secret = process.env.CHATBOT_IDENTITY_SECRET;

  // Create JWT
  const token = jwt.sign(
    {
      user_id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      
    },
    secret,
    { expiresIn: "1h" }
  );

  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
