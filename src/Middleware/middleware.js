export const middleware = (store) => (next) => (action) => {
    // console.log(action);
    // if (action.type == "TODODATA") {
    //     action.payload = [{
    //         "id": 11,
    //         "title": "update it",
    //         "status": true
    //     }]
    // }
    // if(typeof action =="function"){
    //     action(store.dispatch);
    //     return;
    // }
    next(action);
}