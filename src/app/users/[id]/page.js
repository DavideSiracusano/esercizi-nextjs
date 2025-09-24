// app/users/[id]/page.jsx
import React from "react";

// fetch utente singolo
async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Utente non trovato");
  return res.json();
}

export default async function UserPage({ params }) {
  // params.id proviene dal nome della cartella [id]
  const user = await getUser(params.id);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Telefono: {user.phone}</p>
    </div>
  );
}
