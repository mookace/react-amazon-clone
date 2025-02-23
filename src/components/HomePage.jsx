import React from 'react';
import Carousel from './Carousel';
import HomePageCard from './HomePageCard';
import CarouselCategory from './CarouselCategory';
import CarouselProduct from './CarouselProduct';

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        Testing
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={'we have suprise for you'}
            img={'../images/home_grid_1.jpg'}
            link={'see term and conditions'}
          />
          <HomePageCard
            title={'Watch The Ring of Power'}
            img={'../images/home_grid_2.jpg'}
            link={'Start streaming now'}
          />
          <HomePageCard
            title={'Unlimited streaming'}
            img={'../images/home_grid_3.jpg'}
            link={'Find out more'}
          />
          <HomePageCard
            title={'more titles to explore'}
            img={'../images/home_grid_4.jpg'}
            link={'Browse kindle unlimited'}
          />
          <HomePageCard
            title={'shop pet supplies'}
            img={'../images/home_grid_5.jpg'}
            link={'see more'}
          />
          <HomePageCard
            title={'spring sale'}
            img={'../images/home_grid_6.jpg'}
            link={'see the deals'}
          />
          <HomePageCard
            title={'echo buds'}
            img={'../images/home_grid_7.jpg'}
            link={'see more'}
          />
          <HomePageCard
            title={'Family plan: 3 month free'}
            img={'../images/home_grid_8.jpg'}
            link={'Learn more'}
          />

          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src="../images/banner_image_2.jpg"
              alt=""
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src="../images/banner_image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
