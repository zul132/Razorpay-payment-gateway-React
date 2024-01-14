import './App.css';
import React, {useState} from 'react';

function App() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(amount === ""){
      alert("PLease enter the amount");
    }else{
      var options = {
        key:"rzp_test_C5gIVKuikWVtvc",
        key_secret:"5QgPlbdUEGRoogpiaPAnFQnT",
        amount: amount * 100,
        currency:"INR",
        name:"VIPOSE_Payments",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Fathima Zulaikha",
          email: "fathima3891@gmail.com",
          contact: "9384843005"
        },
        notes:{
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc"
        }
      };

      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="App">
      <h2>Razorpay Payment Integration using React</h2>
      <hr />
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
