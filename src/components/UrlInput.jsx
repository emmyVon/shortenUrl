

const UrlInput = ({text,submit,setText}) => {
 
  return (
   <form onSubmit={submit} className='input-container'>
        <input placeholder='shorten a link here' type='text' name='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type='submit' className='btn'>Shorten it!</button>
    </form>
  )
}

export default UrlInput