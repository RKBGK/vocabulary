const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">Vocab-You-lary</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-cards">
                All Cards <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="java">Java</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="javaScript">Java Script</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="python">Python</a>
          </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Card"
              aria-label="Search"
            />
            </li>
          </ul>
          <div id="cart-button"></div>
          <div id="logout-button"></div>
        </div>
      </nav>
    `;
};

export default navBar;
