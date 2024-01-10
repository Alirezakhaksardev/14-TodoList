import React from 'react'
import ListItem from './ListItem'



function Lists({del , done , todos}) {

    if(todos.length <= 0){
        return(
            <div className='bg-danger p-3'>
                <h2 className='text-white text-center'>کاری برای انجام نیست!</h2>
            </div>
        )
    }

    return (
        <div className="listWrap">
            <ul className="list-group">
                {
                    todos && todos.map((todo ) => (
                        <ListItem key={todo.id} id={todo.id} title={todo.title} done={todo.done} delHandler={del} doneHandler={done} />
                    )) 
                }
            </ul>
        </div>
    )
}

export default Lists