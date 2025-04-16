export const users = [
    {
      id: "1",
      username: "jose",
      password: "admin123",
      role: "admin",
    },
    {
      id: "2",
      username: "hannah",
      password: "userpass",
      role: "user",
    },
  ];
  
  export const getUserByUsername = async (username: string) => {
    return users.find((user) => user.username === username);
  };
  