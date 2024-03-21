const Categories = ({ categories }: CategoriesProps) => <div className="flex-column justify-content-between g-2" style={{width: "100%"}}>{
  categories.map((categoryItem) => (<div key={categoryItem}><a href="#">{categoryItem}</a></div>))
}</div>


export default Categories;

interface CategoriesProps {
  categories: Array<string>
}