import React from "react";
import ContentBuilder from "../ContentBuilder";

import { render, fireEvent, waitFor, screen, cleanup, getQueriesForElement, getByTestId } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test('renders without crashing on first load', () => {
    render(<ContentBuilder/>);

    screen.getByTestId("mainPageContainer");
});