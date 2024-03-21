// component
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';
import Categories from '@/components/Categories';

const dummyCategories = ["Frozen", "Fresh", "Beverages", "Home", "Pet-food"];

const dummyData = [
  {_id: 1, name: 'product 1', image: 'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg', unit: '500 gram', price: 1.22, stock: 34},
  {_id: 2, name: 'product 2', image: 'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg', unit: "Pack of 10", price: 100, stock: 10},
  {_id: 3, name: 'product 3', unit: 'Kilo', price: 5.4, stock: 0},
  {_id: 4, name: 'product 4', image: 'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg', unit: 'Cup', price: 30, stock: 3},
  {_id: 5, name: 'product 5', image: 'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg', unit: 'Litre', price: 2.03, stock: 34},
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="flex-row">
          <aside className="col-3">
            <Categories categories={dummyCategories}/>
          </aside>
      <section className="flex-row justify-content-start  my-5 col-9 g-3">
      {dummyData.map(({_id, ...item}) => (<ProductItem item={item} key={_id} />))}
      </section>
      </div>
      </main>
      </>
  );
}
