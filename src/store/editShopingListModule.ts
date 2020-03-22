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
        init: function({ commit }: any) {
            // Fill some dummy values
            const newItem = {
                quantity: 40,
                name: "Packungen Toilettenpapier"
            } as ShoppingListItem
            commit("addItem", newItem)

            const newItems = [
                {
                    quantity: 3,
                    name: "Bananen (möglichst grün)"
                },
                {
                    quantity: 1,
                    name: "Paket Pfirsiche"
                }
            ] as ShoppingListItem[]

            commit("addItems", newItems)
        },
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