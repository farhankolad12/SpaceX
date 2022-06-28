const menuBtn = document.querySelector("#menu");

const openMenu = () => {
  let output = "";
  document.querySelector(".menu").innerHTML =
    '<svg class="close" xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>';
  output = `
    <nav>
    <ul>
    <li>
    <a href="/index.html">00 home</a>
    </li>
    <li>
    <a href="/public/dest.html">01 destination</a>
    </li>
    <li>
    <a href="/public/crew.html">02 crew</a>
    </li>
    <li>
    <a href="/public/tech.html">03 technologies</a>
    </li>
    </ul>
    </nav>
    `;
  document.querySelector(".mobile-nav").innerHTML = output;
  document.querySelector(".mobile-nav").style.visibility = "visible";
  document.querySelector(".mobile-nav").style.display = "block";
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".mobile-nav").style.visibility = "hidden";
    document.querySelector(".mobile-nav").style.display = "none";
    document.querySelector(
      ".menu"
    ).innerHTML = `<svg id="menu" xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                    <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
            </svg>`;
    document.querySelector("#menu").addEventListener("click", openMenu);
  });
};

menuBtn.addEventListener("click", openMenu);
