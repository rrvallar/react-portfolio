import React from 'react'

function Portfolio(props) {
  return (
    <div>
      <section id="portfolio">
        <div class="run-buddy-box">
          <div class="run-buddy-image">
            <img src="./assets/images/runbuddy.jpg" alt="building" />
            <p class="run-buddy-img p1">
              <a href="https://rrvallar.github.io/runbuddyimproved">PLACERHOLDER</a>
            </p>
          </div>
        </div>
        <div class="run-buddy-box">
          <div class="run-buddy-image">
            <img src="./assets/images/runbuddy.jpg" alt="building" />
            <p class="run-buddy-img p2">
              <a href="https://rrvallar.github.io/runbuddyimproved">RUNBUDDY</a>
            </p>
          </div>
        </div>
        <div class="work-image-area">
          <div>
            <div class="work-image flex-one">
              <img src="./assets/images/led.webp" alt="image of LED wall" />
              <p class="top-left">
                <a
                  href="https://techledwall.com/?gclid=Cj0KCQjw1ZeUBhDyARIsAOzAqQKkigopGGC3GPWB-FZhpY1d78KlRJO7gieYwuVV_uGUMMRXYrRccm4aAjzzEALw_wcB">LED
                  Wall</a>
              </p>
            </div>
            <div class="work-image flex-one">
              <img src="./assets/images/calc.jpg" alt="calculator image" />
              <p class="top-left">
                <a href="https://www.calculator.net/">Calculator</a>
              </p>
            </div>
          </div>
          <div>
            <div class="work-image flex-two">
              <img
                src="./assets/images/surfreport.jpg"
                alt="picture of someone surfing"
              />
              <p class="top-left">
                <a href="https://www.surfline.com/">Surf Report</a>
              </p>
            </div>
            <div class="work-image flex-two">
              <img src="./assets/images/pastels.jpg" alt="pasel color image" />
              <p class="top-left">
                <a href="https://colorhunt.co/palettes/pastel">Pastel Puzzle</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Portfolio;