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
                            <label htmlFor="" style={{ color: 'red' }}>{this.props.countf}</label>
                            <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style={{ color: 'red' }} fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
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