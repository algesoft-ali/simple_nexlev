"use client";

import {
  useGetAllUsersQuery,
  useGetUserQuery,
} from "@/lib/features/user/userApi";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../shared/PrimaryButton";
import { IUser } from "@/interfaces/common.interface";
import { getCookie } from "cookies-next";

const UsersTable = () => {
  // ----- hooks
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const { isLoading: userLoading, isSuccess: userSuccess } = useGetUserQuery(
    {},
    { skip: getCookie("accessToken") ? false : true }
  );
  const { data: allUsers, isLoading } = useGetAllUsersQuery(
    {},
    { skip: !user || user.role !== "admin" }
  );

  useEffect(() => {
    if ((!user || user.role !== "admin") && userSuccess) {
      toast.error("You are not authorized");
      router.push("/");
    }
  }, [user, router, userSuccess]);

  if (isLoading || userLoading)
    return (
      <div className="h-[calc(100vh-90px)] grid place-items-center">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="container py-20">
      <div className="flex items-center justify-between gap-6">
        <h2 className="text-3xl font-semibold">
          Users: {allUsers?.data?.length || 0}
        </h2>

        <PrimaryButton>Add User</PrimaryButton>
      </div>

      {/* Table */}
      <table className="w-full mt-10">
        <thead>
          <tr className="bg-neutral-200 text-neutral-600 text-left">
            <th className="font-semibold p-3">ID</th>
            <th className="font-semibold p-3">Name</th>
            <th className="font-semibold p-3">Email</th>
            <th className="font-semibold p-3">Role</th>
            <th className="font-semibold p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.data?.map((user: IUser) => (
            <tr key={user.id} className="border-b border-neutral-400">
              <td className="p-3">
                <strong>{user.id}</strong>
              </td>
              <td className="p-3">
                <strong>{user.name}</strong>
              </td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 uppercase">{user.role}</td>
              <td className="p-3 text-end">
                <PrimaryButton>Edit</PrimaryButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
