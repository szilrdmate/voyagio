import React from "react";

const AccountSubscription: React.FC = () => {
	return (
		<div>
			<h2 className="mb-8 text-5xl font-bold text-gray-800">Subscription</h2>
			<h3 className="mb-4 text-xl font-semibold">Current Plan:</h3>
			<div className="jsutify-center mb-4 flex items-center space-x-4">
				<input id="plan" className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-gray-500" type="text" value="Premium Plan" disabled={true} />
				<p className="text-base font-medium text-gray-400">(Currently our services are free of charge for anyone to use)</p>
			</div>
		</div>
	);
};

export default AccountSubscription;
