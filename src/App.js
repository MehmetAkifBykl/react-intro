
import logo from "./logo.svg"
function App() {
  return (
    <div className="App">
      {/* 
      Burda direkt böyle çağıarabiliyoruz public altındaki dosyalar direk ana dizindeki url 0 dan gelebiliyor.
      public altındaki dosyalar statikdir yani her yerde kullanılıcak ise oraya koy ör favicon ör header logo
      <img src="favicon.ico"/>
      */} 
      <img src="favicon.ico"/>
      {/* 
      import logo from "./logo.svg"
      Burda ise farklı klasörder bir resim aldık ama once bunu inport etmemiz gerekiyor.
      <img src={logo} />
      */} 
      <img src={logo} />

    </div>
  );
}

export default App;
