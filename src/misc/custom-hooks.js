import { useReducer,useEffect,useState } from "react";
import { apiGet } from "./config";

function showReducer(prevState,action){
 switch(action.type) 
 {
     case 'ADD':{
         return  [...prevState,action.showId]
     }

     case 'REMOVE':{
         return prevState.filter((showId)=> showId !== action.showId )
     }
 
     default:
     return prevState
    }

}


function usePersistedReducer(reducer,initialState,key){

     const [state, dispatch] = useReducer(reducer, initialState, initial=>{
         const persisted = localStorage.getItem(key)

         return persisted? JSON.parse(persisted):initial
     });

     useEffect(() => {
         
         
localStorage.setItem(key,JSON.stringify(state))
        
     }, [state,key])

     return [state,dispatch]
}

export function useShows(key='shows'){
    return usePersistedReducer(showReducer,[],key)
}

export function useLastQuery(key = 'lastQuery'){
  
    const [input,setInput] = useState(()=>{
        
            const persisted = sessionStorage.getItem(key)
   
            return persisted? JSON.parse(persisted) : '';
    });

    const setPersistedInput = newState => {
     setInput(newState);
     sessionStorage.setItem(key,JSON.stringify(newState));
    };
     return [input, setPersistedInput];
}

const reducer = (prevState,action) => {
    switch(action.type){
    
        case 'FETCH_SUCCESS' : {
             return {isLoading:false,error:null,show:action.show}
        }
        case 'FETCH_FAIL': {
            return {...prevState,isLoading:false,error:action.error}
        }
    
        default:
            return prevState
    }
    }

export function useShow(showId){
    const [state, dispatch] = useReducer(reducer, 
        {
        show:null,
        isLoading:true,
        error:null
        }
        )
    
    useEffect(() => {
        
        let isAmount = true;

         apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(results => {
            
        if(isAmount){
            // setShow(results)
            // setIsLoading(false)
            dispatch({type:'FETCH_SUCCESS',show:results})
        }
         }
            ).catch((err)=>{
                if(isAmount){
            //   setError(err.massage)
            //   setIsLoading(false)
            dispatch({type:'FETCH_FAIL',error:err.message})
                }
            })

            return ()=>{
                isAmount=false
            }
        }, [showId])
        return state
}