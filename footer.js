class Footer extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({ mode: "open" }); 
    }

    connectedCallback() {   
        this.render();
    }

    render(){
        this.shadow.innerHTML = `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/578260ced6.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./public/css/style.css">


        <footer class="pt-4">

            <div class="container-fluid text-center text-md-left">

                <div class="row">

                <div class="col-lg-3 mr-2 my-2">
                    <img src="./assets/Logo-inverted.png" alt="">
                </div>

                <div class="col-lg-5"></div>

                <div class="col-lg-4">
                    <i class="fab fa-facebook-square fa-3x"></i>
                    <i class="fab fa-instagram-square fa-3x"></i>
                    <i class="fab fa-linkedin fa-3x"></i>
                </div>

                </div>

                <div class="row">

                <div class="col-lg-4">
                    <p>© 2021 VolenSer. All rights reserved.</p>
                </div>

                <div class="col-lg-4"></div>

                <div class="col-lg-4">
                    <a href="terms.html">Terms of Use</a>
                    <span>|</span>
                    <a href="privacy.html">Privacy</a>
                </div>

                </div>

            </div>

        </footer>
        
        `;
    }
}

customElements.define("footer-section", Footer);