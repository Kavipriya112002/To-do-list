import Header from "./Header";
import Cont from "./Cont";
import Foot from "./Foot";
import './index.css';
import {useState} from 'react'
import Input from "./Input";
import Search from "./Search";


function App() {
    const [items,setItems]=useState(JSON.parse(localStorage.getItem("todo_list"))
      
    );
        const [newItem ,setNewItem] = useState('')
        const [search,setSearch] = useState('')
        
        const addItem =(item)=>{
          const id=items.length ? items[items.length-1].id+1: 1;
          const addNewItem ={id, checked:false, item}
          const listItems=[...items, addNewItem]
          setItems(listItems)
          localStorage.setItem("todo_list",JSON.stringify(listItems))
        }

        const handleCheck=(id) => {
         const listItems=items.map((item)=>item.id===id?{...item, checked:!item.checked}:item)
         setItems(listItems) 
         localStorage.setItem("todo_list",JSON.stringify(listItems))
        }
        const handleDelete=(id) => {
          const listItems=items.filter((item)=>item.id!==id)
          setItems(listItems) 
          localStorage.setItem("todo_list",JSON.stringify(listItems))
         }
        const handleSubmit=(e)=>{
          e.preventDefault()
          if(!newItem) return;
          console.log(newItem)
          addItem(newItem)
          setNewItem('')
        }
         
    
    
  return (
    <div className="App">
        <Header title={"DAILY ACTIVITY"}/>
        <Input 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Cont items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}/>
        < Search
          search={search}
          setSearch={setSearch}
        />    
        <Foot length={items.length} />

    </div>
  );
}

export default App;
