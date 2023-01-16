import React from "react";
import axios from "axios";
class Home extends React.Component{
    state={
        dataproducts:[],id:''
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
    //     axios.get('https://dummyjson.com/products/'+id,this.state).then(res=>{
    //         this.setState({

    //         })
    //     })
    // }
    handeledit=(id)=>{
        axios.get('https://dummyjson.com/products/'+id).then(res=>{
            console.log(res.data);
                    // this.setState({
                    //     id:res.data.products.id,
                    //     title:res.data.products.title
                    // })
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
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.price}</td>
                            <td>{value.discountPercentage}</td>
                            <td><img src={value.images[0]} width="250px" height="250px" alt="Canvas Logo" /></td>
                            <td><button onClick={()=>this.handelsubmit(value.id)}>Ajouter</button></td>
                            <td><button onClick={()=>this.handeledit(value.id)}>edit</button></td>
                        </tr>
                    ))}
                </tbody>
             </table>
             </div>
        );
    }
}
export default Home;