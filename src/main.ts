import './style.css'
import { name , age} from './bases/01-types.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello Vite!!!</h1>
    <h2>your name is: ${name}</h2>
    <h2>and your age is: ${age}</h2>
  </div>
`
