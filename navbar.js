class NavBar extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" }); //creating a shadow DOM to make sure that the classes don't conflict with the css classes outside the component | always keep open to make it accesible
    }

    connectedCallback() {   //called when the component/element is added to the page
        this.render();
    }

    render(){
        this.shadow.innerHTML = `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/578260ced6.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./public/css/style.css">
        <link rel="stylesheet" href="./public/css/custom_btn.css">

        <nav id="header-section" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./assets/Logo.png" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <!-- ms-auto -> margin start auto - flexbox -->
                <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll mx-2" style="--bs-scroll-height: 100px;">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Join us</a>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Link
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li> -->
                </ul>
            </div>
            </div>
        </nav>
        
        `;
    }
}

customElements.define("nav-bar", NavBar);