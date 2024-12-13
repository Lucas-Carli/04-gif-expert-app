import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        // Se crea el sujeto de pruebas
        render(<AddCategory onNewCategory={() => { }} />);
        // Se extrae el input
        const input = screen.getByRole('textbox');
        // Se dispara el evento 
        fireEvent.input(input, { target: { value: 'Saitama' } });
        // SE hace la acepción de lo que se espera que suceda
        expect(input.value).toBe('Saitama');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });


    test('no debe de llamar onNewCategory si el input está vacío', () => {

        // Preparación del sujeto de pruebas
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0); 
        expect( onNewCategory ).not.toHaveBeenCalled(); 

    });


})