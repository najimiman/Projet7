import React from "react";
import axios from "axios";
class Search extends React.Component{
    state={
        Nom:'',Result:'',list:[],Nmpre:'',Nom2:'',id2:'',bb:''
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
    afficheall=()=>{
        axios.get('http://127.0.0.1:8000/api/all').then(res=>{
            console.log(res.data);
            this.setState({
                list:res.data
            })
        })
    }
    handelsearch2=(e)=>{
        // if(e!=''){
            axios.get('http://127.0.0.1:8000/api/search2/'+e.target.value).then(res=>{
                console.log(res.data);
                this.setState({
                    list:res.data
                })
            })
        // }
    }
   
    // componentDidMount=()=>{
    //     this.afficheall();
    // }
    handelsubmit=(id)=>{
        axios.get('http://127.0.0.1:8000/api/edit/'+id).then(res=>{
            console.log(res.data);
            this.setState({
                Nom2:res.data.Nom,
                id2:res.data.id
            })
        })
        let aa=this.state.list;
        const index=aa.indexOf(id);
        // this.setState({bb:index});
        
        aa.splice(index,1);
    }
        handeldelete=()=>{
            // let aa=this.state.Nom2;
            // const index=aa.indexOf(id2);
            // // this.setState({bb:index});
            
            // aa.splice(index,1);
            this.setState({Nom2:''});
            this.afficheall();
        }
    render(){
        return(
            <div>
                <h1>hello search1</h1>
                {/* <h1>{this.state.bb}</h1> */}
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
                            <td><button onClick={()=>this.handelsubmit(value.id)}>Ajouter</button></td>
                           
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <th>Nom</th>
                    </thead>
                    <tbody>
                            <tr>
                            <td>{this.state.Nom2}</td>
                            <td><button onClick={()=>this.handeldelete()}>delete</button></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Search;