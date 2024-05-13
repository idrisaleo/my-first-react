import './browse.css'

function Browse(){
  return (
    <>

    <div className='browse-from'>
      <h1>Browse From Top Categories</h1>
      <img className="browse-img" src="./src/assets/myPics/browse.png" alt="" width="104" height="6" />
    </div>

    <div className='browse-from-rest'>
      
      <div className='holiday'>
        <img className="all-icons" src="./src/assets/myPics/like.png" alt="" />
        <p>Holiday Rentals</p>

      </div>

      <div className='residential'>
        <img className="all-icons" src="./src/assets/myPics/home.png" alt="" />
        <p>Residential Spaces</p>
        
      </div>

      <div className='event'>
        <img className="all-icons" src="./src/assets/myPics/event.png" alt="" />
        <p>Event Spaces</p>
      </div>

      <div className='commercial'>
        <img className="all-icons" src="./src/assets/myPics/commercial.png" alt="" />
        <p>Commercial Properties</p>
      </div>

      <div className='more'>
        <img className="all-icons" src="./src/assets/myPics/more.png" alt="" />
        <p>More</p>
      </div>

    </div>

    </>
  )
}

export default Browse