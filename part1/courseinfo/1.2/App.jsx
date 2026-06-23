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
const Part = (props) =>{
  return(
    <div>
      <p>
        {props.parts} with {props.exercises} exercises
     </p>
    </div>
    )
}
const Content = () => {
  
  return ( 
    <div> 
      <Part  parts='Part-1 Fundamentals of React' exercises={10}/>
      <Part  parts='Part-2 Using props to pass data 'exercises={7}/>
      <Part  parts='Part-3 State of a component' exercises={14}/>
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
  //const part1 = 'Fundamentals of React'
  const exercises1 = 10
  //const part2 = 'Using props to pass data'
  const exercises2 = 7
  //const part3 = 'State of a component'
  const exercises3 = 14
  console.log(Content)

  return (
    <div>
      <Header titulo={course}></Header>
      <Content/>
      <Total exercises1={exercises1} exercises2 ={exercises2} exercises3={exercises3}></Total>
    </div>
  )
}




export default App
