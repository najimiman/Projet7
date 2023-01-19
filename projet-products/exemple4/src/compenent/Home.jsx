import React from "react";
import axios from "axios";
class Home extends React.Component{
    state={
        dataproducts:[],id:'',
        // title:'',
        // description:'',price:'',discountPercentage:'',
        // rating:'',stock:'',brand:'',category:'',thumbnail:''
    }
    Afficherproducts=()=>{
        axios.get('https://dummyjson.com/products').then(res=>{
            console.log(res.data.products);
        this.setState({
            dataproducts:res.data.products
        })
        })
    }
    handeleproducts=(e)=>{
        axios.get('https://dummyjson.com/products/search?q='+e.target.value).then(res=>{
            this.setState({
                dataproducts:res.data.products
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
    handelsubmit=(value)=>{
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
                
                axios.post('http://127.0.0.1:8000/api/ajouter',value).then(res=>{
                    console.log(res.data);
                        })
    }
    componentDidMount=()=>{
        this.Afficherproducts();
    }
    render() {
        return (
             <div>
                <label htmlFor="" className="font-weight-normal">Search par category:</label><input type="text" name="category" id="category" onChange={this.handeleproducts}/>
                <table>
                <tbody>
                        <tr>
                            <td value={this.state.id}>{this.state.id}</td>
                            <td value={this.state.title}>{this.state.title}</td>
                            <td value={this.state.price}>{this.state.price}</td>
                            <td value={this.state.discountPercentage}>{this.state.discountPercentage}</td>
                            {/* <td><img src={value.images[0]} width="250px" height="250px" alt="Canvas Logo" /></td> */}
                            {/* <td><img src={value.thumbnail} width="250px" height="250px" alt="Canvas Logo" /></td> */}
                            {/* <td><button onClick={()=>this.handelsubmit(value.id)}>Ajouter</button></td>
                            <td><button onClick={()=>this.handeledit(value.id)}>edit</button></td> */}
                        </tr>
                </tbody>
             </table>
             <table>
                <thead>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>discountPercentage</th>
                    <th>image</th>
                </thead>
                <tbody>
                    {this.state.dataproducts.map((value)=>(
                        <tr>
                            <td value={this.state.id}>{value.id}</td>
                            <td value={this.state.title}>{value.title}</td>
                            <td value={this.state.price}>{value.price}</td>
                            <td value={this.state.discountPercentage}>{value.discountPercentage}</td>
                            {/* <td><img src={value.images[0]} width="250px" height="250px" alt="Canvas Logo" /></td> */}
                            <td><img src={value.thumbnail} width="250px" height="250px" alt="Canvas Logo" /></td>
                            <td><button onClick={()=>this.handelsubmit(value)}>Ajouter</button></td>
                            {/* <td><button onClick={()=>this.handeledit(value.id)}>edit</button></td> */}
                        </tr>
                    ))}
                </tbody>
             </table>
            
             </div>
        );
    }
}
export default Home;