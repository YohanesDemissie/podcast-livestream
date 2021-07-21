import React from 'react';
import Logout from './Logout';

const handleSubmit = () => {

}

const Admin = () => {
  const uploadContent = (e) => {
    e.preventDefault();

    const elementsArray = [...e.target.elements];
    console.log(elementsArray);

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {})
    console.log({formData})
  }
  return (
    <div>
      <form onSubmit={uploadContent}>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" placeholder="Title" />
        <label for="embed-code-video">Embed Code Video</label>
        <input type="text" id="embed-code-video" name="embed-code-video" placeholder="copy video url here"/>
         <label for="embed-code-audio">Embed Code Audio</label>
        <input type="text" id="embed-code-audio" name="embed-code-audio" placeholder="copy audio url here"/>
        <label for="description">Description</label>
        <input type="text" id="description" name="description" placeholder="description"/>

        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default Admin;