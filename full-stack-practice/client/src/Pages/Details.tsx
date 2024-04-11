import { useState, useEffect } from 'react';
import { type Product } from '../lib';
import { toDollars } from '../lib';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Details.css';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { productId } = useParams();

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) throw new Error('Response connection not OK');
        const item = await res.json();
        setProduct(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { imageUrl, name, price, shortDescription, longDescription } = product;

  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Link to="/" className="btn text-secondary">
                &lt; Back to Catalog
              </Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={imageUrl} alt={name} className="image" />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{name}</h2>
              <h4 className="price">{toDollars(price)}</h4>
              <p>{shortDescription}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="description">{longDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="no-decoration"
        onClick={() => alert(`Added ${name} to cart.`)}>
        <button className="btn btn-light">Add to Cart</button>
      </Link>
    </div>
  );
}
