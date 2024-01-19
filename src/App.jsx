import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';


function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 1200,
		annualInvestment: 10000,
		expected: 10,
		duration: 10,
	});

	// 예전 userInput의 상태를 객체로 펼침
	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue,
			};
		});
	}
	return (
		<>
			<Header />
			<UserInput />
		</>
	);
}

export default App;
