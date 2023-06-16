import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import List from '../src/components/list';
import Item from '../src/components/item';

// Datos de ejemplo para las pruebas
const info = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

describe('List', () => {
  it('renderiza la lista de forma correcta', () => {
    const { getByTestId, getByText } = render(<List info={info} />);
    
    const listComponent = getByTestId('list-component');
    expect(listComponent).toBeDefined();

    // Verifica que se rendericen los elementos de la lista
    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');
    const item3 = getByText('Item 3');
    expect(item1).toBeDefined();
    expect(item2).toBeDefined();
    expect(item3).toBeDefined();
  });
});