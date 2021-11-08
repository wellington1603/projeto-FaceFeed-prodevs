import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import InputPostFeed from './components/InputPostFeed';
import MenuLeft from './components/MenuLeft'



function App() {
  return (
    <div className="App">
      <Header />
      <div className='Feed'>
        <MenuLeft />

        <div className='MenuRight'>
          <div className='MenuRight-story'>
              <img src='https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg' />
          </div>
          <div className='MenuRight-story'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FuFnST1EPibpy35_I7X3UceuMRLzPr0XIg&usqp=CAU' />
          </div>
          <div className='MenuRight-story'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIYiK5xjE-_neF4VRa2vAVrMOLGy_uipsGw&usqp=CAU' />
          </div>
          <div className='MenuRight-story'>
            <img src='https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' />
          </div>
          <div className='MenuRight-story'>
            <img src='https://www.bancobs2.com.br/wp-content/uploads/2020/09/logo-quadrado-azul.png' />
          </div>
          
        </div>
      </div>
        <InputPostFeed />
        <Card />
      <Footer />
    </div>
  );
}

export default App;
