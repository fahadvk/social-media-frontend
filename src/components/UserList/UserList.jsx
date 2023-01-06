/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { Table, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";

import { BlockUser, getUserDetails } from "../../apiRequests/AdminApis";

export default function UserList({ selected }) {
  const [Users, setUsers] = useState([]);
  const [activePage, setPage] = useState(1);
  const [totalPages, setTotal] = useState();

  const blockuser = async (id) => {
    const { data } = await BlockUser(id);
    console.log(data);

    const newArray = Users.map((user) => {
      if (user._id === data._id) {
        user = data;
      }
      return user;
    });
    setUsers(newArray);
  };
  async function GetUsers(page) {
    const { data } = await getUserDetails(page);
    if (data) {
      setUsers(data.Users);
      const total = data.TotalUsers;
      console.log(Math.ceil(total), total);
      setTotal(Math.ceil(data.TotalUsers / 5));
    }
  }
  // const totalPages = totalUsers.?length / 3;
  useEffect(() => {
    GetUsers(activePage);
  }, []);
  const changePage = (page) => {
    setPage(page);
    GetUsers(page);
  };
  const rows = Users.map((user, index) => (
    <tr key={user._id}>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user?.mobile}</td>
      <td>{user.email}</td>
      <td>
        <button
          value={user.isBlocked}
          onClick={() => blockuser(user?._id)}
          type="button"
          className="bg-blue-300 text-white p-2 rounded"
        >
          {user.isBlocked ? "unBlock" : "Block"}
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="mt-16 w-3/5 h-full ">
      <Table w="lg">
        <thead>
          <tr>
            <th>index</th>
            <th>User Name</th>
            <th> Mobile</th>
            <th>Email</th>
            <th>Block/UnBlock</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <div className="flex justify-center mt-10">
        <Pagination
          page={activePage}
          onChange={changePage}
          total={totalPages}
        />
      </div>
    </div>
  );
}
