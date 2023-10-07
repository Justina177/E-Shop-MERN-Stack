import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
// import cart3 from '../../images/chart 3.png'
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiMessageSquareEdit } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs"
const Header = () => {
  return (
    <>
    <header className="header-top py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">Free Shiping</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              HotLine:
              <a className="text-white" href="tel:+234 812345678">+234 812345678</a>
            </p>
          </div>
        </div>
      </div>
    </header>

    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h1>
              <Link className="text-white"to ="/">E-Shop</Link>
            </h1>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input type="text" 
                className="form-control py-2"
                placeholder="Serch Product Here..."
                aria-label="Serch Product Here..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
            <div className="">
              <Link className="d-flex align-items-center gap-10 text-white">
              <MdProductionQuantityLimits className="img-top" />
                <p className="mb-0">Products</p>
              </Link>
            </div>
            <div className="">
              <Link className="d-flex align-items-center gap-10 text-white">
              <BiMessageSquareEdit className="img-top" />
                <p className="mb-0">Contact</p>
              </Link>
            </div>
            <div className="">
              <Link className="d-flex align-items-center gap-10 text-white">
              <CiUser className="img-top" />
                <p className="mb-0">
                  Account 
                </p>
              </Link>
            </div>
            <div className="">
              <Link className="d-flex align-items-center gap-10 text-white">
              <BsCart4 className="img-top" />
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">0</span>
                  <p className="mb-0"># 500</p>
                </div>
              </Link>
            </div>
            </div>
          </div> 
        </div>
      </div>
    </header>

    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div className="">
                <div className="dropdown">
                  <button 
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">Our Store</NavLink>
                  <NavLink to="/">Blogs</NavLink>
                  <NavLink to="/">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
      
    </>
  )
}

export default Header