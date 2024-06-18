import React, { useState } from 'react';
import './orderFormStyles.css'; // Importa los estilos CSS

const OrderForm = () => {
  const [carModel, setCarModel] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Estado para el formulario enviado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción que desees con los datos capturados
    console.log('Datos del pedido:', { carModel, customerName, customerEmail, message });
    setSubmitted(true); // Marca el formulario como enviado
    // Puedes restablecer los campos aquí o manejarlos según sea necesario
    // setCarModel('');
    // setCustomerName('');
    // setCustomerEmail('');
    // setMessage('');
  };

  if (submitted) {
    return (
      <div className="order-form">
        <h2>¡Gracias por tu pedido!</h2>
        <p>Recibimos tu solicitud y pronto nos pondremos en contacto contigo.</p>
      </div>
    );
  }

  return (
    <div className="order-form">
      <h2>Pedí tu tesla ahora</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Modelo de auto:</label>
          <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Nombre del cliente:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mensaje adicional:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button type="submit">Enviar pedido</button>
      </form>
    </div>
  );
};

export default OrderForm;
