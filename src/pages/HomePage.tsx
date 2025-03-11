import Header from "../layouts/Header";

const FashionPage = () => {
  return (
    <div className="bg-[#fbeee6] min-h-screen p-8 font-sans">
      {/* Header */}
        <Header />
      {/* Main Content */}
      <main className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold text-black leading-tight">
            FASHION FOR SHOES & PANTS
          </h2>
          <p className="mt-4 text-gray-600">
            Assets are the items your company owns that can future economic benefit abilities.
          </p>
          <button className="mt-6 bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500">
            →
          </button>
        </div>
        
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Shoes"
            className="rounded-lg shadow-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-lg">
            ▶
          </button>
        </div>
      </main>
      
      {/* Extra Sections */}
      <section className="mt-12 grid grid-cols-2 gap-6">
        <div className="flex items-center space-x-4">
          <div className="text-orange-500">⭐⭐⭐⭐⭐</div>
          <p className="text-gray-700">The comfiest clothing with a finer tip away</p>
        </div>
        
        <div className="text-right">
          <span className="text-4xl font-bold text-black">19</span>
          <span className="text-gray-500">/490</span>
          <p className="text-black">MEN'S COLLECTION</p>
        </div>
      </section>
    </div>
  );
};

export default FashionPage;
