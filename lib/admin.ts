import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_2jYB9JtIKb33AH9WzblhWch0yNO"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
