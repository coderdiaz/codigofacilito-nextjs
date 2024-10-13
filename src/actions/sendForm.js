'use server';

export async function onHandleSubmit(prevState, formData) {
  const body = {
    name: formData.get('person'),
    address: formData.get('address'),
  };

  if (body.name === '' || body.address === '') {
    return { message: 'Por favor, llena todos los campos' };
  }
  // await supabase.from('person').insert(body);
  return { message: 'Formulario enviado' };
}
