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

    export const addExemption = (exemption) =>{
      return dispatch => {
        fetch(API + "/exemption",{
          method: "POST", 
          headers:{
            'Content-Type': 'application.json',
          }, 
          body:JSON.stringify({
            name: exemption.name, 
            isin: exemption.isin, 
            stock_market: exemption.stock_market
          })
        })
        .then(response => response.json())
        .then(obj => {
          dispatch({type:'ADD_EXEMPTION', obj})
        })
      }
    }


    // supposed to add the the exemption list 
    // input a delete as well
