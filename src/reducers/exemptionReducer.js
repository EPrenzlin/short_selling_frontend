 
const exemptionReducer = (state= {exemptions:[] }, action) => {

    switch (action.type) {
    case 'SET_EXEMPTIONS':
    console.log(action)
    return {
            ...state,
            exemptions: action.exemptions 
        }
        default:
        return state;
    }
  }

  export default exemptionReducer 
