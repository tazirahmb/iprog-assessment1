const Categories = ({ categories }: CategoriesProps) => (
	<nav className="flex-column justify-content-between g-1">
		{categories.map((categoryItem) => (
			<div key={categoryItem}>
				<a href="#">{categoryItem}</a>
			</div>
		))}
	</nav>
);

export default Categories;

interface CategoriesProps {
	categories: Array<string>;
}
