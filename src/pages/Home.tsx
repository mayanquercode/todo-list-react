import CardCollection from "../components/CardCollection";

import Icons from "../components/Icons";

function Home() {
  return (
    <div className="h-screen bg-slate-900">
      {/* nav */}
      <div className="h-16 bg-slate-800">
        <section className="w-10/12 h-full mx-auto flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <a
              className="flex items-center gap-2 text-lg font-bold text-gray-100 hover:text-gray-300 transition-colors duration-300"
              href="#"
            >
              <Icons name="microsoft" />
              Dashboard
            </a>
            <a
              className="flex items-center gap-2 text-lg font-bold text-indigo-500 hover:text-indigo-300 transition-colors duration-300"
              href="#"
            >
              <Icons name="inbox" /> Collection
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              className="flex items-center gap-2 text-2xl font-bold text-gray-100 hover:text-gray-300 transition-colors duration-300"
              href="#"
            >
              <Icons name="plusSquare" />
            </a>
            <a
              className="flex items-center gap-2 text-2xl font-bold text-gray-100 hover:text-gray-300 transition-colors duration-300"
              href="#"
            >
              <Icons name="search" />
            </a>
            <a
              className="flex items-center gap-2 text-2xl font-bold text-gray-100 hover:text-gray-300 transition-colors duration-300"
              href="#"
            >
              <Icons name="bell" />
            </a>
            <a href="#" className="block w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/76624955?s=96&v=4"
                alt="User Avatar"
                className="object-cover w-full h-full"
              />
            </a>
          </div>
        </section>
      </div>
      {/* main */}
      <section className="w-3/5 p-11 mx-auto">
        <div className="flex flex-row items-center justify-between mb-6">
          <h2 className="text-4xl font-black text-gray-100 m-0">Coloeccion</h2>
          <button className="text-3xl text-gray-100 hover:text-gray-300 transition-colors duration-300">
            <Icons name="threeDots" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <CardCollection id="1" name="Personal" icon="houses" />

          <button className="flex items-center justify-center p-4 rounded-lg border border-slate-800 hover:bg-slate-800  transition-colors duration-300">
            <Icons name="plus" className="text-9xl text-gray-100 opacity-65" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
