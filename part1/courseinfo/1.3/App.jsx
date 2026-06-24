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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  //const exercises1 = 10
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  //const exercises2 = 7
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 // const exercises3 = 14
  console.log(Content)

  return (
    <div>
      <Header titulo={course}></Header>
      <Content/>
      <Total exercises1={part1.exercises} exercises2 ={part2.exercises} exercises3={part3.exercises}></Total>
    </div>
  )
}




export default App
