import RestaurantSource from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Temukan Makanan Favoritmu Di Restaurant Kami</h1>
      <p class="hero__tagline">Restaurant kami menyediakan berbagai jenis makanan yang bisa anda
        coba
      </p>
    </div>
  </div>

      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restaurant__label">
            Explore Restaurant
            <hr>
          </h2>
          <div class="list-restaurant"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
