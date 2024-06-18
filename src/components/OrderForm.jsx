import React, { useState } from 'react';
import './orderFormStyles.css'; // Importa los estilos CSS

const OrderForm = () => {
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [message, setMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Estado para el formulario enviado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción que desees con los datos capturados
    console.log('Datos del pedido:', { carModel, carColor, customerName, customerEmail, message, deliveryDate, paymentMethod });
    setSubmitted(true); // Marca el formulario como enviado
    // Puedes restablecer los campos aquí o manejarlos según sea necesario
    // setCarModel('');
    // setCarColor('');
    // setCustomerName('');
    // setCustomerEmail('');
    // setMessage('');
    // setDeliveryDate('');
    // setPaymentMethod('');
    // setAcceptedTerms(false);
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
      <h2>Pedí tu Tesla ahora</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Modelo de auto:</label>
          <select value={carModel} onChange={(e) => setCarModel(e.target.value)} required>
            <option value="">Selecciona un modelo</option>
            <option value="Model Y">Model Y</option>
            <option value="Model S">Model S</option>
            <option value="Cybertruck">Cybertruck</option>
            <option value="Model 3">Model 3</option>
            <option value="Roadster">Roadster</option>
          </select>
        </div>
        <div className="form-group">
          <label>Color:</label>
          <select value={carColor} onChange={(e) => setCarColor(e.target.value)} required>
            <option value="">Selecciona un color</option>
            <option value="Black">Negro</option>
            <option value="Silver">Plateado</option>
            <option value="Blue">Azul</option>
            <option value="White">Blanco</option>
            <option value="Red">Rojo</option>
            <option value="Green">Verde</option>
          </select>
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
        <div className="form-group">
          <label>Fecha de entrega preferida:</label>
          <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Método de pago:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
            <option value="">Selecciona un método de pago</option>
            <option value="CreditCard">Tarjeta de crédito</option>
            <option value="DebitCard">Tarjeta de débito</option>
            <option value="BankTransfer">Transferencia bancaria</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} required />
            He leído y acepto los términos y condiciones
          </label>
        </div>
        <button type="submit">Enviar pedido</button>
      </form>
    </div>
  );
};

export default OrderForm;
