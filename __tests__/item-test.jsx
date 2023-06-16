import React from 'react';
import { render, getByText, getByTestId } from '@testing-library/react-native';
import Item from '../src/components/item';

describe('Item', () => {
  const property = {
    image: 'https://example.com/image.jpg',
    name: 'Example Property',
    address: 'Main Street',
    monthlyCost: 500,
    rating: 4.5,
  };

  it('muestra datos de item correctamente', () => {
    const { getByText, getByTestId } = render(<Item property={property} />);

    const nameElement = getByText('Example Property', { exact: false });
    const addressElement = getByText('Main Street', { exact: false });
    const costElement = getByText('$500/M', { exact: false });
    const ratingElement = getByText('4.5', { exact: false });
    const imageElement = getByTestId('property-image', { exact: false });

    expect(nameElement).toBeDefined();
    expect(addressElement).toBeDefined();
    expect(costElement).toBeDefined();
    expect(ratingElement).toBeDefined();
    expect(imageElement).toBeDefined();
  });
});
