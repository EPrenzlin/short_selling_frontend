 
const exemptionReducer = (state= {exemptions:[], newExemptions:[], searchResult:[], errors:[]}, action) => {

    switch (action.type) {
    case 'SET_EXEMPTIONS':
    console.log(action)
    return {
            ...state,
            exemptions: action.exemptions, 
        }

    case 'ADD_EXEMPTION':
        console.log("IN THE ADD EXEMPTION", action) 
        return{
            ...state, 
            exemptions:[...state.exemptions,action.NewExemption],
            newExemptions:[...state.newExemptions,action.NewExemption]
        }

    case 'DELETE_EXEMPTION':
        console.log("IN the delete exemption reducer", action)
        return{
            ...state, 
            exemptions: state.exemptions.filter(exemption => exemption.id !== action.id), 
            newExemptions:state.newExemptions.filter(exemption => exemption.id !== action.id)
        }

    case 'REFRESH':
        console.log("in the refresh reducer")
        return{
            ...state,
            exemptions:[...state.exemptions],
            newExemptions:[] 

        }

    case 'SEARCH_FORM_STATE':
        console.log("in the search form reducer")
        const foundItem = state.exemptions.filter(exemption =>{if(Object.values(exemption).includes(action.search)) { return exemption}})
        return{
            ...state, 
            exemptions:[...state.exemptions], 
            newExemptions:[...state.newExemptions], 
            searchResult: foundItem
        }

    default:
        return state;
    }
  }

  export default exemptionReducer 


