import React from "react";
class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <form class="d-flex" role="search">
                                    <input class="form-control mr-sm-2" type="search" name="category" id="category" onChange={this.props.handeleproducts} placeholder="Search" aria-label="Search" />
                                </form>
                            </li>
                            
                            <li class="nav-item ms-3">
                            {/* <select onChange={this.props.handelfilter} id="input">
                                <option value="vide">category</option>
                                {this.props.category.map((item)=>(
                                    <option value={item.id} key={item.id}>{item}</option>
                                ))}
                            </select> */}
                            <div class="dropdown">
                                <select onChange={this.props.handelfilter} class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background: 'white', color:'black'}}>
                                    <option value="vide">category</option>
                                    {this.props.category.map((item)=>(
                                        <option value={item.id} key={item.id} class="dropdown-item">{item}</option>
                                        ))}
                                </select>
                            </div>
                        </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <label htmlFor="" style={{ color: '#FFFF' }}>{this.props.countf}</label>
                            <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style={{ color: '#FFFF' }} fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;