import { Component } from "preact";
import { Device } from "./render";
import { Header } from './components/header';
import { Footer } from './components/footer';
import { SearchResults } from "./searchResults";

export type PageProps = {
    device: Device
}

export class PageView extends Component<PageProps, any> {
    render() {
        const device = this.props.device

        return <html>
            <head>
                <title>{device.name} | Factory Presets</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={`Searchable factory preset list for ${device.manufacturer} ${device.name}`}></meta>
                <link rel="stylesheet" href="../../static/index.css" />
                <link rel="stylesheet" href="../../static/module.css" />
            </head>
            <body class="page-body">
                <Header pageTitle={device.name}/>
                <div class="mainWrapper">
                    <div class="main">
                        <input class="presetSearch" type="text" placeholder={`Search ${device.name} presets`}/>
                        <div class="results">
                            <SearchResults presets={device.presets}></SearchResults>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </body>
            <script src="../../static/client.js"></script>
        </html>
    }
}