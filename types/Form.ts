export type RsvpFormData = {
	name: string;
	surname: string;
	companion?: string;
	transport: transport;
	attendance: transport;
	id?: string;
	date?: string;
};

type transport = 'true' | 'false';
