import { useRef } from "react";
import PropTypes from "prop-types";

function PasswordContainer({ data }) {
	const inputRef = useRef(null);

	const handleCopyData = () => {
		inputRef.current.select();
		window.navigator.clipboard.writeText(inputRef.current.value);
	};

	return (
		<>
			<div className="input-container w-full my-10">
				<input
					type="text"
					placeholder="password..."
					value={data}
					readOnly
					className="p-3 w-full"
					ref={inputRef}
				/>
				<button
					type="button"
					className="text-white bg-blue-800 hover:bg-blue-700 p-3"
					onClick={handleCopyData}
				>
					Copy
				</button>
			</div>
		</>
	);
}

PasswordContainer.propTypes = {
	data: PropTypes.string.isRequired,
};

export default PasswordContainer;
