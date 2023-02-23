import "./Modal.css";

export default function Modal(props) {
  {
    /*Code Repurposed from: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a */
  }
  if (!props.modalActive) {
    return null;
  }
  return (
    <>
    <div className="modalBackground" onClick={props.onClose}/>
      <div className="modalStuff">
        <div className="modalContent">
          <button className="closeModalButton" onClick={props.onClose}>  X </button>
          <h1>{props.title}</h1>
          <p>{props.info}</p>
          <a href={props.link} target="_blank">{props.link}</a>
        </div>
      </div>
    </>
  );
}
