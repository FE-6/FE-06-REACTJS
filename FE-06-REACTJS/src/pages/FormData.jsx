import React from 'react'
import { useState } from "react";

export default function FormData() {
    const [state, setState] = useState("");
    const fileInput = React.createRef();
  
    const handleSubmit = (a) => {
      alert(`Hi ${state}`);
      a.preventDefault();
    alert(`Nama file: ${e.fileInput.current.files[0].name}`);
    };
  
    const handleChange = (e) => {
      setState(e.target.value);
    };
  
    return (
      <div>
        <h3>Masukan Nama</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nama:
            <input type="text" value={state} onChange={handleChange} />
          </label>
          
        </form>
        <h3>Upload File</h3>
        <form onSubmit={handleSubmit}>
            <label>
            Pilih File 
            <input type="file" ref={fileInput} style={{marginLeft: "5px"}} />
            </label>
        </form>
        <input type="submit" value="Submit" />
      </div>
    );
  }