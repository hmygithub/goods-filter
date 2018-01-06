import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import goodsSortData from './common/data/goodsSort.js'

// this.setState({selected}) es6：默认键值和键名相同
class App extends Component {
    // 每行只能选择一个
    onSelected=(elt,order)=>{
        
    }
    render() {
       let comp = goodsSortData.map((elt,i)=>{
            return [
                <li key={elt.id}>
                    {elt.sort}
                    {
                        elt.data.map((item)=>{
                            return (
                                <a key={item.id}
                                   href="javascript:;"
                                   onClick={()=>this.onSelected(item,elt.order)  }
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
                        <div>
                            锤子
                            <span className="close"></span>
                        </div>
                    </nav>
                    <div id="content-details">
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
            </div>
        );
    }
}

export default App;
