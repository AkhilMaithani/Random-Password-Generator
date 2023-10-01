import PropTypes from "prop-types";

function ControlsContainer({
	length,
	isNumberAllowed,
	isCharacterAllowed,
	handleNumberChange,
	handleCharacterChange,
	handleRangeHandle,
}) {
	return (
		<>
			<div className="flex justify-between items-center flex-col md:flex-row gap-3 my-10 controls">
				<div className="w-full md:w-1/3 flex justify-center items-center bg-slate-800 p-2 range">
					<input
						type="range"
						min={0}
						max={100}
						value={length}
						id="range-input"
						onChange={(e) => handleRangeHandle(e)}
					/>
					<label
						htmlFor="range-input"
						className="text-orange-400 px-2"
					>
						len: {length}
					</label>
				</div>

				<div className="w-full md:w-1/3 flex justify-center items-center p-2 bg-slate-800">
					<input
						type="checkbox"
						checked={isNumberAllowed}
						onChange={() => handleNumberChange()}
						id="number-checkbox"
					/>
					<label
						htmlFor="number-checkbox"
						className="text-orange-400 px-2 flex justify-center items-center"
					>
						Number
					</label>
				</div>

				<div className="w-full md:w-1/3 flex justify-center items-center bg-slate-800 p-2">
					<input
						type="checkbox"
						checked={isCharacterAllowed}
						id="character-checkbox"
						onChange={() => handleCharacterChange()}
					/>
					<label
						htmlFor="character-checkbox"
						className="text-orange-400 px-2 flex justify-center items-center"
					>
						Character
					</label>
				</div>
			</div>
		</>
	);
}

ControlsContainer.propTypes = {
	length: PropTypes.number.isRequired,
	isNumberAllowed: PropTypes.bool.isRequired,
	isCharacterAllowed: PropTypes.bool.isRequired,
	handleNumberChange: PropTypes.func.isRequired,
	handleCharacterChange: PropTypes.func.isRequired,
	handleRangeHandle: PropTypes.func.isRequired,
};

export default ControlsContainer;
