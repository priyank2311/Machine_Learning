import React, { useEffect, useState } from 'react'

const CarouselItem = [
  {
    id: 1,
    imageUrl:
      'https://blog-content.ixigo.com/wp-content/uploads/2018/04/blog22.jpg',
    title: 'Great Wall of China',
    description: 'Perhaps the most recognizable symbol of China and its long and vivid history, the Great Wall was originally conceived by Emperor Qin Shi Huang in the third century B.C. as a means of preventing incursions from barbarian nomads',
  },
  {
    id: 2,
    imageUrl:
      'https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/Chichen-Itza-Cover-Img.jpg',
    title: 'Chichén Itzá',
    description: 'In ancient, pre-Colombian times, Chichen Itza was a vibrant city with a diverse population of Mayan people extending well into the tens of thousands.',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-42-24002457_sbfkds.jpg',
    title: 'Christ the Redeemer',
    description: 'Christ the Redeemer is a masterpiece which expresses the feeling and the blessing of the Brazilian people, fitting perfectly to the landscape.',
  },
  {
    id: 4,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg',
    title: 'Colosseum',
    description: 'The Colosseum in Rome, Italy, is a large amphitheater that hosted events like gladiatorial games. Design Pics Inc. The Colosseum, also named the Flavian Amphitheater.',
  },
  {
    id: 5,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
    title: 'Taj Mahal',
    description: 'It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD.',
  },
];

const Carousel = () => {
  const [countItem, setCountItem] = useState(0);

  const handlePrevious = () => {
    if (countItem === 0) {
      setCountItem(CarouselItem.length - 1)
    } else {
      setCountItem(countItem - 1)
    }
  }

  const handleNext = () => {
    if (countItem === CarouselItem.length -1) {
      setCountItem(0)
    } else {
      setCountItem(countItem + 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [countItem])

  return (
    <div className='curousel-container'>
      <img className='curousel-img'
      src={CarouselItem[countItem].imageUrl}
      alt={CarouselItem[countItem].title}
      />
      <h1>{CarouselItem[countItem].title}</h1>
      <h3>{CarouselItem[countItem].description}</h3>

      <div className='carousel-btn'>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Carousel