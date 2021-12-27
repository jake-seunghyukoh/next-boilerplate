interface ButtonProps {
	name: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ name, onClick }: ButtonProps) {
	return <button onClick={onClick}>{name}</button>;
}
