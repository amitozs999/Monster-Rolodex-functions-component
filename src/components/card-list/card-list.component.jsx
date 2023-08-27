import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {

    render() {
        // console.log(this.props.monsters);
        // console.log('render from CardList ');
        const { monstersobjlistPr } = this.props;
        return (
            <div className="card-list">
                {monstersobjlistPr.map((monsterobj) => {
                    return (
                        <Card monstercardPr={monsterobj}/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;