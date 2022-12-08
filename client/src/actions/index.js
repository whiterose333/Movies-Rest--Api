import axios from 'axios';

export function getMovies(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/",{

        });
       
        return dispatch({
            type: "GET_MOVIES",
            payload: json.data
        })
    }
}

export function findDetail(id){
    return async function(dispatch){
        try{
            var json =await axios.get("http://localhost:3001/" + id);
            return dispatch({
                type: "FIND_DETAIL",
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function setDetail(payload){
    return {type: "SET_DETAIL", payload: payload};
}
