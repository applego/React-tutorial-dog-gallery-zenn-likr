import BreedList from './dataBreedList';

import { useEffect, useState } from 'react';
import { fetchImages } from './api';

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src={props.url}
            alt="cute dog"
          />
        </figure>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <p>Loading...</p>
  );
}

function Gallery(props) {
  const { urls } = props;
  if (urls === null) {
    return <Loading />
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map(url => {
        return (
          <div key={url} className="column is-3">
            <Image url={url} />
          </div>
        );
      })}
    </div>
  );
}

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="breed" defaultValue="shiba">
                {/* <option value="shiba">Shiba</option>
                <option value="akita">Akita</option> */}
                {BreedList.map((breed, index) => {
                  return <option key={index.toString()} value={breed}>{breed}</option>
                })};
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Main() {
//   const urls = [
//   "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-17.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
//   "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
// ];
  // const urls = null;
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
