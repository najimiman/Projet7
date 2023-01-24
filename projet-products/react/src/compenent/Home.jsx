import React from "react";
import axios from "axios";
import "./css/Home.css";
import Nav from "./nav";
import Carte from "./Carte";
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
                        <Nav handeleproducts={this.handeleproducts}/>
                            {/* <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"> */}
                        <Carte handeledelete={this.handeledelete}
                        lista={this.state.datafavorite}/>
                    <section class="padding-y">
                        <div class="container">
                            <header class="section-heading">
                                <h3 class="section-title">New products</h3>
                            </header>
                            <div class="row">
                                {this.state.dataproducts.map((value) => (
                                    <div class="col-lg-3 col-md-6 col-sm-6 p-3 bg-light">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                {/* <img src="images/items/1.webp">  */}
                                                <img src={value.thumbnail} width="250px" height="250px" className="rounded" alt="Canvas Logo" />
                                            </div>
                                            <figcaption class="p-3 bg-light border">
                                                <div class="price-wrap">
                                                    <span class="price">{value.price}</span>
                                                </div>
                                                <p class="title mb-2">{value.title}</p>
                                                <a href="#" class="btn btn-primary" onClick={() => this.handelsubmit(value)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style={{color:'red'}} fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg></a>
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