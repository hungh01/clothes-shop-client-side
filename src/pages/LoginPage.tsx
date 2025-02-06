import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full shadow-lg rounded-2xl overflow-hidden bg-white max-w-2xl mx-auto pl-10">
        {/* Left - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Sign in</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="p-2 bg-gray-200 rounded-full">🔵</button>
            <button className="p-2 bg-gray-200 rounded-full">🔴</button>
            <button className="p-2 bg-gray-200 rounded-full">🔗</button>
          </div>
          <p className="text-center text-gray-500 text-sm mb-4">or use your account</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
            <p className="text-sm text-gray-500 text-right cursor-pointer">Forgot your password?</p>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              SIGN IN
            </button>
          </form>
        </div>

        {/* Right - Signup Section */}
        <div className="w-1/2 flex flex-col justify-center items-center text-white bg-gradient-to-r from-orange-400 to-red-500 p-8">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <p className="text-center text-sm mb-6">
            Enter your personal details and start your journey with us
          </p>
          <button className="border border-white py-2 px-6 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
