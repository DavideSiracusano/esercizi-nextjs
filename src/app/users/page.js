// app/users/page.jsx
import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Lista utenti</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
