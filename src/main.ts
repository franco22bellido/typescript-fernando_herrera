import { charmander } from './bases/03-clases'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello there!!!</h1>
    <h1>${JSON.stringify(charmander)}!!!</h1>
  </div>
`
