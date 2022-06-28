const loadPlanet = async () => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  const destinations = data.destinations;
  let output = "";
  console.log(destinations);
  output += `
  <div class="planets">
            <div class="planet-img">
                <img src="${destinations[0].images.png}" alt="Planets">
            </div>
            <div class="planet-opt">
                <ul>
                    <li>mars</li>
                    <li class="active">moon</li>
                    <li>europa</li>
                    <li>titan</li>
                </ul>
                <h3 class="heading">${destinations[0].name}</h3>
                <p class="description">
                    ${destinations[0].description}
                </p>
                <div class="distance-time">
                    <div class="avg">
                    <p>avg distance</p>
                    <h3>${destinations[0].distance}</h3>
                    </div>

                    <div class="time">
                    <p>est. travel time</p>
                    <h3>${destinations[0].travel}<h3>
                    </div>

                </div>
            </div>
        </div>
  `;
  document.querySelector(".planet-container").innerHTML = output;

  const planetOpt = document.querySelectorAll(".planet-opt ul li");

  planetOpt.forEach((planet) => {
    planet.addEventListener("click", (e) => getPlanetInfo(e));
  });
};

document.addEventListener("DOMContentLoaded", loadPlanet);

const getPlanetInfo = async (e) => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  const destinations = data.destinations;
  const targetText = e.target.textContent;
  let output = "";
  destinations.forEach((dest) => {
    if (targetText == dest.name.toLowerCase()) {
      output += `
  <div class="planets">
            <div class="planet-img">
                <img src="${dest.images.png}" alt="Planets">
            </div>
            <div class="planet-opt">
                <ul>
                    <li class="${
                      dest.name.toLowerCase() == "mars" ? "active" : ""
                    }">mars</li>
                    <li class="${
                      dest.name.toLowerCase() == "moon" ? "active" : ""
                    }">moon</li>
                    <li class="${
                      dest.name.toLowerCase() == "europa" ? "active" : ""
                    }">europa</li>
                    <li class="${
                      dest.name.toLowerCase() == "titan" ? "active" : ""
                    }">titan</li>
                </ul>
                <h3 class="heading">${dest.name}</h3>
                <p class="description">
                    ${dest.description}
                </p>
                <div class="distance-time">
                    <div class="avg">
                    <p>avg distance</p>
                    <h3>${dest.distance}</h3>
                    </div>

                    <div class="time">
                    <p>est. travel time</p>
                    <h3>${dest.travel}<h3>
                    </div>

                </div>
            </div>
        </div>
  `;
      document.querySelector(".planet-container").innerHTML = output;
      const planetOpt = document.querySelectorAll(".planet-opt ul li");

      planetOpt.forEach((planet) => {
        planet.addEventListener("click", (e) => getPlanetInfo(e));
      });
    }
  });
};
