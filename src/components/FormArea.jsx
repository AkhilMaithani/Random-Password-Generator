import PasswordContainer from "./PasswordContainer";
import ControlsContainer from "./ControlsContainer";
import { useEffect, useState, useCallback } from "react";

function FormArea() {
	const [data, setData] = useState("");
	const [length, setLength] = useState(8);
	const [isNumberAllowed, setIsNumberAllowed] = useState(false);
	const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);

	const handleNumberChange = () => {
		setIsNumberAllowed((prev) => !prev);
	};

	const handleCharacterChange = () => {
		setIsCharacterAllowed((prev) => !prev);
	};

	const handleRangeHandle = (e) => {
		let number = Number.parseInt(e.target.value, 10);
		setLength(number);
	};

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (isNumberAllowed === true) {
			str += "0123456789";
		}

		if (isCharacterAllowed === true) {
			str += "`~!@#$%^&*()[]{}/<>";
		}

		for (let i = 1; i <= length; i += 1) {
			let index = Math.floor(Math.random() * str.length);
			pass += str[index];
		}

		return pass;
	}, [length, isCharacterAllowed, isNumberAllowed]);

	useEffect(() => {
		let res = passwordGenerator();
		setData(res);
	}, [passwordGenerator, length, isCharacterAllowed, isNumberAllowed]);

	return (
		<>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="my-10 bg-slate-900 px-2 py-2 md:px-10 md:py-2"
			>
				<PasswordContainer data={data} />
				<ControlsContainer
					length={length}
					isNumberAllowed={isNumberAllowed}
					isCharacterAllowed={isCharacterAllowed}
					handleRangeHandle={handleRangeHandle}
					handleCharacterChange={handleCharacterChange}
					handleNumberChange={handleNumberChange}
				/>
			</form>
		</>
	);
}

export default FormArea;
