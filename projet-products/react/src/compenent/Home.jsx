import React from "react";
import axios from "axios";
import "./css/Home.css";
import Nav from "./nav";
import Carte from "./Carte";
class Home extends React.Component {
    state = {
        dataproducts: [], id: '', datafavorite: [],countf:'',category:[]
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
    handelfilter=(e)=>{
        console.log(e.target.value);
        axios.get('https://dummyjson.com/products/category/' + e.target.value).then(res => {
            if(e.target.value!="vide"){
                this.setState({
                    dataproducts: res.data.products
                })
            }
            else if(e.target.value=="vide"){
                this.Afficherproducts();
            }
        })
    }
    handelcategory=()=>{
        axios.get('https://dummyjson.com/products/categories').then(res => {
            console.log(res.data);
            this.setState({
                category: res.data
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
        console.log(value.id);
    const user = this.state.datafavorite.find((user) => user.title === value.title);
    console.log(user);
    if(!user){
        console.log("not existe");
        axios.post('http://127.0.0.1:8000/api/ajouter', value).then(res => {
            console.log(res.data);
            this.affichefavorite();
            this.handelcount();
            alert('Enregistre');
        })
        
    }
    else{
        console.log('deja existe');
        alert('déja existe');
    }
        
        
    }
    handeledelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/destroy/' + id).then(res => {
            console.log(res.data);
            this.affichefavorite();
            this.handelcount();
        })
    }
    handelcount=()=>{
        axios.get('http://127.0.0.1:8000/api/countfavorite').then(res => {
            console.log(res.data);
            this.setState({ countf: res.data })
        })
    }
    componentDidMount = () => {
        this.Afficherproducts();
        this.affichefavorite();
        this.handelcount();
        this.handelcategory();
    }
    render() {
        return (
            <div >
                <div>
                        <Nav handeleproducts={this.handeleproducts}
                        handelfilter={this.handelfilter}
                        countf={this.state.countf}
                        category={this.state.category}
                        />
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
                                                <button  class="btn btn-primary" onClick={() => this.handelsubmit(value)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style={{color:'black'}} fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                                </button>
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