// @ts-nocheck
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import Home from '../src/pages/Home/Home';

const mockFetch = (responseData: any, isError: boolean = false) => {
  return jest.fn(() =>
      Promise.resolve({
        ok: !isError,
        status: isError ? 500 : 200,
        json: () => Promise.resolve(responseData),
      })
  );
};

const mockResponse = [
  {
    name: 'Persimmon',
    id: 52,
    family: 'Ebenaceae',
    order: 'Rosales',
    genus: 'Diospyros',
    nutritions: {
      calories: 81
    },
  },
  {
    name: 'Apple',
    id: 53,
    family: 'Rosaceae',
    order: 'Rosales',
    genus: 'Malus',
    nutritions: {
      calories: 52
    },
  },
]

const homeRender = () => {
  return render(
      <HelmetProvider>
        <Home />
      </HelmetProvider>,
  );
};

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders initial state with empty jar', () => {
  homeRender();

  // Initially, the jar must be empty
  const initialText = screen.getByText("You haven't added any fruits to your jar yet :(");
  expect(initialText).toBeInTheDocument();
});

test('renders the fruit list correctly', () => {
  homeRender();

  // Fruit list container should be present in the document
  const fruitList = document.getElementById('fruit-list');
  expect(fruitList).toBeInTheDocument();
});

test('retries fetching data and displays fruit list', async () => {
  const mockFetchFailure = mockFetch(null, true);
  const mockFetchSuccess = mockFetch(mockResponse);

  global.fetch = jest.fn()
      .mockImplementationOnce(mockFetchFailure)
      .mockImplementationOnce(mockFetchSuccess);

  homeRender();

  // Wait for the fruit item to be fetched and displayed after retry
  const fruitList = document.getElementById('fruit-list');
  const fruitItem = await waitFor(() => within(fruitList).getByText('Apple'), { timeout: 3000 });
  expect(fruitItem).toBeInTheDocument();

  // Ensure fetch was called twice (once for failure, once for success)
  expect(global.fetch).toHaveBeenCalledTimes(2);
});

test('adds fruit to the jar when the add button is clicked', async () => {
  const mockFetchSuccess = mockFetch(mockResponse);
  global.fetch = jest.fn().mockImplementationOnce(mockFetchSuccess);

  homeRender();

  // Wait for the fruit item to be fetched and displayed
  const fruitList = document.getElementById('fruit-list');
  const fruitItem = await waitFor(() => within(fruitList).getByText('Apple'), { timeout: 3000 });
  expect(fruitItem).toBeInTheDocument();

  // Find and click the add button
  const fruitItemParent = fruitItem.parentElement;
  expect(fruitItemParent).toBeInTheDocument();

  const fruitItemAddBtn = fruitItemParent.querySelector('button');
  expect(fruitItemAddBtn).toBeInTheDocument();
  fireEvent.click(fruitItemAddBtn);

  // Check if the fruit item was added to the jar
  const jarList = document.getElementById('jar-list');
  expect(jarList).toBeInTheDocument();

  const updatedText = within(jarList).getByText('Apple');
  expect(updatedText).toBeInTheDocument();
});