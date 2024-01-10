import { useState , useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {

  const getTodos = () => {
    const data = localStorage.getItem('todos');
    if(data)
      return JSON.parse(data);
    else
      return [];
  }

  const [error , setError] = useState(null);
  const [FormValue, setFormValue] = useState("");
  const [todos , setTodos] = useState(getTodos);


  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const submitHandler = (e) =>{
    e.preventDefault();
    if(FormValue.length < 5) {setError('کار خود را وارد کنید (حداقل 5 کاراکتر)'); return false;}
    setTodos([...todos , {id : Date.now() ,title:FormValue , done : false}]);
    setFormValue('');
    setError(null);
  }

  const delHandler = (id) => {
    if(window.confirm("Are You sure?")){
      const newtodos = todos.filter(todos => todos.id != id);
      setTodos(newtodos);
    }
  };
  const doneHandler = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    const duplicateTodos = [...todos];
    duplicateTodos[index] = {
      id: todos[index].id,
      title:todos[index].title,
      done : !todos[index].done
    }
    setTodos(duplicateTodos)
  };

  return (
    <Layout>
      <Header />
      <Form value={FormValue} change={e=> setFormValue(e.target.value)} submit={submitHandler} error={error} />
      <Lists del={delHandler} done={doneHandler} todos={todos} />
    </Layout>
  );
}

export default App;
