import React, { Component } from 'react';

class View extends Component {
  render() {
    return (
      <div className = "projectPanel">

      {/* Page Content*/}
<div className="container">

  <div className="row">

    <div className="col-lg-3">
      <h1 className="my-4">Poster Info Here</h1>
      <div className="list-group">
        <a href="#" className="list-group-item active">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
    </div>
    {/* /.col-lg-3 */}

    <div className="col-lg-9">

      <div className="card mt-4">
        <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""/>
        <div className="card-body">
          <h3 className="card-title">Project Name</h3>
          <h4>Difficulty rating</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
          <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span>
          4.0 stars
        </div>
      </div>
      {/* /.card */}

      <div className="card card-outline-secondary my-4">
        <div className="card-header">
          Overview
        </div>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
          <small className="text-muted">Posted by Anonymous on 3/1/17</small>

          { /* Supplies list */ }

          <div className="panel panel-default">
          <div className="panel-header">
          Supplies Needed
          </div>
            <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  </div>




        </div>
      </div>
      {/* /.card */}

    </div>
    {/* /.col-lg-9 */}

  </div>

</div>
  { /* /.container */ }

      </div>
    );
  }
}

export default View;
