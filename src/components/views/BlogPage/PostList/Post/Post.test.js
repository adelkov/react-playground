
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Post from './Post';

function setup() {
    const props = {
        post: {},
        onDeletePost: () => {}
    };

    return shallow('<Post {...props}/>');
}

it('Renders a p tag', ()=>{
    const wrapper = setup();
    expect(wrapper.find('p'.length)).toBe(1);
});
