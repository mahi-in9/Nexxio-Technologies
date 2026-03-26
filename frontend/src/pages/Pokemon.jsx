import pokemons from "../data/pokemons";
import usePokemon from "../hooks/usePokemon";

function Pokemon() {
  const { currentPokemon, index, next, prev, selectByName, isFirst, isLast } =
    usePokemon(pokemons);

  return (
    <div className="min-h-screen flex justify-center  ">
      <div className="w-full max-w-sm  p-2 bg-[#b9cdcd] text-black">
            
      </div>
    </div>
  );
}

export default Pokemon;
