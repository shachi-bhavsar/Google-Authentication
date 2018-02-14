import React from 'react'
import Child from './Child'
import data from './data'

const tmp = data.map(function(a) {
     return a.topping.map(function(p) {
         return p
     })
})
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [],
        tmp : tmp,
        selectedItem : []
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleInputChange(event) {
       
       let opt = this.state.options
       if(this.state.options[event.target.id])
       {
            let arr = this.state.options[event.target.id]
            if(arr.indexOf(event.target.name) === -1)
            {
                arr.push(event.target.name)  
                opt[event.target.id] = arr 
                this.setState({
                    options : opt
                })
            }
            else
            {
                var index = arr.indexOf(event.target.name)
                arr.splice(index, 1);
                opt[event.target.id] = arr 
                this.setState({
                    options : opt
                })
            }            
       }
       else
       {
            opt[event.target.id] = [event.target.name]
            this.setState({
                options : opt
            })
       }
       //console.log("options "+this.state.options)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let temp = this.state.options[e.target.name]
        this.setState({
            selectedItem : temp
        })
        console.log(this.state.selectedItem)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
            {
                this.state.tmp.map((frst,findex) =>{
                    return (
                        <div key={findex}>
                            <div key={frst} style={{display: 'flex', flexDirection: 'row'}}>
                                {frst.map((scnd) => {
                                    return (
                                        <div key={scnd.id}>
                                        <Child value={scnd.type} checked={false} parent={findex} id={findex} handleChange={this.handleInputChange}/>
                                        </div>
                                    )
                                })}
                                <input type="submit" value="Submit" name={findex} onClick={this.handleSubmit}/>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
        <div>
           <span>{JSON.stringify(this.state.selectedItem)}</span>
        </div>
      </form>
      );
    }
  }