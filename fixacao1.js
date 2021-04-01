const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryGuy = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const contact = order.phoneNumber;
  const street = order.address.street;
  const strtNmbr = order.address.number;
  const apt = order.address.apartment;

console.log(`Olá ${deliveryGuy}, entrega para: ${customerName}, Telefone: ${contact},  ${street}, Nº ${strtNmbr}, AP: ${apt}`);
}

customerInfo(order);

// const orderModifier = (order) => {

// }

// orderModifier(order);