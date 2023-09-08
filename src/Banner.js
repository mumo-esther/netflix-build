import React from 'react'
import './Banner.css'

function Banner() {

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n + 1) + '...' : string
  }
  return (
    <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
      backgroundPosition: 'center'
    }}>
      <div className='banner_content'>
        <h1 className='banner_title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(`In the tranquil heart of a bustling city, 
        where the relentless rhythm of life never seems to cease, there exists a hidden oasis of serenity. 
        A small park, adorned with vibrant blossoms and ancient trees stands as a refuge from the chaos of urban existence.
         The gentle murmur of a crystal-clear stream meanders through the park, its waters reflecting the dappling sunlight like liquid diamonds.
          Aromatic scents from the surrounding flowers dance on the breeze, captivating the senses and momentarily transporting visitors to a world untouched by the demands of time.
          As the day unfolds people from all walks of life gather here seeking respite from their daily struggles.Children chase colorful butterflies, 
          their laughter echoing through the air like the sweetest melody.Elderly couples find solace on weathered benches reminiscing about a lifetime of shared adventures.
          Young lovers steal moments of intimacy beneath the shade of ancient oak trees, their whispered promises carrying the weight of eternity.
          This park, a testament to the enduring beauty of nature amidst the modern chaos, serves as a reminder that even in the most hectic of lives, 
          moments of tranquility and connection with the world around us are waiting to be discovered.`, 150)}</h1>
      </div>
      <div className='banner--fadeBottom'></div>
    </header >
  )
}

export default Banner