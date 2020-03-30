export function search(searchTerm) {
  return {
    types: ['SEARCH','SEARCH_SUCCESS','SEARCH_ERROR'],
    payload: {
      request:{
        url:'/todos/' + searchTerm
      }
    }
  }
}
