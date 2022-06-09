const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The dojo blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={
          {fontWeight: 'bold'}
        }>New Blog</a>
      </div>
    </nav>
   );
}
 
export default Navbar;