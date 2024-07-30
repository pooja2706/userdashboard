import '../style/pagenotfound.css';

const pagenotfound = () => {
  return (
    <div className='error-page'>
        <div className="err-msg">It seems like you have entered wrong path!!</div>
        <div className="err-msg">No worries!!</div>
        <a href="/">Click this</a>
    </div>
  )
}

export default pagenotfound
