import { useState } from "react";
function Login({setLogin}){
    const [formData, setFormData] = useState({
        email1: '',
        email2: ''
      });
      
      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      
      const handleSubmit = e => {
        e.preventDefault();
        if (formData.email1 !== formData.email2) {
          alert('Los correos electrónicos deben ser iguales');
          return;
        }
        if (formData.email1 === formData.email2){
            alert("sesion Iniciada")
            setLogin(true)
        }
      };
      
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email1"
            value={formData.email1}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email2"
            value={formData.email2}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      );
}
export default Login