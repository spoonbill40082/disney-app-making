import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  photoURL: "",
  displayName: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //로그인을 했을 때 setUser를 호출해 구글에서 전달받은 데이터를 initialState에 넣어준다.
    //로그인을 했을 때 removeUser를 호출해 구글에서 전달받은 데이터를 초기화시킨다.
    setUser: (state, action) => {
      // 로그인 시 setUser를 호출하여 구글에서 전달받은 데이터를 initialState에 넣어줍니다.
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      // 사용자가 로그아웃하거나 세션 만료 시 removeUser를 호출하여 사용자 데이터를 초기화합니다.
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.displayName = "";
    }


  }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer
