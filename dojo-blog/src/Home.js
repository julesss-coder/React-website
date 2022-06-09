import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = (/*props*/) => {
  // Passing in props to Home and logging props to the console results in an empty props object.
  // the same happened when I passed props to App. 
  // Assumption: The DOM is rendered from the top to the bottom of the component tree. At this point, props has not been assigned a custom property yet.
  // Or is there a separate props object for each component?
  // console.log('props in Home component: ', props);

  // is each blog's id connected to the id property of the hooks?
  // No. The blogs array is the value of the 'value' property of index 0 of the hooks array.
  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ]);

  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    // Q: How do we get the correct id?
    // A: We passed in props to the Bloglist component. blogs is a property of props. id is a property of blogs. Each blog has a unique id that we can access in the Bloglist component. By clicking the delete button, we pass in the id to the handleDelete function.
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  // [name] as the second argument means: Only run useEffect when name state changes
  // Bin ab Lektion 16 ausgestiegen, werde erst diese Konzepte auf Altcademy lernen, dann dieses Tutorial nocheinmal ab Lektion 16 ansehen
  useEffect(() => {
    console.log('useEffect ran');
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      })
  }, []); // [] means this function is fired only on the initial render

  // Put a hook in 'mario'
  // const [name, setName] = useState('mario'); // this state value inside useState() is REACTIVE, ie. if it changes, it will change inside the template as well
  // const [age, setAge] = useState(25); // put a hook in 25


  // const handleClick = () => {
  //   // When we use this function to change the name, this triggers React to rerender the component with the updated name
  //   setName('luigi');
  //   setAge(40);
  // }

  return ( 
    <div className="home">
      {/* <h2>Homepage</h2>
      <p>{ name } is { age } years old.</p>
      <button onClick={handleClick}>Click me</button> */}
      {/* Add a key property to each item when iterating over array, must be unique */}
      {/* <Bloglist blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      <Bloglist blogs={blogs.filter((blog) =>       
        blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}>Change name</button>
      <p>{name}</p> */}
    </div>
   );
}
 
export default Home;