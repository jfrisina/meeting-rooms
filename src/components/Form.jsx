import { useState } from 'react'

const Form = ({ movieSearch }) => {
  const [formData, setFormData] = useState({title: ''})

  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    movieSearch(formData.title)
  }

  return (
    <div>Form
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Movie Title' onChange={handleChange}/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Form

