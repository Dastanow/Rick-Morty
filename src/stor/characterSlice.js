import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import charcerApi from "../Api/charTerapi";
export const getAllcharakters = createAsyncThunk( 
    'charackter/getAllCharakter', 
    async (_, {dispatch}) => { 
        try {
            const data = await charcerApi.getAllCharacter() 
            dispatch(setCharecter({character: data.results}))
        } catch (error) {
            console.log(error);
        }
    }
)
export const getCharakter = createAsyncThunk( 
    'charackter/getCharakter', 
    async ({id}, {dispatch}) => { 
        try {
            const data = await charcerApi.getcharacter({id}) 
            dispatch(setCharecter({character: data.results}))
        } catch (error) {
            console.log(error);
        }
    }
)
export const getFilteredCharakter = createAsyncThunk( 
    'charackter/getFilteredCharakter', 
    async ({page, status, gender, name, species}, {dispatch}) => { 
        try {
            const data = await charcerApi.gerfiltercharac({page, status, gender, name, species}) 
            console.log(data);
            dispatch(setCharecter({character: data.results}))
            
        } catch (error) {
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
        setCharecter(state, actions){ 
            state.character = actions.payload.character
        },
        setOllPage(state, actions){ 
            state.ollPage = actions.payload.ollPage
        },
        setDefin(state, actions){ 
            state.defineCharackter = actions.payload.defint
        },
    }

})
export const {setCurrentPage,setCharecter,setOllPage} = characterSlise.actions
export default characterSlise.reducer