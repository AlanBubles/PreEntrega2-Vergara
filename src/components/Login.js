import { useState } from "react";
function Login({setLogin,setUser}){
    const [formData, setFormData] = useState({
        name:'',
        number:'',
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
            setUser({name:formData.name,lastname:formData.lastname,number:formData.number,email1:formData.email1,email2:formData.email2})
            
            setLogin(true)
        }
      };
      
      return (
        <form onSubmit={handleSubmit}>
          <label>Nombre :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
         
          <label>TEL :</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          <label  >Email : </label>
          <input
            id="email"
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