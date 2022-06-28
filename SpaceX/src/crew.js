const loadCrew = async () => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  const crews = data.crew;
  console.log(crews);
  let output = `
   <div class="crew">
            <div class="crew-info">
                <div class="info">
                <h3>${crews[3].role}</h3>
                <h2>${crews[3].name}</h2>
                <p>
                    ${crews[3].bio}
                </p>
                </div>
                <div class="crew-opt">
                    <ul>
                        <li class="deactive-crew" value="1"></li>
                        <li class="deactive-crew"value="2"></li>
                        <li class="deactive-crew" value="3"></li>
                        <li value="4"></li>
                    </ul>
                </div>
            </div>
            <div class="crew-img">
                <img src="${crews[3].images.png}" id="img" alt="Crew">
            </div>
        </div>
  `;
  document.querySelector(".crew-container").innerHTML = output;
  const crewOpt = document.querySelectorAll(".crew-opt ul li");

  crewOpt.forEach((crew) => {
    crew.addEventListener("click", (e) => getCrewInfo(e));
  });
};

const getCrewInfo = async (e) => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  const crews = data.crew;
  const targetId = e.target.value;
  crews.forEach((crew) => {
    if (crew.id == targetId) {
      let output = `
   <div class="crew">
            <div class="crew-info">
                <div class="info">
                <h3>${crew.role}</h3>
                <h2>${crew.name}</h2>
                <p>
                    ${crew.bio}
                </p>
                </div>
                <div class="crew-opt">
                    <ul>
                        <li class="${
                          crew.id == 1 ? "" : "deactive-crew"
                        }" value="1"></li>
                        <li class="${
                          crew.id == 2 ? "" : "deactive-crew"
                        }" value="2"></li>
                        <li class="${
                          crew.id == 3 ? "" : "deactive-crew"
                        }" value="3"></li>
                        <li  class="${
                          crew.id == 4 ? "" : "deactive-crew"
                        }" value="4"></li>
                    </ul>
                </div>
            </div>
            <div class="crew-img">
                <img src="${crew.images.png}" id="img" alt="Crew">
            </div>
        </div>
  `;
      document.querySelector(".crew-container").innerHTML = output;
      const crewOpt = document.querySelectorAll(".crew-opt ul li");

      crewOpt.forEach((crew) => {
        crew.addEventListener("click", (e) => getCrewInfo(e));
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", loadCrew);
