import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvoicePage = ({ match }) => {
  const [invoice, setInvoice] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const orderId = match.params.orderId;
    axios
      .post(`http://localhost:5000/generate-invoice/${orderId}`, {}, {
        headers: {
          Authorization: token,
        },
        responseType: 'blob',
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'invoice.pdf');
        link.click();
      })
      .catch((error) => {
        console.error('Error generating invoice:', error);
      });
  }, [match.params.orderId, token]);

  return (
    <div>
      <h1>Invoice</h1>
      <p>Generating Invoice...</p>
    </div>
  );
};

export default InvoicePage;
