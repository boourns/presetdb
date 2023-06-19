import { Attributes, Component, ComponentChild, ComponentChildren, Ref } from "preact";
import { PresetList } from "./render";

export type SearchResultsProps = {
    presets: PresetList
}

export class SearchResults extends Component<SearchResultsProps, any> {

    render() {
        const body = this.props.presets.banks.map(bank => {
            const list = bank.presets.map(p => 
                <div>{p.slot}: {p.name}</div>
            )

            return <div>
                <h2>{bank.name}</h2>
                {list}
            </div>
        })
        return <div>
            {body}
        </div>
    }
    
}