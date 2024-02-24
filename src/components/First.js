function First(){
    return(
        <>
        <h1>My first of Components</h1>
        </>
        
    );
}
export default First;
// Passing Props
export const Second = (props) => {

  return (
    <div className="w-full bg-slate-600">first {props.title}  amd second {props.name} 
    sdfs {props.id}
    </div>
  )
}
// Passing javascriptObject
export function Third( {p} ) {
  return (
    <div>Third {p}
    </div>
  )
}
