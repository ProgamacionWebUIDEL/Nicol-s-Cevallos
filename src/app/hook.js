export function onSubmit () {
    console.log("Se envio correctamente")
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
        console.log("Llega al boton", data);
}

export function onSubmitPost () {
    fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: 144,
              quantity: 8,
            },
            {
              id: 98,
              quantity: 5,
            },
          ]
        })
      })
      .then(res => res.json())
      .then(console.log);
}
