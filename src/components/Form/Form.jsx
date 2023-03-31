import "./style.css"

const Form = () => {
  return (
    <div className="form">
    <form>
      <input type="text" placeholder="Your Name..." />
      <input type="email" placeholder="Your Email..." />
      <textarea placeholder="Message"></textarea>
      <button>Send Message Now</button>
    </form>
  </div>
  )
}

export default Form
