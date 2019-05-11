const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//validator copied from emialregex.com

export default emails => {
	const invalidEmails = emails
		.split(",")
		//accepts , between array of emails
		.map(email => email.trim())
		//this func calls the trim and outputs an array of emails without spaces
		.filter(email => emailregex.test(email) === false);
	//validates each email in the array in boolean output

	if (invalidEmails.length) {
		return `Invalid Emails: ${invalidEmails}`;
	}

	return;
};
