import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-rubik max-w-screen-xl mx-auto rounded-xl shadow-lg">
  {/* Left Section - Login Form */}
  <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 bg-white">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mx-auto">WELCOME BACK</h2>
    <p className="text-gray-500 mx-auto text-sm md:text-base">Welcome back! Please enter your details.</p>

    <form onSubmit={handleLogin} className="mt-4 md:mt-6">
      <div className="mb-3 md:mb-4">
        <label className="block text-gray-700 font-medium text-sm md:text-base">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 md:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
          required
        />
      </div>

      <div className="mb-3 md:mb-4">
        <label className="block text-gray-700 font-medium text-sm md:text-base">Password</label>
        <input
          type="password"
          placeholder="**********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 md:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm md:text-base"
          required
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs md:text-sm">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <span className="cursor-pointer hover:underline mt-2 md:mt-0">Forgot password</span>
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 mt-3 md:mt-4 rounded-lg font-semibold hover:bg-red-600 transition text-sm md:text-base"
      >
        Sign in
      </button>

      <button
        type="button"
        className="w-full flex items-center justify-center border mt-3 md:mt-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm md:text-base"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google"
          className="w-4 h-4 md:w-5 md:h-5 mr-2"
        />
        Sign in with Google
      </button>
    </form>

    <p className="text-xs md:text-sm text-center text-gray-500 mt-3 md:mt-4">
      Don’t have an account?
      <span className="text-red-500 cursor-pointer hover:underline ml-1">
        Sign up for free!
      </span>
    </p>
  </div>

  {/* Right Section - Image */}
  <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-100">
    <img
      src="/images/login.svg"
      alt="Illustration"
      className="w-2/3 md:w-3/4"
    />
  </div>
</div>
  );
};

export default LoginPage;
