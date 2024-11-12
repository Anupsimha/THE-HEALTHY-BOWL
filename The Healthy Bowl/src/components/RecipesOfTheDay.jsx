import './RecipesOfTheDay.css'; 
import React from 'react';
import img1 from '../assets/images_1/recipes_of_the_day.jpg';
import img2 from '../assets/images_1/rod2.jpg';
import img3 from '../assets/images_1/rod3.jpg';
import img4 from '../assets/images_1/rod4.webp';
import img5 from '../assets/images_1/rod5.jpg';
import img6 from '../assets/images_1/rod6.jpg';
import img7 from '../assets/images_1/rod7.jpg';
import img8 from '../assets/images_1/rod8.jpg';
import img9 from '../assets/images_1/rod9.jpg';
import img10 from '../assets/images_1/rod10.jpg';
import dp1 from '../assets/images_1/dp1.jpg';
import dp2 from '../assets/images_1/recipes_of_the_day_dp2.jpg';
import dp3 from '../assets/images_1/recipes_of_the_day_dp3.jpg';
import dp4 from '../assets/images_1/recipes_of_the_day_dp4.jpg';
import dp5 from '../assets/images_1/recipes_of_the_day_dp5.jpg';
import dp6 from '../assets/images_1/recipes_of_the_day_dp6.jpg';
import dp7 from '../assets/images_1/recipes_of_the_day_dp7.jpg';
import dp8 from '../assets/images_1/recipes_of_the_day_dp8.jpg';
import dp9 from '../assets/images_1/recipes_of_the_day_dp9.jpg';
import dp10 from '../assets/images_1/recipes_of_the_day_dp10.jpg';

const RecipesOfTheDay = () => {
    const handleViewAllClick = () => {
      window.location.href = './recipes_of_the_day_files/index.html';
    };
  
    const recipes = [
      {
        time: '40m',
        imgSrc: img1,
        dish: 'Dhokla',
        recipient: 'Anish Bharadwaj',
        dp: dp1,
      },
      {
        time: '45m',
        imgSrc: img2,
        dish: 'Rainbow Bowl',
        recipient: 'Nimisha Mishra',
        dp: dp2,
      },
      {
        time: '55m',
        imgSrc: img3,
        dish: 'Crispy Potato Snacks',
        recipient: 'Paul Carter',
        dp: dp3,
      },
      {
        time: '1hr',
        imgSrc: img4,
        dish: 'Aloo Parantha',
        recipient: 'Mehak Kaur',
        dp: dp4,
      },
      {
        time: '1hr',
        imgSrc: img5,
        dish: 'Hyd Biryani',
        recipient: 'Keerthi Reddy',
        dp: dp5,
      },
      {
        time: '1hr',
        imgSrc: img6,
        dish: 'Idli Sambar',
        recipient: 'Arun Kumar',
        dp: dp6,
      },
      {
        time: '2hr',
        imgSrc: img7,
        dish: 'Chicken Wings',
        recipient: 'Khubaib',
        dp: dp7,
      },
      {
        time: '3hr',
        imgSrc: img8,
        dish: 'Butter Sticks',
        recipient: 'Sneha M',
        dp: dp8,
      },
      {
        time: '3hr',
        imgSrc: img9,
        dish: 'Italian Pasta',
        recipient: 'Julie Dawson',
        dp: dp9,
      },
      {
        time: '4hr',
        imgSrc: img10,
        dish: 'Biryani',
        recipient: 'Vinay K',
        dp: dp10,
      }
    ];

    return (
        <div className="recipes_of_day">
          <h2>RECIPES OF THE DAY</h2>
          <p>Check out our featured recipe for today! This recipe is the most popular and trendy recipe that you’d definitely want to give a try!</p>
          <span
            className="view_all_recipes"
            style={{ cursor: 'pointer' }}
            onClick={handleViewAllClick}
          >
            View All
            <i className="fa-solid fa-circle-arrow-right"></i>
          </span>
          <div className="recipes_of_the_day_list">
            {recipes.map((recipe, index) => (
              <div className="name" key={index}>
                <div className="time_uploaded">
                  <p><i className="fa-regular fa-clock"></i>{recipe.time}</p>
                </div>
                <div className="img_of_rcp">
                  <img src={recipe.imgSrc} alt={recipe.dish} />
                </div>
                <div className="details_of_rcp">
                  <div className="name_of_dish">
                    <h4 className="food">{recipe.dish}</h4>
                  </div>
                  <div className="detail_of_recipient">
                    <img src={recipe.dp} alt="dp" />
                    <h5 className="recipient">{recipe.recipient}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default RecipesOfTheDay;