import {screen, render,} from "@testing-library/react";
import {Input} from "../src/components/input";
import uE from "@testing-library/user-event";
import '@testing-library/jest-dom';
describe("Поле ввода", () => {

    const userEvent = uE.setup({delay: 100});

    // it.todo("огранечение на ввод более 32 символов");

    it("Поле ввода", async () => {
        const fn = jest.fn();

        render(<Input defaultValue="" onChange={fn}/>);
        // Находим элемент
        const input = screen.getByRole("textbox");
        await userEvent.type(input, 'Hello')
        await userEvent.tripleClick(input)
        const cuttedValue = await userEvent.cut()

        await userEvent.clear(input);

        await userEvent.paste(cuttedValue)

        expect(screen.getByDisplayValue(/Hello/i)).toBeInTheDocument;
    });
});
