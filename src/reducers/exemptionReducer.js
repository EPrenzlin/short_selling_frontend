 
const exemptionReducer = (state= {exemptions:[] }, action) => {

    switch (action.type) {
    case 'SET_EXEMPTIONS':
    console.log(action)
    return {
            ...state,
            exemptions: action.exemptions 
        }

    case 'ADD_EXEMPTION':
        console.log(action) 
        return{
            ...state, 
            exemptions:[...state.exemptions,action]
        }
        
    default:
        return state;
    }
  }

  export default exemptionReducer 
