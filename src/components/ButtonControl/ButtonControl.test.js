/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import ButtonControl from ".";

const mockFunction = jest.fn();

describe("Button Control", () => {
    beforeEach(() => {
        render(<ButtonControl displayText={"test text"} clickHandler={mockFunction}/>)
    })

    test("It displays a button", () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    test("It displays the passed test", () => {
        const button = screen.getByRole('button');
        expect(button.textContent).toBe('test text')
    })

    test("It triggers the passed function on click", async () => {
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(mockFunction).toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledTimes(1);
    })
})