// app/(auth)/layout.jsx
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100">
      {children}
    </div>
  );
}