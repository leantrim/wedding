'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RsvpFormData } from '../../../../types/Form';
import {
	StyledTable,
	StyledHeader,
	StyledRow,
	StyledCell,
	StyledHead,
} from './StyledTable';
import { ChangeEvent } from 'react';
import { SiteConfig } from '../../config';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../../../lib/firebase';
import Pagination from '../Pagination';
import Body from './Body';
import Header from './Header';
import ShowMore from '../ShowMore';
import NewForms from '../NewForms';

type Props = {
	form: RsvpFormData[];
};

const dbInstance = collection(database, 'forms');

const highlightSearchTerm = (text: string, searchTerm: string) => {
	const startIndex = text.toLowerCase().indexOf(searchTerm.toLowerCase());
	if (startIndex === -1) {
		return <>{text}</>;
	}

	const endIndex = startIndex + searchTerm.length;
	const beforeSearchTerm = text.slice(0, startIndex);
	const searchTermText = text.slice(startIndex, endIndex);
	const afterSearchTerm = text.slice(endIndex);

	return (
		<>
			{beforeSearchTerm}
			<span style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
				{searchTermText}
			</span>
			{afterSearchTerm}
		</>
	);
};

function formatDateFromTimestamp(isoDateString: string) {
	const date = new Date(isoDateString);
	const dateFormatter = new Intl.DateTimeFormat(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZone: 'Europe/Berlin',
		hour12: false,
	});
	const formattedDate = dateFormatter.format(date);
	return `${formattedDate}`;
}

export interface VisibleRsvp {
	[key: string]: boolean;
}

function Index(props: Props) {
	const { form } = props;

	const [attendingFilter, setAttendingFilter] = useState<boolean | null>(null);
	const [transportFilter, setTransportFilter] = useState<boolean | null>(null);
	const [dateSortDescending, setSortDescending] = useState(true);
	const [forms, setForms] = useState<RsvpFormData[]>(form);
	const [testForms, setTestForms] = useLocalStorage('forms', []);
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(20);
	const [newFormSinceLastViewed, setNewFormSinceLastViewed] = useState(false);
	const [newForms, setNewForms] = useState<RsvpFormData[]>([]);
	const [showNewFormsOnly, setShowNewFormsOnly] = useState(false);
	const [visibleRsvp, setVisibleRsvp] = useState<VisibleRsvp>({});
	setVisibleRsvp;

	useEffect(() => {
		const itemsNotInTestForms = forms.filter((formItem) => {
			return !testForms.some(
				(testFormItem: RsvpFormData) => testFormItem.id === formItem.id
			);
		});

		if (itemsNotInTestForms.length > 0) {
			// Perform an action with the items not in testForms
			setNewFormSinceLastViewed(true);
			setNewForms(itemsNotInTestForms);
		}
	}, [forms, testForms]);

	const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const sortedForms = forms.sort((a, b) => {
		return dateSortDescending
			? new Date(b.date!).getTime() - new Date(a.date!).getTime()
			: new Date(a.date!).getTime() - new Date(b.date!).getTime();
	});

	const formsToFilter = showNewFormsOnly ? newForms : sortedForms;

	const filteredForm: RsvpFormData[] = formsToFilter.filter((item) => {
		const searchTermParts = searchTerm.toLowerCase().split(' ');

		const searchInName = `${item.name} ${item.surname}`.toLowerCase();
		const searchInCompanion = item.companionName?.toLowerCase() || '';

		const nameMatches = searchTermParts.every((part) =>
			searchInName.includes(part)
		);
		const companionMatches = searchTermParts.every((part) =>
			searchInCompanion.includes(part)
		);

		if (
			attendingFilter !== null &&
			item.attendance !== attendingFilter.toString()
		) {
			return false;
		}
		if (
			transportFilter !== null &&
			item.transport !== transportFilter.toString()
		) {
			return false;
		}
		if (!nameMatches && !companionMatches) {
			return false;
		}
		return true;
	});

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const paginatedForm = filteredForm.slice(startIndex, endIndex);

	const clearFilters = () => {
		setAttendingFilter(null);
		setTransportFilter(null);
		setSearchTerm('');
	};

	const handleAttendingFilterChange = (
		event: ChangeEvent<HTMLSelectElement>
	) => {
		const value =
			event.target.value === 'null' ? null : event.target.value === 'true';
		setAttendingFilter(value);
	};

	const handleTransportFilterChange = (
		event: ChangeEvent<HTMLSelectElement>
	) => {
		const value =
			event.target.value === 'null' ? null : event.target.value === 'true';
		setTransportFilter(value);
	};

	const handleDeleteForm = (id: string) => {
		deleteFormDocument(id);
		setForms(forms.filter((item) => item.id !== id));
	};

	const toggleSortOrder = () => {
		setSortDescending(!dateSortDescending);
	};

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	async function deleteFormDocument(documentId: string) {
		const formsCollection = collection(database, 'forms');
		const documentRef = doc(formsCollection, documentId);

		try {
			await deleteDoc(documentRef);
			console.log(`Document with ID ${documentId} deleted successfully.`);
		} catch (error) {
			console.error('Error deleting document:', error);
		}
	}

	return (
		<Container>
			{newFormSinceLastViewed && (
				<NewForms
					clearFilters={clearFilters}
					newForms={newForms}
					setNewFormSinceLastViewed={setNewFormSinceLastViewed}
					setShowNewFormsOnly={setShowNewFormsOnly}
					showNewFormsOnly={showNewFormsOnly}
				/>
			)}
			<SearchDiv>
				<div>
					<label htmlFor='search'>Search: </label>
					<input
						placeholder='Search name or companion'
						type='text'
						id='search'
						value={searchTerm}
						onChange={handleSearchTermChange}
					/>
				</div>
				<ShowMore
					forms={forms}
					itemsPerPage={itemsPerPage}
					paginatedForm={paginatedForm}
					setItemsPerPage={setItemsPerPage}
				/>
			</SearchDiv>
			<StyledTable>
				<Header
					attendingFilter={attendingFilter}
					dateSortDescending={dateSortDescending}
					handleAttendingFilterChange={handleAttendingFilterChange}
					handleTransportFilterChange={handleTransportFilterChange}
					toggleSortOrder={toggleSortOrder}
					transportFilter={transportFilter}
				/>
				<Body
					formatDateFromTimestamp={formatDateFromTimestamp}
					handleDeleteForm={handleDeleteForm}
					handleSearchTermChange={handleSearchTermChange}
					highlightSearchTerm={highlightSearchTerm}
					paginatedForm={paginatedForm}
					searchTerm={searchTerm}
				/>
			</StyledTable>
			<Pagination
				currentPage={currentPage}
				filteredFormLength={filteredForm.length}
				itemsPerPage={itemsPerPage}
				handlePageChange={handlePageChange}
			/>
		</Container>
	);
}

export const StyledNumber = styled.span`
	font-weight: bold;
`;

export const Button = styled.button`
	background-color: ${SiteConfig.colors.primary};
	border: 2px solid ${SiteConfig.colors.primaryDarker};
	color: black;
	font-weight: bold;
	&:hover {
		background-color: ${SiteConfig.colors.primaryDarker};
		border: 2px solid ${SiteConfig.colors.primaryDarker};
		cursor: pointer;
	}
	text-decoration: none;
`;

const SearchDiv = styled.div`
	padding: 24px;
	width: 100%;
	display: flex;
	gap: 24px;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
	background-color: white;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default Index;
