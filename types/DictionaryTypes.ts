export type DictionaryTypes = {
	dictionary: {
		counter: CounterType;
		header: HeaderType;
		where: WhereType;
		menu: MenuType;
		form: FormType;
		present: PresentType;
		transport: TransportType;
	};
};

export type TransportType = {
	title: string;
	schedule: string;
	meetingPoint: string;
};

export type PresentType = {
	title: string;
	text: string;
	bankText: string;
};

export type FormType = {
	info: string;
	firstName: string;
	firstNameValidation: string;
	lastName: string;
	lastNameValidation: string;
	companion: string;
	transportTitle: string;
	transportValidation: string;
	yes: string;
	no: string;
	submitLabel: string;
	attendanceTitle: string;
	attendanceValidation: string;
};

export type CounterType = {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
};

export type HeaderType = {
	title: string;
	subtitle: string;
};

export type MenuType = {
	whenAndWhere: string;
	rsvp: string;
	present: string;
	transport: string;
	recommendations: string;
};

export type WhereType = {
	title: string;
	ceremony: string;
	celebration: string;
	buttonTitle: string;
};
