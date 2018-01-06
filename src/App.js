import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import goodsSortData from './common/data/goodsSort.js'

// this.setState({selected}) es6：默认键值和键名相同
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: []
        }
    }
    // 1、把选择的内容呈现在你的选择右边
    // 2、判断当前行之前有没有被选择
    // 3、排序
    // 4、点击x删除元素
    onSelected=(elt, order)=>{
        let {selected} = this.state
        let inThere = selected.some((elt)=>elt.order===order)
        if(inThere){
            selected=selected.map(selectedItem=>{
                if(selectedItem.order===order){
                    selectedItem.item = elt//替换为当前选择的内容
                }
                return selectedItem
            })
        }else{
            selected.push({item: elt, order})
        }

        selected.sort((a,b)=>a.order-b.order)

        this.setState({selected})//键名和键值相同
    }

    onDelete=(order) =>{
        let {selected} = this.state
        selected=selected.filter((elt)=>{
            return elt.order!==order
            //返回值为true,会被保留
        })
        this.setState({selected})
    }
    render() {
        let {selected} = this.state
        //console.log(selected)
        let selectedComp = selected.map((elt)=>{
            return (
                <div key={elt.item.id}>
                    {elt.item.desc}
                    <a
                        onClick={(ev)=>{
                            ev.preventDefault()
                            this.onDelete(elt.order)
                            }
                        }
                        href=""
                        className="close">x</a>
                </div>
            )
        })
       let comp = goodsSortData.map((elt)=>{
            return [
                <li key={elt.id}>
                    {elt.sort}
                    {
                        elt.data.map((item)=>{
                            return (
                                <a key={item.id}
                                   className={selected.some(elt=>elt.item.id=== item.id) ? 'active':''}
                                   href="javascript:;"
                                   onClick={()=>this.onSelected(item,elt.order) }
                                    >
                                    {item.desc}
                                </a>
                            )
                        })
                    }
                </li>
            ]
        })


        return (
            <div className="App">
                <h3 className="App-title">商品筛选</h3>
                <div className="content">
                    <nav id="goods-choice" style={{clear:'left'}}>
                        <span>你的选择:</span>
                            {selectedComp}
                    </nav>

                        <ul id="goodsSort">
                            {comp}
                            {/*<li>
                                品牌:
                                <a href="javascript:;">苹果</a>
                                <a href="javascript:;">小米</a>
                                <a href="javascript:;">锤子</a>
                            </li>
                            <li>
                                系统:
                                <a href="javascript:;">安卓</a>
                                <a href="javascript:;">苹果</a>
                                <a href="javascript:;">微软</a>
                            </li>*/}
                        </ul>

                </div>
            </div>
        );
    }
}

export default App;
