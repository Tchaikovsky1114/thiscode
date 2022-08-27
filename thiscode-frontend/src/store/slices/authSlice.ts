import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {BaseQueryFn, createApi,FetchArgs,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


interface InitialStateTypes {
  userData: {
    email:string;
    username:string;
    token: string;
  }
}

interface UserRegisterTypes{
  email:string;
  password:string;
  username:string;
}

// return type,argument type, error type

interface UserData {
  email:string;
  password:string;
  username:string;
}
interface ReturnUserDataType {
  userData : {
    email: string
    token: string;
    username: string;
  }
}


const initialState:InitialStateTypes = {
  userData: {
    email: '',
    username: '', 
    token: ''
  }
}
export const fetchUserRegister = createAsyncThunk('auth/fetchUserRegister', async() => {
  
})


interface CustomError {
  data:string | null;
}

export const authApi = createApi({
  reducerPath:'auth/authApi',
  tagTypes:['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const userInfo = JSON.parse(localStorage.getItem('user')!);
      if(userInfo){
        const {userData:{token:getToken}} = userInfo
        headers.set('Authorization', `Bearer ${getToken}`)
      }
      return headers
    }
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  
  endpoints: (builder) => ( {
    login: builder.mutation<ReturnUserDataType,Partial<UserData>>({
      query: (data) => ({
        url:'auth/login',
        method:'POST',
        body: data,
      })
    }),
    register: builder.mutation<ReturnUserDataType,UserData>({
      query: (data) => ({
        url: 'auth/register',
        method:'POST',
        body: data
      })
    })
  }),
  
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    getToken(state,action:PayloadAction<InitialStateTypes["userData"]>){
      state.userData = action.payload
    },
    logout(state){
      localStorage.removeItem('user');
      state.userData = {
        email: '',
        username: '', 
        token: ''
      }
      window.location.pathname = '/login';
    }
  },
  extraReducers: (builder) => {
    
  }
})


export const {useRegisterMutation,useLoginMutation} = authApi;
export const authReducer = authSlice.reducer;
export const {getToken,logout} = authSlice.actions;







// arguments, result, error, definitionextraoptions, metadata
// createPost 요청을 보내고, 거기에 대해서 result (응답) 가 있을때만 { type: 'Posts', id: 'LIST' } 라는 태그를 가진 요청인 getPosts 요청을 다시 보내는 것입니다!
// export const postApi = createApi({
//   reducerPath: 'auth/postApi',
//   tagTypes: ['Posts'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_URL
//   }),
//   endpoints: (builder) => ({
    
//     getPosts: builder.query<string[],void>({
//       // baseUrl + posts
//       query: () => 'posts',
//       providesTags: [{type:'Posts', id: 'LIST'}]
//     }),
//     getPostById: builder.query({
//       query: (postId) =>  `posts/${postId}`,
//       providesTags: (result,error,postId) => [{type:'Posts', id: postId}],
//     }),
//     createPosts: builder.mutation<string,Test>({
//       query: ({data}) => ({
//         url: 'posts',
//         method: 'POST',
//         body: data
//       }),
//       invalidatesTags: (result) => result ? [{type:'Posts', id:'LIST'}] : []
//     })
//   })
// })
// export const {useGetPostsQuery,useCreatePostsMutation,useGetPostByIdQuery} = postApi;