import React from 'react';
import Swiper from 'react-id-swiper';
import './assets/scss/App.scss';
import { continents } from './assets/json/continents';

class App extends React.Component {
  state = {
    swiperInstance: null
  }
  render() {
    const options = {
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }
    const placesOptions = {
      pagination: {
        el: '.swiper-places-pagination',
        type: 'fraction',
        clickable: true
      },
      slidesPerView: 2
    }

    return (
      <div className="App container-fluid">
        <Swiper {...options}>
          {
            continents.map((cont, ind) => (
              <div className="slide" key={ind} style={{
                backgroundImage: `url(${require(`./assets/img/${cont.image}`)})`,
              }}>
                <div className="container content">
                  <div className="row">
                    <div className="col col-12 places-swiper">
                      <Swiper {...placesOptions}>
                        <div className="places-slide">
                          <div className="card">
                            <div className="card-body">
                              <h1>{cont.name}</h1>
                              <p>{cont.desc}</p>
                              <button className="btn btn-success">Explore</button>
                            </div>
                          </div>
                        </div>
                        {
                          continents.map((cont, ind) => (
                            <div className="places-slide" key={ind}>
                              <div className="card" style={{
                                backgroundImage: `url(${require(`./assets/img/${cont.image}`)})`,
                              }}>
                                <div className="card-body">
                                  body
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Swiper>
      </div>
    );
  }
}

export default App;
