import { render } from "preact"
import type { Device, PresetList } from "../render"
import { SearchResults } from "../searchResults"

let device: Device | undefined
let search: string | undefined

let searchInput: HTMLInputElement = document.querySelector(".presetSearch")! as HTMLInputElement
let resultDiv: HTMLDivElement = document.querySelector(".results")! as HTMLDivElement

const loadSearch = async () => {
    device = await (await fetch("./device.json")).json()
    renderSearch()
}

const renderSearch = () => {
    if (!device || !search) {
        return
    }

    let result: PresetList = {
        banks: []
    }

    for (let b of device.presets.banks) {
        let resultBank = {
            name: b.name,
            presets: []
        }
        const s = search.toLowerCase()
        for (let p of b.presets) {
            if (p.name.toLowerCase().includes(s) || p.tags.some(t => t.toLowerCase().includes(s))) {
                resultBank.presets.push(p)
            }
        }
        if (resultBank.presets.length > 0) {
            result.banks.push(resultBank)
        }
    }

    render(<SearchResults presets={result} />, resultDiv)
}

loadSearch()

searchInput.onkeyup = () => {
    search = searchInput!.value

    renderSearch()
}

