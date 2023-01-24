import React from "react";
class Carte extends React.Component {
    render() {
        return (
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Fovorise</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <h1>List favoris</h1>
                    </div>
                    <div class="container-fluid">
                        {this.props.lista.map((value) => (
                            <div class="row g-0 itemside mb-2">
                              <div class="col-md-4">
                              <img src={value.thumbnail} width="100px" height="100px" alt="Canvas Logo" />
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title"><small class="text-muted">{value.title}</small></h5>
                            <p class="card-text">{value.price} </p>
                            <p class="card-text"> <a href="#" onClick={() => this.props.handeledelete(value.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            </a></p>
                                </div>
                              </div>
                            </div>
                         

                        ))}
                    </div>

                </div>
            </div>
        );
    }
}
export default Carte;