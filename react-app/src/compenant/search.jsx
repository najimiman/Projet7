import React from "react";
import axios from "axios";
class Search extends React.Component{
    state={
        Nom:'',Result:'',list:[],Nmpre:''
    }
    handelsearch=(e)=>{
        if(e!=''){
            axios.get('http://127.0.0.1:8000/api/search/'+e.target.value).then(res=>{
                console.log(res.data);
                this.setState({
                    Result:res.data.Result
                })
            })
        }
       else{
        this.state.Result='';
       }
    }
    handelsearch2=(e)=>{
        if(e!=''){
            axios.get('http://127.0.0.1:8000/api/search2/'+e.target.value).then(res=>{
                console.log(res.data);
                this.setState({
                    list:res.data
                })
            })
        }
    }
    render(){
        return(
            <div>
                <h1>hello search1</h1>
                <input id="Nom" name="Nom" onChange={this.handelsearch}/>
                <h1 value={this.state.Result} name='message'>{this.state.Result}</h1>
                <h1>hello search2</h1>
                <input id="Nmpre" name="Nmpre" onChange={this.handelsearch2}/>
                <table>
                    <thead>
                        <th>Nom</th>
                    </thead>
                    <tbody>
                        {this.state.list.map((value)=>(
                            <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.Nom}</td>
                            <td>{value.Prenom}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Search;