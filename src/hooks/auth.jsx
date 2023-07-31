import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    async function signIn({email, password}) {

        try {
            const response = await api.post("/sessions", { email, password });
            setLoading(true);
            
            const { user, token } = response.data;

            localStorage.setItem("@coodesh:user", JSON.stringify(user));
            localStorage.setItem("@coodesh:token", token);

            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setData({ user, token });
            setLoading(false);
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível conectar.")
            }
            setLoading(false);
        }
    }

    async function signOut() {
        localStorage.removeItem("@coodesh:user");
        localStorage.removeItem("@coodesh:token");

        setData({})
    }
    
    
    useEffect(() => {
        const user = localStorage.getItem("@coodesh:user");
        const token = localStorage.getItem("@coodesh:token");

        api.defaults.headers.common['authorization'] = `Bearer ${token}`;

        if(user && token) {
            setData({
                user: JSON.parse(user),
                token,
            })
        }


    }, []);
 
    return(
        <AuthContext.Provider value={{
            user: data.user,
            loading,
            signIn,
            signOut
            }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth };