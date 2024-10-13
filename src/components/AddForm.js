'use client';

import { useActionState } from 'react';

export function AddForm({ sendForm }) {
  const [state, formAction] = useActionState(sendForm, {
    message: null,
  });

  console.log(state);

  return (
    <form action={formAction}>
      <label>Nombre de la persona</label>
      <input type="text" id="person" name="person" placeholder="Juan Perez" />
      <label>Dirección</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Av. Baja California Norte 200"
      />
      <button type="submit">Enviar</button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
