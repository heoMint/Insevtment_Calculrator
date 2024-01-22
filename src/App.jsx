import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 12000,
		annualInvestment: 1000,
		expectedReturn: 10,
		duration: 10,
	});
	const inputIsValid = userInput.duration >= 1;

	// 예전 userInput의 상태를 객체로 펼침
	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput
				userInput={userInput}
				onChange={handleChange}
			/>
			{!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
			{inputIsValid && <Results input={userInput} />}
		</>
	);
}

export default App;
