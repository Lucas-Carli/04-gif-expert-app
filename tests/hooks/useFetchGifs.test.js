import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook de useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        // Creamos un callback, es decir una función
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imágenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        // Para que ESPERE hasta que el resultado sea mayor a cero
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );    
     
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

})