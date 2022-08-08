import React from "react";
import NavBar from "../NavBar";

import { render, fireEvent, waitFor, screen, cleanup, getQueriesForElement, getByTestId } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test('renders button correctly', () => {
    const { getByTestId } = render(<NavBar/>);

    expect(getByTestId('eCommerceButton'));

})