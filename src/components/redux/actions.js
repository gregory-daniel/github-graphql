export const nextPage = forwardCursor =>{
    return{
        type: "NEXT_PAGE",
        payload: forwardCursor
    }
};

export const prevPage = backCursor =>{
    return{
        type: "PREV_PAGE",
        payload: backCursor
    }
};

export const newSearch = () =>{
    return {
        type: "NEW_SEARCH"
    }
}

export const resetCursor = pageData =>{
    return{
        type: "RESET_CURSOR",
        payload: pageData
    }
}

export const toggleRest = ()=>{
    return{
        type: "SHOW_REST"
    }
}

export const getIssueCount = count =>{
    return{
        type: "ISSUE_TOTAL",
        payload: count
    }
}

export const getLanguage = item =>{
    return {
        type: "LANG",
        payload: item
    }
}

export const getLabel = item =>{
    return {
        type: "LABEL",
        payload: item
    }
}