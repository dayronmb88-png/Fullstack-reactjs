const Header = (props) => {
  
  console.log(props.titulo)
  return (
    <div>
      <h1>
        {props.titulo}
      </h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
     <p>
        Part-1 {props.part1} with {props.exercises1} exercises
      </p>
      <p>
        Part-2 {props.part2} with {props.exercises2} exercises
      </p>
      <p>
        Part-3 {props.part3} with {props.exercises3} exercises
      </p> 
    </div>
  )
}
const Total = (props) => {
  
  
  const  total = props.exercises1+props.exercises2+props.exercises3
  return (
    <div>
      <p>Number of exercises is {total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header titulo={course}></Header>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2 ={exercises2} exercises3={exercises3}></Content>
      <Total exercises1={exercises1} exercises2 ={exercises2} exercises3={exercises3}></Total>
    </div>
  )
}




export default App
