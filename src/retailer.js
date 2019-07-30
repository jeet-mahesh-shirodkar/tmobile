import React from 'react';
import mobiles from './mobiles.json';
import './retailer.css';

export default class Retailer extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            mobiles:mobiles,
            mobileThree:'',
            mobileTwo:'',   
            mobileOne:'',
            mobileOneList:[],
            mobileTwoList:[],
            mobileThreeList:[],
            oneMores:[],
            notification :"",
            // flag:true
        })
        // this.displayMobileList=this.displayMobileList.bind(this);
        this.mobileOneHandler=this.mobileOneHandler.bind(this);
        this.mobileTwoHandler=this.mobileTwoHandler.bind(this);
        this.mobileThreeHandler=this.mobileThreeHandler.bind(this);
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
    mobileThreeHandler(event){
        var mobileThrees =event.target.value
        this.setState({
            mobileThree:mobileThrees
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
        var threeList =[];
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
                if(this.state.mobileThree === mobiles[i].Name){
                    threeList.push(mobiles[i])
                }   
          }
          this.setState({
            mobileOneList:oneList
        }) 
        this.setState({
            mobileTwoList:twoList
        })
        this.setState({
            mobileThreeList:threeList
        }) 
    }
   
   oneMore(e){ 
    console.log("innnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
       e.preventDefault();
       const oneMoreAdd = this.state.oneMores;
       const size = oneMoreAdd+1;
       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",size)
       oneMoreAdd.push(size);
       console.log("sssssssssssssssss",oneMoreAdd.length)
       if(oneMoreAdd.length === 1){
       
        this.setState({
         oneMores:oneMoreAdd,
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
      var mobileThreeLists =this.state.mobileThreeList;
      var oneMoreAdd = this.state.oneMores;
      console.log(oneMoreAdd)

  return (
    <div className="retailer">
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
     <input  type="text" className="im1" value={this.state.mobileOne} onChange={this.mobileOneHandler}/>
     <input  type="text" className="im2" value={this.state.mobileTwo} onChange={this.mobileTwoHandler}/>
     <input  type="submit" value="Compare"/>
     </form>
     <div className="oneMore">
     <button onClick={this.oneMore} className="oneMorebtn">Add One More</button>
     <p>{this.state.notification}</p>
     </div>
     <div className ="Input_Addon">
      {
          oneMoreAdd.map(oneMoreAdd => {
            if(oneMoreAdd.length === 1){ 
            return(
                  <input type="text" className="im3" value={this.state.mobileThree} onChange={this.mobileThreeHandler}/>
              );
          }
        })
      }
     </div>
     <div className="mobileList">
         <ol className="mobileOneList">
            {
                mobileOneLists.map(mobileOneLists =>(
                    <li key={mobileOneLists.Id}>
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
                     <li key={mobileTwoLists.Id}>
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
         <ol>
             {
                 mobileThreeLists.map(mobileThreeLists =>(
                     <li key={mobileThreeLists.Id}>
                      <p>Name : {mobileThreeLists.Name}</p>
                      <p>Ram : {mobileThreeLists.Ram}</p>
                      <p>Camera Front : {mobileThreeLists.Camera.Front}</p>
                      <p>Camera Back : {mobileThreeLists.Camera.Back}</p>
                      <p>Price : {mobileThreeLists.Price}</p>
                      <p>Battery : {mobileThreeLists.Battery}</p> 
                     </li>
                 ))
             }
         </ol>
     </div>
    </div>
  );
}}

// export default Retailer;
