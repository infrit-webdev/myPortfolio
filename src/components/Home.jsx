
import hero from "../assets/hero.jpg"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="hero-container">
        <div className="developer-info">
          <h1>Hello, Im a Web Developer!</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis impedit quisquam deleniti hic, corporis sint illo veniam expedita aliquid perferendis facere eveniet, quam excepturi corrupti fugit odit repellat sit unde.
          Ratione perspiciatis dicta aperiam, ducimus veritatis ea perferendis officia, autem numquam placeat, repudiandae totam quam ex. Veritatis natus, quam eum ipsum voluptate, ea inventore debitis, vero dicta suscipit laboriosam quisquam.
          Distinctio placeat non, nostrum omnis blanditiis et eaque adipisci in repellat, quam aliquid earum sunt repellendus dolore aut perspiciatis quis autem laboriosam eius. Quisquam esse est, aliquam non assumenda inventore?
          </p>
        </div>
        <div className="hero-content">
          <h1>HERO ICON/IMAGE WILL GO HERE!</h1>
          <img src={hero} alt="hero" className="hero-image"/>
        </div>
      </div>
      
    </div>
  )
}

export default Home


