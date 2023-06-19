import { Component } from "preact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { DeviceIndex } from "./render";

export type PresetsIndexProps = {
    devices: DeviceIndex
}

export class PresetsIndex extends Component<PresetsIndexProps, any> {
    render() {
        let list = this.props.devices.manufacturer.map(manu => {
            let modules = manu.devices.map((module) => {
                const dir = module.path

                return <li><a href={`devices/${dir}/index.html`}>{module.name}</a></li>
            })

            return <>
                <h2>{manu.name}</h2>
                <ol class="synthmodes-moduleList">
                    {modules}
                </ol>
            </>
        })

        return <html>
            <head>
                <title>Synthesizer Factory Preset Database</title>
                <link rel="stylesheet" href="./static/index.css" />
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="A collection of mobile-friendly synthesizer cheat sheets."></meta>
            </head>
            <body className="synthmodes-body">
                <Header />
                <div className="synthmodes-content">
                    <div className="synthmodes-hero">
                        Search and find the best factory presets for your synthesizer and effects.
                    </div>
                </div>
                {list}
                <Footer />
            </body>
        </html>
    }
}