# Next JS
### simple code on next js 
```
export default function Home() {
  return (
    <h1>hy there</h1>
  )
}
```
Accessing variables 
```
const person = {
  name: 'Allen',
  age: '25',
  city: 'karachi'
};
export default function Home() {
  return (
    <div className="bg-red-600">
      hy {person.name}
    </div>
  )
}
```
Using Image
```
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-red-600">
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
    </div>
  )
}
```
increment funcinallity
```
'use client' //always at the top of file
import { useState } from 'react

export default function Home() {
  
  let [count, setCount] = useState(0);

  let handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="text-center">
      <h1> {count} </h1>
      <button className="bg-slate-950 px-3 rounded" onClick={handleButtonClick}>
        button 
      </button>
    </div>
  )
}
```
objects and props
```
// Passing Props
export const Second = (props) => {
  return (
    <div>first {props.title}</div>
  )
}

// Passing javascriptObject

export function Third( {p} ) {
  return (
    <div>Third {p}</div>
  )
}
export default function Home() {
  return (
    <>
    <Second title=" Hi 2"/>
    <Third p = 'i am asdg'/>
    </>
  )
}

```