import { useState, useEffect } from 'react';
import { toDollars } from '../lib';
import { type Product } from '../lib';
import { readCatalog } from '../lib';
import { Link } from 'react-router-dom';
import './Catalog.css';

export function Catalog() {
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getCatalog() {
      try {
        const values = await readCatalog();
        setCatalog(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCatalog();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {catalog?.map((product) => (
          <div key={product.productId} className="col-12 col-md-6 col-lg-4">
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};

function ItemCard({ product }: CardProps) {
  return (
    <Link
      to={`details/${product.productId}`}
      className="item card-body text-dark card mb-4 shadow-sm text-decoration-none">
      <img src={product.imageUrl} className="image" />
      <h5 className="card-title">{product.name}</h5>
      <p className="price">{toDollars(product.price)}</p>
      <p className="description">{product.shortDescription}</p>
    </Link>
  );
}
