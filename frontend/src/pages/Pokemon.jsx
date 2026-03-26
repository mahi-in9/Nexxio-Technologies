import pokemons from "../data/pokemons";
import usePokemon from "../hooks/usePokemon";

function Pokemon() {
  const { currentPokemon, index, next, prev, selectByName, isFirst, isLast } =
    usePokemon(pokemons);

  return (
    <div className="min-h-screen flex justify-center bg-[#b9cdcd]">
      <div className="w-full max-w-md p-2 bg-linear-to-b from-[#b9cdcd] to-[#739393] text-black flex flex-col">
        <select
          name="pokemon"
          onChange={(e) => selectByName(e.target.value)}
          className="flex min-w-full justify-center bg-white p-3 rounded font-semibold"
        >
          {pokemons.map((p) => (
            <option key={p.name} value={p.name} className="font-semibold">
              {p.name}
            </option>
          ))}
        </select>
        <main className=" grow">
          <div className="bg-[#ebebeb] mt-3 rounded p-6">
            <div className="flex justify-center ">
              <img
                src={currentPokemon.image}
                alt={currentPokemon.name}
                className="border rounded-full m-6 transition transform hover:scale-105 shadow-md shadow-gray-500"
              />
            </div>
            <h2 className="text-center text-2xl font-bold">
              {currentPokemon.name}
            </h2>
            <p className="text-center font-semibold mt-1">{currentPokemon.description}</p>
          </div>
        </main>
        <footer className="grid grid-cols-2  gap-6 align-bottom">
          <button
            disabled={isFirst}
            onClick={prev}
            className=" rounded p-2 bg-[#554f78] text-white font-semibold 
            hover:bg-[#423d5f] transition transform hover:scale-105 active:bg-gray-600 
            disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-[#554f78]"
          >
            Previous
          </button>
          <button
            disabled={isLast}
            onClick={next}
            className=" rounded p-2 bg-[#554f78] text-white font-semibold 
            hover:bg-[#423d5f] transition transform hover:scale-105 active:bg-gray-600 
            disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-[#554f78]"
          >
            Next
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Pokemon;
