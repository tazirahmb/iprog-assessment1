const Categories = ({ categories }: CategoriesProps) => (
	<nav className="flex-column justify-content-between g-1">
		{categories.map(({ _id, name }) => (
			<div key={_id}>
				<a href={`?category=${_id}`}>{name}</a>
			</div>
		))}
	</nav>
);

export default Categories;

interface CategoriesProps {
	categories: Array<{
		_id: string;
		name: string;
	}>;
}
