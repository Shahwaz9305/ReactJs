const Header =()=>{
    return (
      <div className="header">
          <div className="logo-container">
              <img className="logo" src="https://images.unsplash.com/photo-1573767915027-9b508c72b08f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" />
          </div>
          <div className="listItem">
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
  
              </ul>
          </div>
      </div>
    );
  }

export default Header;