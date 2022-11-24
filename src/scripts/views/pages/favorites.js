import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <main id="main" tabindex="0">
      <section class="content">
        <h2 class="list-restaurant__label">
          Favorites Restaurants
          <hr>
        </h2>
        <div class="webflow-style-input">
          <input id="query" type="text" placeholder="Search Restaurant Name ...">
          <button type="submit">
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div id="restaurants" class="list-restaurant">
        </div>
      </section>
    </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
