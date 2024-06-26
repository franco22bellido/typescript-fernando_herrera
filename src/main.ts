import './style.css'
import { pokemons } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello!!!</h1>
    <h2>pokemons : ${pokemons.map((pokemon)=> JSON.stringify(pokemon))}</h2>
  </div>
`
