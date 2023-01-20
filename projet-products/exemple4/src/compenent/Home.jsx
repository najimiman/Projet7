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
    // handelsubmit=(id)=>{
    //     let id=this.state.value;
    //     axios.get('http://127.0.0.1:8000/api/ajouter',this.state).then(res=>{
    //         this.setState({

    //         })
    //     })
    // }
    affichefavorite = () => {
        axios.get('http://127.0.0.1:8000/api/index').then(res => {
            console.log(res.data);
            this.setState({ datafavorite: res.data })
        })
    }
    handelsubmit = (value) => {
        axios.post('http://127.0.0.1:8000/api/ajouter', value).then(res => {
            console.log(res.data);
        })
        this.affichefavorite();
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
                            <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light float-right">
                                <i className="fa fa-shopping-cart"></i> <span class="ms-1">My cart </span>
                            </a>
                        </form>
                    </nav>
                    {/* <table>
                <thead>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>discountPercentage</th>
                    <th>image</th>
                </thead>
                <tbody>
                    {this.state.dataproducts.map((value)=>(
                        <tr> */}
                    {/* <td value={this.state.id}>{value.id}</td>
                            <td value={this.state.title}>{value.title}</td>
                            <td value={this.state.price}>{value.price}</td>
                            <td value={this.state.discountPercentage}>{value.discountPercentage}</td> */}
                    {/* <td><img src={value.images[0]} width="250px" height="250px" alt="Canvas Logo" /></td> */}
                    {/* <td><img src={value.thumbnail} width="250px" height="250px" alt="Canvas Logo" /></td>
                            <td><button onClick={()=>this.handelsubmit(value)}>Ajouter</button></td> */}
                    {/* <td><button onClick={()=>this.handeledit(value.id)}>edit</button></td> */}
                    {/* </tr>
                    ))}
                </tbody>
             </table> */}

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
                <div>
                    <aside ClassName="offcanvas offcanvas-end show" style={{ visibility: "visible" }} tabindex="-1" id="offcanvas_cart" aria-modal="true" role="dialog">
                        <div ClassName="offcanvas-header">
                            <h5 ClassName="offcanvas-title">Your cart (3) </h5>
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                        </div>
                        <div ClassName="offcanvas-body">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </figure>
                            ))}
                            <p ClassName="mb-3 text-center"> Subtotal:  <strong ClassName="text-danger">$893.00</strong>  </p>
                            <div ClassName="mb-3">
                                <a href="#" ClassName="btn w-100 btn-success"> Checkout </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

        );
    }
}
export default Home;