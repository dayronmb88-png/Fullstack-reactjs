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
const Content = (props) => {
  
  return ( 
    <div> 
      <Part  parts={props.parts} with exercises={props.exercises}/>
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header titulo={course}></Header>
      <Content parts={parts[0].name} exercises={parts[0].exercises}/>
      <Content parts={parts[1].name} exercises={parts[1].exercises}/>
      <Content parts={parts[2].name} exercises={parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2 ={parts[1].exercises} exercises3={parts[2].exercises}></Total>
    </div>
  )
}




export default App
