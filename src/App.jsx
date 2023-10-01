import FormArea from "./components/FormArea";

function App() {
	return (
		<>
			<header className="text-4xl text-stone-50 font-sans flex justify-center items-center bg-slate-800">
				Password Generator
			</header>
			<main className="w-full flex justify-center items-center">
				<FormArea />
			</main>
		</>
	);
}

export default App;
