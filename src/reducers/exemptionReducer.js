 
const exemptionReducer = (state= {exemptions:[], newExemptions:[], searchResult:[] }, action) => {

    switch (action.type) {
    case 'SET_EXEMPTIONS':
    return {
            ...state,
            exemptions: action.exemptions, 
        }

    case 'ADD_EXEMPTION':
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
            newExemptions:state.newExemptions.filter(exemption => exemption.id !== action.id), 
            searchResult:state.searchResult.filter(exemption => exemption.id !== action.id)
        }

    case 'REFRESH':
        return{
            ...state,
            exemptions:[...state.exemptions],
            newExemptions:[] 
        }

    case 'SEARCH_FORM_STATE':
            const searchValue = action.search.toString().toUpperCase().replace(/ /g, "") 
            const foundItem = state.exemptions.filter(exemption =>  
                {
                const allValues = Object.values(exemption).map(exemption => exemption.toString().toUpperCase().replace(/ /g, ""))
                if(allValues.includes(searchValue))
                { return exemption }}
                )



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


