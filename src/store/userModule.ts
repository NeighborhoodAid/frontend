const userModule = {
    namespaced: true,
    state: {
        email: "",
        stayLoggedIn: false,
        sessionToken: ""
    },
    mutations: {
        setEmail(state: any, email: string){
            state.email = email
        },
        setStayLoggedIn(state: any, stayLoggedIn: boolean){
            console.log("switch" + stayLoggedIn)
            state.stayLoggedIn = stayLoggedIn
        },
        setSessionToken(state: any, token: string){
            state.sessionToken = token
        }
    },
    actions: {
        init: function({ commit }: any) {
            let sessionToken = localStorage.getItem("sessionToken")
            if(sessionToken === null){
                sessionToken = "";
            }
            commit("setSessionToken", sessionToken)
        },
        login: async function ({ state, commit }: any, password: string) {
            // FIXME: Add REST call here:
            console.log("Login with " + state.email + " and " + password + "; stay logged in: " + state.stayLoggedIn)

            const sessionToken = "dummyToken"
            if(state.stayLoggedIn){
                localStorage.setItem("sessionToken", sessionToken)
            }
            commit("setSessionToken", "anyToken")
        },
        logout: async function ({ state, commit }: any) {
            localStorage.removeItem("sessionToken")
            commit("setSessionToken", "")

            // FIXME: Add REST call here
            console.log("Logout with " + state.stayLoggedIn)
        }
    },
    getters: {
        isLoggedIn: function (state: any): boolean {
            return state.sessionToken !== ""
        }
    }
}

export default userModule