import React from 'react';
import { render, getByText } from '@testing-library/react-native';
import Icon from '../src/components/icon';

describe('Icon', () => {
  const property = {
    room: 3,
    bathroom: 2,
    area: 1500,
  };

  it('muestra datos de propiedad que se encuentran en componente icon', () => {
    const { getByText } = render(<Icon property={property} />);

    const roomElement = getByText('3', { exact: false });
    const bathroomElement = getByText('2', { exact: false });
    const areaElement = getByText('1500 ft²', { exact: false });

    expect(roomElement).toBeDefined();
    expect(bathroomElement).toBeDefined();
    expect(areaElement).toBeDefined();
  });
});