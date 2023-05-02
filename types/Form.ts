export type RsvpFormData = {
	name: string;
	surname: string;
	transport: BooleanStringValue;
	attendance: BooleanStringValue;
	allergies?: BooleanStringValue;
	allergiesDetails?: string;
	menu?: Menu;
	id?: string;
	date?: string;
	companion?: BooleanStringValue;
	companionAllergies?: BooleanStringValue;
	companionAllergiesDetails?: string;
	companionMenu?: Menu;
	companionName?: string;
};

export type Menu = 'vegetarian' | 'conventional';

type BooleanStringValue = 'true' | 'false';
