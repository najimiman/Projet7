import React from "react";
import axios from "axios";
import "./css/Home.css";
class Home extends React.Component {
    state = {
        dataproducts: [], id: '', datafavorite: []
        // title:'',
        // description:'',price:'',discountPercentage:'',
        // rating:'',stock:'',brand:'',category:'',thumbnail:''
    }
    Afficherproducts = () => {
        axios.get('https://dummyjson.com/products').then(res => {
            console.log(res.data.products);
            this.setState({
                dataproducts: res.data.products
            })
        })
    }
    handeleproducts = (e) => {
        axios.get('https://dummyjson.com/products/search?q=' + e.target.value).then(res => {
            this.setState({
                dataproducts: res.data.products
            })
        })
    }
 
    affichefavorite = () => {
        axios.get('http://127.0.0.1:8000/api/index').then(res => {
            console.log(res.data);
            this.setState({ datafavorite: res.data })
        })
    }
    handelsubmit = (value) => {
        axios.post('http://127.0.0.1:8000/api/ajouter', value).then(res => {
            console.log(res.data);
            this.affichefavorite();
        })
        
    }
    handeledelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/destroy/' + id).then(res => {
            console.log(res.data);
            this.affichefavorite();
        })
    }
    componentDidMount = () => {
        this.Afficherproducts();
        this.affichefavorite();
    }
    render() {
        return (
            <div >
                <div>
                    <nav class="navbar navbar-light bg-light justify-content-between">
                        <a class="navbar-brand">p</a>
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" name="category" id="category" onChange={this.handeleproducts} placeholder="Search" aria-label="Search" />
                            <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                Link with href
                            </a>
                            </form>
                            {/* <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"> */}
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div>
                                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                    </div>
                                    <div class="dropdown mt-3">
                                        {this.state.datafavorite.map((value) => (
                                            <figure ClassName="itemside mb-4">
                                                <div ClassName="aside">
                                                    <img src={value.thumbnail} width="100px" height="100px" alt="Canvas Logo" />
                                                </div>
                                                <figcaption ClassName="info">
                                                    <a href="#" ClassName="btn btn-icon btn-light float-end"><i ClassName="fa fa-trash"></i></a>
                                                    <p> {value.title}</p>
                                                    <strong ClassName="price"> {value.price} </strong>
                                                </figcaption>
                                                
                                                <a href="#" onClick={() => this.handeledelete(value.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                                </a>
                                            </figure>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        
                    </nav>
                    <section class="padding-y">
                        <div class="container">
                            <header class="section-heading">
                                <h3 class="section-title">New products</h3>
                            </header>
                            <div class="row">
                                {this.state.dataproducts.map((value) => (
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                {/* <img src="images/items/1.webp">  */}
                                                <img src={value.thumbnail} width="250px" height="250px" alt="Canvas Logo" />
                                            </div>
                                            <figcaption class="info-wrap border-top">
                                                <div class="price-wrap">
                                                    <span class="price">{value.price}</span>
                                                </div>
                                                <p class="title mb-2">{value.title}</p>
                                                <a href="#" class="btn btn-primary" onClick={() => this.handelsubmit(value)}>Add to cart</a>
                                                <a href="#" class="btn btn-light btn-icon"> <i class="fa fa-heart"></i> </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        );
    }
}
export default Home;