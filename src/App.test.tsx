import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

  test("email input should accept text",async ()=>{
    render(<App/>)
    
    const emailInputNode = screen.getByTestId('myinput');
    const getButton=screen.getByText("Get It")
    const result = screen.getByTestId("dats")

      // expect(emailInputNode.value).toMatch("18")
    fireEvent.change(emailInputNode, {target: {value: '18'}} )
    fireEvent.click(getButton)
    await new Promise((r) => setTimeout(r, 2000));
    expect(result.innerHTML).toEqual("7")
  })
