import React from "react";

const AccountSubscription: React.FC = () => {
	return (
		<div>
			<h2 className="mb-8 text-3xl font-bold text-gray-800 sm:text-5xl">Subscription</h2>
			<h3 className="mb-4 text-lg font-semibold sm:text-xl">Current Plan:</h3>
			<div className="mb-4 flex flex-col items-center justify-center space-x-4 sm:flex-row">
				<input id="plan" className="mb-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-gray-500" type="text" value="Premium Plan" disabled={true} />
				<p className="text-sm font-medium text-gray-400 sm:text-base">(Currently our services are free of charge for anyone to use)</p>
			</div>
		</div>
	);
};

export default AccountSubscription;
