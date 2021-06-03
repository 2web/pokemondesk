/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, unmountComponentAtNode } from 'react-dom';
 import { act } from 'react-dom/test-utils';
 import Heading from './index';
 
 describe('Heading', () => {
     let container: Element | null = null;
 
     beforeEach(() => {
         container = window.document.createElement('div');
         window.document.body.appendChild(container);
     });
 
     afterEach(() => {
         if (container !== null) {
             unmountComponentAtNode(container);
             container.remove();
             container = null;
         }
     });
 
     it('render', () => {
         act(() => {
             render(<Heading />, container);
         });
 
         expect(container?.innerHTML).toBeDefined();
     });
 
     it('render with children', () => {
         act(() => {
             render(<Heading>Title</Heading>, container);
         });
 
         expect(container?.innerHTML).toBeDefined();
         expect(container?.innerHTML).toEqual('<h1 class="xl">Title</h1>');
         expect(container?.textContent).toEqual('Title');
     });
 
     it('render with props', () => {
         act(() => {
             render(<Heading size="s">Title</Heading>, container);
         });
 
         expect(container?.innerHTML).toBeDefined();
         expect(container?.innerHTML).toEqual('<h4 class="s">Title</h4>');
         expect(container?.textContent).toEqual('Title');
         expect(container?.querySelector('h4')).not.toBeNull();
     });
 });