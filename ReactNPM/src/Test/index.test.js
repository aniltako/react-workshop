import React from 'react';
import { HelloTest, Hello, CurrentDateTime} from "./index";
import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

describe('<HelloTest>', () => {
   
    it('Test With Render', () => {
        const renderer = TestRenderer.create(<HelloTest />);
        const instance = renderer.root;
        console.log(renderer.toJSON())
        expect(instance.findAllByType('div').length).toEqual(1);
        expect(instance.findAllByType('h1').length).toEqual(1);
        expect(instance.findAllByType('h3').length).toEqual(1);

    });

     it('Test With Shallow', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<HelloTest />);
        const result = renderer.getRenderOutput();
        console.log(result)
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <Hello name="World"/>,
            <CurrentDateTime />
        ])
     });
});
