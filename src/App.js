import './App.css';
import Header from './components/Header';
import Footer from './components/post/Footer';
import Post from './components/post/Post';
const App = () => {
  return (
    <div className='container'>
      <Header />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
