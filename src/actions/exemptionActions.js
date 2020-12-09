  const API =  'http://localhost:3000'

  export const fetchExemptions = () => {
    return dispatch => {
      fetch(API + "/exemption")
      .then(response => response.json())
      .then(exemptions => {
          console.log("in callback")
          dispatch({type:'SET_EXEMPTIONS', exemptions})
      })
      }
    }

    // export const addExemption = () => {
    //     return dispatch =>{
    //         fetch(API + "") 
    //         .then(response => response.json()) 
    //         .then(obj => console.log(obj))
    //     }
    // }

    // supposed to add the the exemption list 
    // input a delete as well
