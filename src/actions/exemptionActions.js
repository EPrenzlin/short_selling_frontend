  const API =  'http://localhost:3000'

  export const getExemptions = () => {
    return dispatch => {
      fetch(API + "/exemptions")
      .then(response => response.json())
      .then(exemptions => {
          console.log("in callback")
          dispatch({type:'SET_EXEMPTIONS', exemptions})
      })
      }
    }

  export const addExemption = (exemption) => {
    console.log(exemption)
    return dispatch => {
    fetch(API + "/exemptions", {
        method:'POST', 
        headers:{
        'Content-Type':'application/json',
      },
        body: JSON.stringify(exemption),
      })
      .then(response => response.json())
      .then(NewExemption => {
        console.log("In the console log of new Exemption", NewExemption)
        dispatch({type:'ADD_EXEMPTION', NewExemption})
      })
      .catch(error => console.log(error))
    }
  }

  export const deleteExemption = (id) => {
    return dispatch => {
    fetch(`http://localhost:3000/exemptions/${id}`,{
        method:'DELETE', 
        headers:{
          'Content-Type':'application/json',
        },
      })
      .then(exemption => {console.log("in the delete exemption action", exemption)
      dispatch({type:'DELETE_EXEMPTION', id})  
      })
      .catch(error => console.log(error))
    }
  }

  export const refreshExemption = () =>{
    console.log("in the refresh action")
    return dispatch =>{
     return  (dispatch({type:'REFRESH'}))
    }
  }

  

