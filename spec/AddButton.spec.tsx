import uE from "@testing-library/user-event";
import {render} from "@testing-library/react";
import {AddButton} from "../src/components/AddButton";

describe('Кнопка "Добавить"', () => {
    const userEvent = uE.setup();

    it.todo("Блокировака для строки больше 32 символов");
    it.todo("Блокировака для строки меньше 1 символа");


    it('Проверка кликов по кнопке', async () => {
        expect('calculate').toBe('calculate')
    });
})