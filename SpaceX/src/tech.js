const techOpt = document.querySelector(".tech-opt-mobile");

const loadOpt = () => {
  techOpt.innerHTML = `
<ul>
                    <li class="active-opt">1</li>
                    <li class="deactive-opt">2</li>
                    <li class="deactive-opt">3</li>
                </ul>
`;
  document.querySelector(".tech-opt").remove();

  const techOptLiMobile = document.querySelectorAll(".tech-opt-mobile ul li");
  techOptLiMobile.forEach((opt) => {
    opt.addEventListener("click", (e) => loadTechInfoMobile(e));
  });
};

if (document.body.clientWidth < "480") {
  document.addEventListener("DOMContentLoaded", loadOpt);
}

// FOR DESKTOP //
const techOptLi = document.querySelectorAll(".tech-opt ul li");

const loadTechInfo = async (e) => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  const technologies = data.technology;
  const targetId = e.target.textContent;
  let output = "";
  technologies.forEach((technology) => {
    if (technology.id == targetId) {
      output = `
        <div class="tech">
            <div class="tech-opt">
                <ul>
                    <li class="${
                      technology.id == "1" ? "active-opt" : "deactive-opt"
                    }">1</li>
                    <li class="${
                      technology.id == "2" ? "active-opt" : "deactive-opt"
                    }">2</li>
                    <li class="${
                      technology.id == "3" ? "active-opt" : "deactive-opt"
                    }">3</li>
                </ul>
            </div>
            <div class="tech-info">
                <h3>the terminology</h3>
                <h2>${technology.name}</h2>
                <p class="description">
                ${technology.description}
                </p>
            </div>
            <div class="tech-img">
                <img src="${technology.images.portrait}">
                <div class="tech-opt-mobile"></div>
            </div>
        </div>
        `;
    }
  });
  document.querySelector(".tech-container").innerHTML = output;
  const techOptLi = document.querySelectorAll(".tech-opt ul li");
  techOptLi.forEach((opt) => {
    opt.addEventListener("click", (e) => loadTechInfo(e));
  });
};

techOptLi.forEach((opt) => {
  opt.addEventListener("click", (e) => loadTechInfo(e));
});

// FOR MOBILE //

const loadTechInfoMobile = async (e) => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  const technologies = data.technology;
  const targetId = e.target.textContent;
  let output = "";
  technologies.forEach((technology) => {
    if (technology.id == targetId) {
      output = `
        <div class="tech">
            <div class="tech-info">
                <h3>the terminology</h3>
                <h2>${technology.name}</h2>
                <p class="description">
                ${technology.description}
                </p>
            </div>
            <div class="tech-img">
                <img src="${technology.images.landscape}">
                <div class="tech-opt-mobile">
                <ul>
                    <li class="${
                      technology.id == "1" ? "active-opt" : "deactive-opt"
                    }">1</li>
                    <li class="${
                      technology.id == "2" ? "active-opt" : "deactive-opt"
                    }">2</li>
                    <li class="${
                      technology.id == "3" ? "active-opt" : "deactive-opt"
                    }">3</li>
                </ul>
            </div>
            </div>
        </div>
        `;
    }
  });
  document.querySelector(".tech-container").innerHTML = output;
  const techOptLiMobile = document.querySelectorAll(".tech-opt-mobile ul li");
  techOptLiMobile.forEach((opt) => {
    opt.addEventListener("click", (e) => loadTechInfoMobile(e));
  });
};
