import React, { Component } from 'react';

export default class SelectBox extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      allChecked: false,
      checkedCount: 0,
      options: [
        { value: 'selectAll', text: 'Select All' },
        { value: 'orange', text: 'Orange' },
        { value: 'apple', text: 'Apple' },
        { value: 'grape', text: 'Grape' }
      ]
    };
  }

  handleClick(e) {
    let clickedValue = e.target.value;
    console.log(e.target.value)
    
  }

  render() {
    console.log('Selected boxes: ', this.state.checkedCount);

    const options = this.state.options.map(option => {
      return (
        <input onClick={this.handleClick} type='checkbox' name={option.value} key={option.value}
               value={option.value} ref={option.value} > {option.text} </input>
      );
    });


    return (
      <div className='SelectBox'>
        <form>
          {options}
        </form>
      </div>
    );
  }
}