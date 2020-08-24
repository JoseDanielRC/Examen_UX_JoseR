import React, { useState } from 'react';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import { Table } from 'reactstrap';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Spinner } from 'reactstrap';
function App() {
  const dataApuntes = [
    { N: 1, nombre: "Esto es react", fecha: "21/ago/2020", etiquetas: ["is working"] },
    { N: 2, nombre: "Esto es Bootstrap", fecha: "15/jun/2019", etiquetas: ["js, ", "reacstrap"] },
    { N: 3, nombre: "Electron", fecha: "22/nov/2020", etiquetas: ["Este ", "programa", " is working"] }
  ];
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    N: '',
    nombre: '',
    minutos: ''
  });
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const abrirModalInsertar = () => {
    setSeleccionado(null);
    setModalInsertar(true);
  }
  const insertar = () => {
    var valorInsertar = seleccionado;
    valorInsertar.N = data[data.length - 1].N + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App-header">
      <ButtonGroup>
        <Button className="btn btn-success" onClick={() => abrirModalInsertar()} >Insertar</Button>
      </ButtonGroup>
      <h1>Organizador de apuntes <Badge color="secondary"></Badge></h1>
      <h2>Examen UX <Badge color="secondary"></Badge></h2>
      <div className="table-responsive">
        <Table dark>
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Apunte</th>

            </tr>
          </thead>
          <tbody>
            {data.map(elemento => (
              <tr>
                <td>{elemento.N}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.fecha}</td>
                <td>{elemento.etiquetas}</td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>N</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="N"
              value={data[data.length - 1].N + 1}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={seleccionado ? seleccionado.nombre : ''}
              onChange={handleChange}
            />
            <br />

            <label>Fecha</label>
            <input
              className="form-control"
              type="text"
              name="fecha"
              value={seleccionado ? seleccionado.minutos : ''}
              onChange={handleChange}
            />
            <br />
            <label>Etiqueta</label>
            <input
              className="form-control"
              type="text"
              name="etiquetas"
              value={seleccionado ? seleccionado.minutos : ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
            onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >

          </button>
        </ModalFooter>
      </Modal>
    </div>


  );

}
function alerta(event) {
  alert("Registrado")
}
export default App;
