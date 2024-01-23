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
    <div>first {props.title}</div>
  )
}
// Passing javascriptObject
export function Third( {p} ) {
  return (
    <div>Third {p}</div>
  )
}
