import React from 'react';
import { createPortal } from 'react-dom';



function Modal(props) {
    const { addTask, onChange, value, tasks, priority, selectOnChange } = props;
    let modalLayout = (
          <div id='idmodal' className='modalDiv'>
               <form className='modalFormDiv' onSubmit={addTask}>
                  <label>
                    Add a New Task
                    <br/>
                  <input id='input' type='text' value={value} onChange={onChange}/> 
                  </label>
                  <br/>
                  <select value={priority} onChange={selectOnChange}>
                  <option value='High'>High</option> 
                  High
                  <option value='Medium'>Medium</option>  
                  Medium
                  <option value='Low'>Low</option>  
                  Low
                  </select>
                  <br/>
                  <input type='submit' value='submit'/>
              </form>
          </div>
      );
    return createPortal(modalLayout, document.querySelector('#modal'));
}


export default Modal;