import { FC, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	disabled?: boolean;
	onClickHandler: () => void;
}

const Button: FC<ButtonProps> = ({ disabled, onClickHandler, children }) => {
	return (
		<button
			className="w-36 m-6 py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white rounded hover:shadow-md transition-all "
			onClick={onClickHandler}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
