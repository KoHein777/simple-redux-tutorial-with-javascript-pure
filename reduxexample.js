

/* This is "state" . State must be object and you can see state as an entity */
let state={
    todos:[
        {
            text:'Eat food',
            completed:true
        },
        {
            text:'Exercise',
            completed:false
        }
    ],
    visibilityFilter : 'SHOW_COMPLETED'
}


/* This is "action" . Action must have type and payloads(information or data ) */
let action1={type:'ADD_TODO',text:'Go to swimming pool'}
let action2={type:'TOGGLE_TODO',index:1}
let action3={ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }


/* This is "reducer" ,Reducer is only function that receive two arguments action and state 
and we can update state inside reducer and return new state after updating  */
function visibilityFilter(visibleFilter='SHOW_ALL',action){
    if(action.type === 'SET_VISIBILITY_FILTER'){
        return action.filter
    }else
    return visibleFilter
}

/* This is "reducer" ,Reducer is only function that receive two arguments action and state 
and we can update state inside reducer and return new state after updating  */

function todos(state= [] ,action){
    switch(action.type){
        case 'ADD_TODO': 
        return state.concat([{text : action.text,completed:true}])
        case 'TOGGLE_TODO':
      return state.map((stateArr, index) =>
                        action.index === index
                            ? { text: stateArr.text, completed: !stateArr.completed }
                            : stateArr
                    )
    default:
      return state
    }
}

/* This is reducer caller function . we give state and action*/
function todoApp(state ={} , action){


    return {
        todos : todos(state.todos , action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}

/* This is initial of our app */
let result=todoApp(state,action1)

/* finally result */
console.log('result ::  ',result)