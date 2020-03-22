export interface ShoppingListItem {
    quantity: number;
    name: string;
}

const editShopingListModule = {
    namespaced: true,
    state: {
        id: "",
        items: [] as ShoppingListItem[]
    },
    mutations: {
        addItem(state: any, item: ShoppingListItem){
            state.items.push(item)
        },
        addItems(state: any, items: ShoppingListItem[]){
            state.items.push(...items)
        },
        removeItem(state: any, index: number) {
            state.items.splice(index, 1)
        },
        setId(state: any, id: string){
            state.id = id
        }
    },
    actions: {
        loadList: function({ commit }: any, id: string){
            // FIXME: Load list from REST call
        },
        saveList: function({ state }: any){
            // FIXME: Save list with REST call
            console.log("Saving the shopingList " + state.id + ": " + JSON.stringify(state.items))
        }
    }
}

export default editShopingListModule