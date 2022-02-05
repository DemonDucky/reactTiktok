import "./App.css"
import Body from "./Body"
import { useState, useCallback } from "react"

// const list = [
//   {
//     id: 0,
//     value: 'test1',
//   },
//   {
//     id: 1,
//     value: 'test2',
//   },
//   {
//     id: 2,
//     value: 'test3',
//   },
//   {
//     id: 3,
//     value: 'test4',
//   },
// ]

// function App() {

//   const [check, setcheck] = useState([])

//   function handleCheck(id) {

//     if (check.includes(id)) {
//       return setcheck(check.filter((value) => value != id ))
//     }else {
//       return setcheck([...check, id])
//     }
//   }

//   function handleSubmit() {
//     return console.log([check])
//   }

//   return (
//     <div className="App">
//       {list.map(function (value, index) {
//         return <div key={index}>
//           <input onChange={() => handleCheck(value.id)} type="checkbox" />{value.value}
//         </div>
//       })}
//       <button onClick={handleSubmit}>Increase</button>
//     </div>
//   );
// }

// function App() {

//   const [works, setWorks] = useState(JSON.parse(localStorage.getItem('works')))
//   const [work, setWork] = useState('')

//   function handleChange(e) {
//     setWork(e.target.value)
//   }

//   function handleSubmit() {
//     setWorks((prev) => {
//       const newWorks = [...prev, work]

//       localStorage.setItem('works', JSON.stringify(newWorks))

//       return newWorks
//     })

//     setWork('')
//   }

//   return (
//     <div className="App">
//       <div>
//         <input value={work} onChange={handleChange} type="text" />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//       <div>
//         <ul>
//           {works.map((value, index) => <li key={index}>{value}</li>)}
//         </ul>
//       </div>
//     </div>
//   )
// }

function App() {
    return (
        <>
            <Body />
        </>
    )
}

export default App
