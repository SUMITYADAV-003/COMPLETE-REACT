import React from 'react'
import Card from './Componet/Card.jsx';

const App = () => {
  const users = [
  {
    fullName: "Tony Stark",
    title: "Genius, Billionaire, Playmaker, Philanthropist",
    profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop",
    likesCount: 15420,
    postCount: 342,
    viewsCount: 2840500,
    followed: true
  },
  {
    fullName: "Steve Rogers",
    title: "First Avenger & Super Soldier",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=400&fit=crop",
    likesCount: 18900,
    postCount: 289,
    viewsCount: 3120000,
    followed: true
  },
  {
    fullName: "Natasha Romanoff",
    title: "Black Widow & Master Spy",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=400&fit=crop",
    likesCount: 21500,
    postCount: 412,
    viewsCount: 3650000,
    followed: false
  },
  {
    fullName: "Bruce Wayne",
    title: "Dark Knight of Gotham",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1200&h=400&fit=crop",
    likesCount: 25600,
    postCount: 156,
    viewsCount: 4890000,
    followed: true
  },
  {
    fullName: "Diana Prince",
    title: "Wonder Woman & Amazon Warrior",
    profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop",
    likesCount: 28900,
    postCount: 378,
    viewsCount: 5120000,
    followed: true
  },
  {
    fullName: "Peter Parker",
    title: "Your Friendly Neighborhood Spider-Man",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&h=400&fit=crop",
    likesCount: 19800,
    postCount: 524,
    viewsCount: 3890000,
    followed: false
  },
  {
    fullName: "Carol Danvers",
    title: "Captain Marvel & Cosmic Avenger",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=400&fit=crop",
    likesCount: 22400,
    postCount: 298,
    viewsCount: 4250000,
    followed: true
  },
  {
    fullName: "Clark Kent",
    title: "Man of Steel & Last Son of Krypton",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=400&fit=crop",
    likesCount: 31200,
    postCount: 201,
    viewsCount: 6780000,
    followed: false
  },
  {
    fullName: "Barry Allen",
    title: "The Flash & Fastest Man Alive",
    profile: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=400&fit=crop",
    likesCount: 17600,
    postCount: 445,
    viewsCount: 3340000,
    followed: true
  },
  {
    fullName: "Wanda Maximoff",
    title: "Scarlet Witch & Reality Bender",
    profile: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&h=400&fit=crop",
    likesCount: 26700,
    postCount: 367,
    viewsCount: 4920000,
    followed: false
  }
];

  return (
    <div className='p-5 flex gap-5 flex-wrap'>
      {users.map(function(element){
        console.log(element)
        return <Card  users={element}/>
      })}
      
     
      
    </div>
  )
}

export default App