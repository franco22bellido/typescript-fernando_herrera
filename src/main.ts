import './style.css'
import { pokemonIds, pokemon } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello!!!</h1>
    <h2>${pokemon}</h2>
    <h2>${pokemonIds}</h2>
  </div>
`
