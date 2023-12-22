import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import charcerApi from "../Api/charTerapi";
export const getAllcharakters = createAsyncThunk( 
    'charackter/getAllCharakter', 
    async (_, {dispatch}) => { 
        try {
            const data = await charcerApi.getAllCharacter() 
            dispatch(setCharecter(data.results))
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
)
export const getCharakter = createAsyncThunk( 
    'charackter/getCharakter', 
    async (id, {dispatch}) => { 
        try {
            const data = await charcerApi.getcharacter({id}) 
            dispatch(setCharack(data.results))
        } catch (error) {
            console.log(error);
        }
    }
)
export const getFilteredCharakter = createAsyncThunk( 
    'charackter/getFilteredCharakter', 
    async ({page, status, gender, name, species,}, {dispatch}) => { 
        try { 
                const data = await charcerApi.gerfiltercharac( {page, status, gender, name, species,  }) 
                dispatch(setOllPage({ollPage: data.data.info.pages}))
                dispatch(setCharecter(data))
        } catch (error) {
            if(error.response.data.error){ 
                dispatch(setCurrentPage({page:1}))
            }
        }
    }
)
export const getcHaracter = createAsyncThunk(
    'charackter/getcharacter',
    async ({id}, {dispatch}) => {
        try{
            const data = await charcerApi.getcharacter({id})
            console.log(data);
            dispatch(setCharecter(data.results))
        } catch(error) {
            console.log(error);
        }
    }
)
const characterSlise = createSlice({
    name: 'active',
    initialState: {
        curentPage: 1,
        character: [],
        ollPage: null, 
        defineCharackter: null
    },
    reducers: {
        setCurrentPage(state, actions){ 
            state.curentPage = actions.payload.page
        },
        setCharecter(state, action){ 
            state.character = action.payload
        },
        setOllPage(state, actions){ 
            state.ollPage = actions.payload.ollPage
        },
        setDefin(state, actions){ 
            state.defineCharackter = actions.payload.defint
        },
        setCharack(state, action){ 
           return {
             ...state,
             character: [...action.payload]
        }
        },
    }

})
export const {setCurrentPage,setCharecter,setOllPage, setCharack} = characterSlise.actions
export default characterSlise.reducer