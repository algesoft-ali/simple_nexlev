import { baseApi } from "@/lib/baseApi";
import { setUser } from "./userSlice";
import { setCookie } from "cookies-next";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ----- login
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/user/login",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setCookie("accessToken", data?.data?.accessToken);
          dispatch(setUser(data?.data?.user));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // ----- register
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/user/register",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setCookie("accessToken", data?.data?.accessToken);
          dispatch(setUser(data?.data?.user));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // ----- get all users
    getAllUsers: builder.query({
      query: () => "/user",
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAllUsersQuery,
} = userApi;
