import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchItemAction } from "../../../redux/common/action";
import Logo from "../../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const dispach = useDispatch();
  const inputRef = useRef(null);
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispach(searchItemAction(search));
  }, [search]);

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 191)) {
        e.preventDefault();
        inputRef.current.focus();
      }
    });
  });

  return (
    <nav className="navbar navbar-default fixed-top navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <div>
          <div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={inputRef}
                onChange={(e) => handleChange(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
