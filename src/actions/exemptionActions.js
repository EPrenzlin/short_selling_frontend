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
        dispatch({type:'ADD_EXEMPTION',NewExemption})
      })
      .catch(error => console.log(error))
    }
  }


    // supposed to add the the exemption list 
    // input a delete as well
