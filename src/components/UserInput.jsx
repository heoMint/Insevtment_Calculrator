import { useState } from 'react';

export default function UserInput() {
	
	return (
		<section id='user-input'>
			<div id='input-group'>
				<p>
					<label>Initial Investment</label>
					<input
						type='number'
						required
						value={userInput.initialInvestment}
						onChange={(event) => handleChange('Initial Investment', event.target.value)}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type='number'
						required
						value={userInput.annualInvestment}
						onChange={(event) => handleChange('Annual Investment', event.target.value)}
					/>
				</p>
			</div>
			<div id='input-group'>
				<p>
					<label>Expected Return</label>
					<input
						type='number'
						required
						value={userInput.expected}
						onChange={(event) => handleChange('Expected Return', event.target.value)}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type='number'
						required
						value={userInput.duration}
						onChange={(event) => handleChange('Duration', event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
