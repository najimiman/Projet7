import React from "react";
import axios from "axios";
import "./css/Home.css";
class Home extends React.Component {
    state = {
        dataproducts: [], id: '',
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
    handelsubmit = (value) => {
        // axios.get('https://dummyjson.com/products/'+id).then(res=>{
        //     console.log(res.data);
        //     axios.post('http://127.0.0.1:8000/api/ajouter',res.data)
        //             // this.setState({
        //             //     id:res.data.id,
        //             //     title:res.data.title,
        //             //     description:res.data.description,
        //             //     price:res.data.price,
        //             //     discountPercentage:res.data.discountPercentage,
        //             //     rating:res.data.rating,
        //             //     stock:res.data.stock,
        //             //     brand:res.data.brand,
        //             //     category:res.data.category,
        //             //     thumbnail:res.data.thumbnail
        //             // })
        //         })

        axios.post('http://127.0.0.1:8000/api/ajouter', value).then(res => {
            console.log(res.data);
        })
    }
    componentDidMount = () => {
        this.Afficherproducts();
    }
    render() {
        return (
            <div >
                <div class="float-left">
                <label htmlFor="" className="font-weight-normal">Search par category:</label><input type="text" name="category" id="category" onChange={this.handeleproducts} />
                <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light float-right">
                    <i className="fa fa-shopping-cart"></i> <span class="ms-1">My cart </span>
                </a>
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


                <div class="float-right">
                <aside ClassName="offcanvas offcanvas-end show" style={{visibility:"visible"}} tabindex="-1" id="offcanvas_cart"  aria-modal="true" role="dialog">
                    <div ClassName="offcanvas-header">
                        <h5 ClassName="offcanvas-title">Your cart (3) </h5>
                        <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
                    
                    </div>
                    <div ClassName="offcanvas-body">
                                {/* list */}
                        <figure ClassName="itemside mb-4">
                            <div ClassName="aside">
                                <h1>image</h1>
                            </div>
                            <figcaption ClassName="info">
                                <a href="#" ClassName="btn btn-icon btn-light float-end"><i ClassName="fa fa-trash"></i></a>
                                <p> Leather Wallet for Men</p>
                                <span ClassName="text-muted">1 x $200.95 </span> 
                                <strong ClassName="price"> $400.90 </strong>
                            </figcaption>
                        </figure>
                     

                        <p ClassName="mb-3 text-center"> Subtotal:  <strong ClassName="text-danger">$893.00</strong>  </p>
                        <div ClassName="mb-3">
                            <a href="#" ClassName="btn w-100 btn-success"> Checkout </a>
                        </div>
                        <p ClassName="mb-3 text-center"> <h1>image</h1> </p>

                    </div>
                </aside>
                </div>
            </div>
            
        );
    }
}
export default Home;