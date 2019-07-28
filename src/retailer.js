import React from 'react';
import mobiles from './mobiles.json';
import './retailer.css';

class Retailer extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            mobiles:mobiles,
            mobileTwo:'',   
            mobileOne:'',
            mobileOneList:[],
            mobileTwoList:[],
            oneMores:[1],
            notification :"",
            flag:true
        })
        // this.displayMobileList=this.displayMobileList.bind(this);
        this.mobileOneHandler=this.mobileOneHandler.bind(this);
        this.mobileTwoHandler=this.mobileTwoHandler.bind(this);
        this.compare=this.compare.bind(this);
        this.oneMore=this.oneMore.bind(this);
    }
    mobileOneHandler(event){
        console.log(event.target)
        var mobileOnes=event.target.value
        this.setState({
            mobileOne:mobileOnes
        })
    }
    mobileTwoHandler(event){
        console.log(event.target)
        var mobileTwos=event.target.value
        this.setState({
            mobileTwo:mobileTwos
        })
    }

    compare(event){
        event.preventDefault();
        const {mobiles} =this.state;
        var oneList = [];
        var twoList = [];
          for(var i=0;i<mobiles.length;i++){
                // console.log(mobiles[i].Name)
                if(this.state.mobileOne === mobiles[i].Name){
                    console.log(mobiles[i].Name)
                    oneList.push(mobiles[i])
                    
                    console.log(oneList)
                    
                }
                if(this.state.mobileTwo === mobiles[i].Name){
                    twoList.push(mobiles[i])
                    console.log(twoList)
                }   
          }
          this.setState({
            mobileOneList:oneList
        }) 
        this.setState({
            mobileTwoList:twoList
        }) 
    }
   
   oneMore(e){ 
    console.log("innnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
       e.preventDefault();
       const oneMoreAdd = this.state.oneMores;
       const size = oneMoreAdd+1;
       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",size)
       oneMoreAdd.push(size);
       if(this.state.flag === true){
       this.setState({
         oneMores:oneMoreAdd,
         flag:false
       })
    }
    else{
      var notifications ="You can compared only 3 Mobiles."
      this.setState({
          notification:notifications
      })
    }
   }
    
  render(){
      const {mobiles} = this.state
        for(var i=0;i<mobiles.length;i++){     
      console.log("ddddddddddd",mobiles[i].Id)
        }
        
      var mobileOneLists = this.state.mobileOneList; 
      console.log(mobileOneLists) 
      var mobileTwoLists =this.state.mobileTwoList;

      var oneMoreAdd = this.state.oneMores;
      console.log(oneMoreAdd)

  return (
    <div className="retainer">
    {
        <ol className="mobileNames">
            {
                mobiles.map(mobiles =>(
                    <li key={mobiles.Id}>
                        <div>
                        <p>{mobiles.Name}</p>
                        </div>   
                    </li>
                ))
            }

        </ol>
    }
    <form onSubmit={this.compare}>
     <input  type="text" value={this.state.mobileOne} onChange={this.mobileOneHandler}/>
     <input  type="text" value={this.state.mobileTwo} onChange={this.mobileTwoHandler}/>
     <input  type="submit" value="Compare"/>
     </form>
     <button onClick={this.oneMore}>Add One More</button>
     <p>{this.state.notification}</p>
     <div className ="Input_Addon">
      {
          oneMoreAdd.map(oneMoreAdd =>{
              return(
                  <input type="text"/>
              );
          })
      }
     </div>
     <div className="mobileList">
         <ol className="mobileOneList">
            {
                mobileOneLists.map(mobileOneLists =>(
                    <li key={1}>
                    <p>Name : {mobileOneLists.Name}</p>
                    <p>Ram : {mobileOneLists.Ram}</p>
                    <p>Camera Front : {mobileOneLists.Camera.Front}</p>
                    <p>Camera Back : {mobileOneLists.Camera.Back}</p>
                    <p>Price : {mobileOneLists.Price}</p>
                    <p>Battery : {mobileOneLists.Battery}</p>
                    </li>
                ))
            }
         </ol>
         <ol>
             {
                 mobileTwoLists.map(mobileTwoLists =>(
                     <li key={2}>
                      <p>Name : {mobileTwoLists.Name}</p>
                      <p>Ram : {mobileTwoLists.Ram}</p>
                      <p>Camera Front : {mobileTwoLists.Camera.Front}</p>
                      <p>Camera Back : {mobileTwoLists.Camera.Back}</p>
                      <p>Price : {mobileTwoLists.Price}</p>
                      <p>Battery : {mobileTwoLists.Battery}</p> 
                     </li>
                 ))
             }
         </ol>
     </div>
    </div>
  );
}}

export default Retailer;
