// From navbar old
<h1><a href="#"><img src={require("/Assets/images/logo.png")} alt = "logo"/></a></h1>


//from bootstrap navbar - form not working with react?
<form className="form-inline mt-2 mt-md-0">
  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form>

// pin and pinterest icons

<i className="fas fa-thumbtack"></i>
<i className="fab fa-pinterest-square"></i>

// Masonry declaration
import Masonry from 'react-masonry-component';

// Old card layout

<div className ="projectsBgd">
{/* BEGIN CARD SECTION */}
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'} />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      {/* New Card */}
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'} />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>

        </div>

      {/* New Card */}
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'} />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      </div>
  {/* New Row */}
{/* New Card */}
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'} />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      {/* New Card */}
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'} />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      {/* New Card */}
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'} />
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      </div>
{/* New Row */}
{/* New Card */}
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'}/>
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      {/* New Card */}
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'}/>
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>
        </div>
      {/* New Card */}
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={require('../../Assets/images/floral.jpg')} alt={'text'}/>
          <div className="card-body">
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/View">View</Link></button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">11 mins</small>
            </div>
          </div>
        </div>

      </div>


      {/* END CARD SECTION */}
       </div>

    </div>


    // Homepage Panel jumbotron shadowPanel
    <div className="shadowPanel">
      <h1 className="display-3">Welcome to Cact.io!</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <p><a className="btn btn-primary btn-lg" href="#" role="button">Get Started »</a></p>
        </div>

    // Project page Panel jumbotron shadowPanel
        <div className="shadowPanel">
          <h1 className="display-3">Welcome to Cact.io!</h1>
          <p>This is where all of our cool projects will go. This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Browse Projects »</a></p>
            </div>
